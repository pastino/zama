import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { SleepAudio } from "../../entities/SleepAudio";

const GetAudios = async (req: Request, res: Response) => {
  try {
    const {
      query: { division },
    }: any = req;

    const sleepAudioRepository = getRepository(SleepAudio);
    const audios: SleepAudio[] | [] | undefined =
      await sleepAudioRepository.find({
        where: { division },
        relations: ["creator"],
      });
    console.log(audios);
    return res.status(200).send({
      success: true,
      audios,
    });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetAudios;
