import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { SleepAudio } from "../../../entities/SleepAudio";
import { User } from "../../../entities/User";

const ModifySleepAudio = async (req: Request, res: Response) => {
  try {
    const {
      body: { id, imageLocation, audioLocation, free, voice, title, time },
    }: any = req;

    const audioRepository = getRepository(SleepAudio);
    const userRepository = getRepository(User);

    const creator: User | undefined = await userRepository.findOne({
      where: { id: 2 },
    });
    console.log(imageLocation, audioLocation);
    await audioRepository.update(
      { id },
      {
        title,
        recoFlag: false,
        time,
        free,
        voiceGender: voice,
        creator,
        thumbnail: imageLocation,
        file: audioLocation,
      }
    );

    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default ModifySleepAudio;
