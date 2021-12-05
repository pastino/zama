import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Notice } from "../../entities/Notice";

const GetNotices = async (req: Request, res: Response) => {
  try {
    const {
      user,
      body: { email, content },
    }: any = req;

    const noticeRepository = getRepository(Notice);

    const notices = await noticeRepository.find();
    console.log(notices);
    return res.status(200).send({ success: true, data: notices });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default GetNotices;
