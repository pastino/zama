import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../../entities/User";
import { generateToken } from "../../../utils";
import bcrypt from "bcryptjs";

const EmailLogin = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userRepository = getRepository(User);

    const user: any = await userRepository.findOne({
      email,
    });

    if (!user) {
      return res
        .status(200)
        .send({ success: false, message: "가입된 이메일이 아닙니다." });
    }

    if (user?.loginMethod !== "EMAIL") {
      return res.status(200).send({
        success: false,
        message: `${user?.loginMethod}로 가입된 이메일 입니다`,
      });
    }

    if (password) {
      const valid = await bcrypt.compare(password, user?.password);
      if (!valid) {
        return res.status(200).send({
          success: false,
          message: "잘못된 비밀번호 입니다.",
        });
      }
    }
    return res.status(200).send({
      success: true,
      user,
      token: generateToken(user.id),
    });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default EmailLogin;
