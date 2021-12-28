import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../../../entities/User";
import { filteredSubscriptions, generateToken } from "../../../../utils";

const LoginByKakao = async (req: Request, res: Response) => {
  try {
    const kakaoId = req.body.kakaoId;
    const terms = req.body.terms;
    const email = req.body.email;
    const nickName = req.body.nickname;
    console.log(nickName);
    const userRepository = getRepository(User);

    const userArr: User[] | undefined = await userRepository.find({
      where: { kakaoId },
      relations: ["subscriptions"],
    });

    const user = userArr[0];

    if (user) {
      return res.status(200).send({
        success: true,
        user: {
          ...user,
          subscriptions: filteredSubscriptions(user.subscriptions),
        },
        token: generateToken(user.id),
      });
    }

    if (!terms) {
      console.log("term in");
      return res.status(200).send({ success: true, user: null, token: null });
    }

    const savedUser = await userRepository.save({
      email: email ? email : "",
      name: nickName ? nickName : "",
      loginMethod: "KAKAO",
      kakaoId,
      serviceTermAgreement: terms.filter(
        (obj: any) => obj.title === "서비스 이용약관"
      ).check,
      privacyPolicyAgreement: terms.filter(
        (obj: any) => obj.title === "개인정보 처리방침"
      ).check,
      marketingAgreement: terms.filter(
        (obj: any) => obj.title === "마케팅 수신 동의"
      ).check,
    });

    const createUserArr: User[] | undefined = await userRepository.find({
      where: {
        kakaoId: savedUser.kakaoId,
      },
      relations: ["subscriptions"],
    });

    const createUser = createUserArr[0];
    const token = generateToken(createUser.id);

    return res.status(200).send({ success: true, user: createUser, token });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default LoginByKakao;
