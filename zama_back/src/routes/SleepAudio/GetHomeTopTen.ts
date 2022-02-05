import { Request, Response } from "express";
import { getRepository, In } from "typeorm";
import { AudioBasketMapping } from "../../entities/AudioBasketMapping";
import { SleepAudio } from "../../entities/SleepAudio";
import { DivisionEnum } from "../../entities/Types";
import { getSongColor } from "../../utils";

const GetHomeTopTen = async (req: Request, res: Response) => {
  try {
    const user: any = req.user;

    const sleepAudioRepository = getRepository(SleepAudio);
    const basketMappingRepository = getRepository(AudioBasketMapping);

    const myBasketAudio: AudioBasketMapping[] | [] =
      await basketMappingRepository.find({
        where: { user },
        relations: ["audio"],
      });

    const classifiedData = [];

    const temporaryClassifiedData = (audio: any) => {
      const copiedData: any = audio.slice();

      for (let i = 0; i < copiedData.length; i++) {
        if (myBasketAudio.find((item) => item.audio.id === copiedData[i].id)) {
          copiedData[i].isLike = true;
        } else {
          copiedData[i].isLike = false;
        }
        // copiedData[i].color = getSongColor(copiedData[i].id);
      }
      return copiedData;
    };

    for (let i = 0; i < DivisionEnum.length; i++) {
      const division = DivisionEnum[i];

      const audio: SleepAudio[] | [] | undefined = await sleepAudioRepository
        .createQueryBuilder("sleepAudio")
        .innerJoinAndSelect("sleepAudio.creator", "creator")
        .where({ division, recoFlag: true })
        .orderBy("sleepAudio.order", "DESC")
        .getMany();

      const audioData = await temporaryClassifiedData(audio);
      classifiedData.push({ division, data: audioData });
    }

    return res.status(200).send({
      success: true,
      audios: classifiedData,
    });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetHomeTopTen;
