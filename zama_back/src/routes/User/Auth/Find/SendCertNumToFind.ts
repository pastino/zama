import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CertEmail } from "../../../../entities/CertEmail";
import { User } from "../../../../entities/User";
import { generateSecret, sendSecretMailToFind } from "../../../../utils";

const SendCertNumToFind = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const certNum = generateSecret(6);
    const certEmailRepository = getRepository(CertEmail);
    const userRepository = getRepository(User);

    const existingEmail = await userRepository.findOne({
      email,
      loginMethod: "EMAIL",
    });
    if (existingEmail) {
      await certEmailRepository.save({
        email,
        certNum,
      });
    } else {
      return res
        .status(200)
        .send({ success: false, message: "가입된 이메일이 아닙니다." });
    }

    sendSecretMailToFind(certNum, email);
    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default SendCertNumToFind;
