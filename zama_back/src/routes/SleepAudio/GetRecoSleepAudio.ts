import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { SleepAudio } from "../../entities/SleepAudio";

const GetRecoMeditation = async (req: Request, res: Response) => {
  try {
    const sleepAudioRepository = getRepository(SleepAudio);
    const sleepAudio: SleepAudio[] | [] | undefined =
      await sleepAudioRepository.find({
        where: { recoFlag: true },
        relations: ["user"],
      });
    return res.status(200).send({ sleepAudio });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetRecoMeditation;
