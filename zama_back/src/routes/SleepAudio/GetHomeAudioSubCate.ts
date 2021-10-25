import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { SleepAudio } from "../../entities/SleepAudio";
import { DivisionEnum } from "../../entities/Types";

const GetHomeAudioSubCate = async (req: Request, res: Response) => {
  const user: any = req.user;

  try {
    const sleepAudioRepository = getRepository(SleepAudio);

    const recoData: SleepAudio[] | [] | undefined = await sleepAudioRepository
      .createQueryBuilder("sleepAudio")
      .innerJoinAndSelect("sleepAudio.creator", "creator")
      .leftJoinAndSelect(
        "sleepAudio.inBasketUsers",
        "user",
        "user.id = :userId",
        {
          userId: user.id,
        }
      )
      .where({ recoFlag: true })
      .getMany();

    const temporaryRecoData = () => {
      const copiedData: any = recoData.slice();
      for (let i = 0; i < copiedData.length; i++) {
        if (copiedData[i].inBasketUsers.length > 0) {
          copiedData[i].isLike = true;
        } else {
          copiedData[i].isLike = false;
        }
        delete copiedData[i].inBasketUsers;
      }
      return copiedData;
    };

    // .loadRelationCountAndMap(
    //   "sleepAudio.inBasketUsers",
    //   "sleepAudio.inBasketUsers"
    // )
    // .innerJoin("sleepAudio.inBasketUsers", "user", "user.id = :userId", {
    //   userId: user.id,
    // })

    // console.log(recoData);
    const classifiedData = [];

    const temporaryClassifiedData = (audio: any) => {
      const copiedData: any = audio.slice();

      for (let i = 0; i < copiedData.length; i++) {
        if (copiedData[i].inBasketUsers.length > 0) {
          copiedData[i].isLike = true;
        } else {
          copiedData[i].isLike = false;
        }
        delete copiedData[i].inBasketUsers;
      }
      return copiedData;
    };

    for (let i = 0; i < DivisionEnum.length; i++) {
      const division = DivisionEnum[i];
      const audio: SleepAudio[] | [] | undefined = await sleepAudioRepository
        .createQueryBuilder("sleepAudio")
        .innerJoinAndSelect("sleepAudio.creator", "creator")
        .leftJoinAndSelect(
          "sleepAudio.inBasketUsers",
          "user",
          "user.id = :userId",
          {
            userId: user.id,
          }
        )
        .where({ division })
        .getMany();

      const audioData = await temporaryClassifiedData(audio);

      classifiedData.push({ division, data: audioData });
    }

    // console.log(classifiedData);

    return res.status(200).send({
      success: true,
      recoAudios: temporaryRecoData(),
      totalAudios: classifiedData,
    });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetHomeAudioSubCate;
