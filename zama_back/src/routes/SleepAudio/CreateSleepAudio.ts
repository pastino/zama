import { Request, Response } from "express";
import { getRepository, Connection } from "typeorm";
import { SleepAudio } from "../../entities/SleepAudio";
import { User } from "../../entities/User";

const CreateMeditation = async (req: Request, res: Response) => {
  try {
    const {
      query,
      files: { thumbnail, file },
    }: any = req;

    const thumbnailPath = thumbnail[0].location;
    const filePath = file[0].location;

    const user: User | undefined = await getRepository(User).findOne(1);
    const userRepository = getRepository(SleepAudio);
    const sleepAudio: SleepAudio | undefined = await userRepository.save({
      ...query,
      thumbnail: thumbnailPath,
      file: filePath,
      user,
    });
    return res.status(200).send({ sleepAudio });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default CreateMeditation;
