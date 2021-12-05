import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Contact } from "../../entities/Contact";

const ContactUs = async (req: Request, res: Response) => {
  try {
    const {
      user,
      body: { email, content },
    }: any = req;

    const contactRepository = getRepository(Contact);

    await contactRepository.save({
      userId: user.id,
      email,
      contents: content,
    });

    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default ContactUs;
