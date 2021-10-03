import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../../entities/User";
import { generateToken } from "../../../utils";
import bcrypt from "bcryptjs";

const EmailSignUp = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const term = req.body.term;
    console.log(term);
    const userRepository = getRepository(User);

    const user: User | undefined = await userRepository.findOne({
      email,
    });

    if (user) {
      return res
        .status(200)
        .send({ success: false, message: "이미 가입된 이메일입니다." });
    }

    await bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const createUser = await userRepository.save({
          name,
          email,
          password: hash,
          loginMethod: "EMAIL",
          serviceTermAgreement: term.filter(
            (obj: any) => obj.title === "서비스 이용약관"
          ).check,
          privacyPolicyAgreement: term.filter(
            (obj: any) => obj.title === "개인정보 처리방침"
          ).check,
          marketingAgreement: term.filter(
            (obj: any) => obj.title === "마케팅 수신 동의"
          ).check,
        });

        const token = generateToken(createUser.id);
        return res.status(200).send({ success: true, user: createUser, token });
      });
    });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default EmailSignUp;
