import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { AudioBasketMapping } from "../../entities/AudioBasketMapping";
import { SleepAudio } from "../../entities/SleepAudio";
import { DivisionEnum } from "../../entities/Types";

const GetHomeAudioSubCate = async (req: Request, res: Response) => {
  const user: any = req.user;

  try {
    const sleepAudioRepository = getRepository(SleepAudio);
    const basketMappingRepository = getRepository(AudioBasketMapping);

    // TODO
    // 구독권 있으면 아무거나, 아니면 공짜만 추천
    const recoData: SleepAudio[] | [] | undefined = await sleepAudioRepository
      .createQueryBuilder("sleepAudio")
      .innerJoinAndSelect("sleepAudio.creator", "creator")
      .where({ recoFlag: true })
      .getMany();

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
      }
      return copiedData;
    };

    for (let i = 0; i < DivisionEnum.length; i++) {
      const division = DivisionEnum[i];
      const audio: SleepAudio[] | [] | undefined = await sleepAudioRepository
        .createQueryBuilder("sleepAudio")
        .innerJoinAndSelect("sleepAudio.creator", "creator")
        .where({ division })
        .orderBy("sleepAudio.order", "ASC")
        .getMany();

      const audioData = await temporaryClassifiedData(audio);
      classifiedData.push({ division, data: audioData });
    }

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

export default GetHomeAudioSubCate;
