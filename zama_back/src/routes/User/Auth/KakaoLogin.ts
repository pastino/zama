import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../../entities/User";
import { generateToken } from "../../../utils";

const KakaoLogin = async (req: Request, res: Response) => {
  try {
    const kakaoId = req.body.id;
    const terms = req.body.terms;

    const userRepository = getRepository(User);
    const user: User | undefined = await userRepository.findOne({
      kakaoId,
    });

    if (user) {
      return res
        .status(200)
        .send({ success: true, user, token: generateToken(user.id) });
    }

    if (!terms) {
      return res.status(200).send({ success: true, user: null, token: null });
    }

    const createUser = await userRepository.save({
      name: "테스트",
      email: "test@naver.com",
      loginMethod: "KAKAO",
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

    const token = generateToken(createUser.id);
    return res.status(200).send({ success: true, user: createUser, token });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default KakaoLogin;
