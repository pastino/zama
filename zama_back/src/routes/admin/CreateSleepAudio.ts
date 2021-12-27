import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { SleepAudio } from "../../entities/SleepAudio";
import { User } from "../../entities/User";

const CreateSleepAudio = async (req: Request, res: Response) => {
  try {
    const {
      files: { thumbnail, file },
      body: { division, free, voice, title, time },
    }: any = req;

    const thumbnailPath = thumbnail[0].location;
    const filePath = file[0].location;

    const audioRepository = getRepository(SleepAudio);
    const userRepository = getRepository(User);

    const creator: User | undefined = await userRepository.findOne({
      where: { id: 2 },
    });

    const latestAudio = await audioRepository
      .createQueryBuilder("sleepAudio")
      .select("MAX(sleepAudio.order)", "maxOrder")
      .getRawOne();

    await audioRepository.save({
      title,
      division,
      recoFlag: false,
      time,
      free,
      voiceGender: voice,
      creator,
      order: Number(latestAudio?.maxOrder) + 1,
      thumbnail: thumbnailPath,
      file: filePath,
    });

    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default CreateSleepAudio;
