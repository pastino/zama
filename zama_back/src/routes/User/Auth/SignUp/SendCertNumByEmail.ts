import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { CertEmail } from "../../../../entities/CertEmail";
import { generateSecret, sendSecretMail } from "../../../../utils";

const SendCertNumByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const certNum = generateSecret(6);
    const certEmailRepository = getRepository(CertEmail);
    const existingEmail = await certEmailRepository.findOne({
      email,
    });
    if (existingEmail) {
      await certEmailRepository.update(
        {
          id: existingEmail?.id,
        },
        { certNum }
      );
    } else {
      await certEmailRepository.save({
        email,
        certNum,
      });
    }
    sendSecretMail(certNum, email);
    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default SendCertNumByEmail;
