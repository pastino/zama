import { Request, Response } from "express";
import { getRepository, In } from "typeorm";
import { SleepAudio } from "../../../entities/SleepAudio";

const DeleteContents = async (req: Request, res: Response) => {
  try {
    const {
      body: { deleteIds },
    }: any = req;

    const sleepAudioRepository = getRepository(SleepAudio);

    await sleepAudioRepository.delete({
      id: In(deleteIds),
    });

    return res.status(200).send({
      success: true,
    });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    return res.status(200).send({
      success: false,
    });
  }
};

export default DeleteContents;
