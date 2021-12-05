import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CertEmail } from "../../../../entities/CertEmail";
import { generateSecret, sendSecretMail } from "../../../../utils";

const ConfirmCertNum = async (req: Request, res: Response) => {
  try {
    const args: any = req.query;
    const email = args.email;
    const certNum = args.certNum;

    const certEmailRepository = getRepository(CertEmail);
    const existingEmail = await certEmailRepository.findOne({
      where: { email },
      order: { createAt: "DESC" },
    });

    if (!existingEmail)
      return res
        .status(200)
        .send({ success: false, message: "잘못된 이메일 입니다." });

    if (Number(existingEmail.certNum) !== Number(certNum))
      return res
        .status(200)
        .send({ success: false, message: "인증번호가 일치하지 않습니다." });

    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default ConfirmCertNum;
