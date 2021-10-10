import { Request, Response } from "express";
import { getRepository, In } from "typeorm";
import { SleepAudio } from "../../entities/SleepAudio";
import { DivisionEnum } from "../../entities/Types";

const GetHomeAudio = async (req: Request, res: Response) => {
  try {
    const sleepAudioRepository = getRepository(SleepAudio);
    const recoData: SleepAudio[] | [] | undefined =
      await sleepAudioRepository.find({
        where: { recoFlag: true },
        relations: ["creator"],
      });

    const classifiedData = [];

    for (let i = 0; i < DivisionEnum.length; i++) {
      const division = DivisionEnum[i];
      const audio: SleepAudio[] | [] | undefined =
        await sleepAudioRepository.find({
          where: { division },
          relations: ["creator"],
        });
      classifiedData.push({ division, data: audio });
    }
    console.log(classifiedData);
    return res.status(200).send({
      success: true,
      recoAudios: recoData,
      totalAudios: classifiedData,
    });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetHomeAudio;
