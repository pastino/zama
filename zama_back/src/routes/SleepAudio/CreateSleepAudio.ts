import { Request, Response } from "express";
import { getRepository, Connection, In } from "typeorm";
import { Category } from "../../entities/Category";
import { SleepAudio } from "../../entities/SleepAudio";
import { User } from "../../entities/User";

const CreateMeditation = async (req: Request, res: Response) => {
  try {
    const {
      query,
    }: // files: { thumbnail, file },
    any = req;

    // const thumbnailPath = thumbnail[0].location;
    // const filePath = file[0].location;

    const testCategoryIds = [18];

    const categoryRepository = getRepository(Category);
    const audioRepository = getRepository(SleepAudio);
    const userRepository = getRepository(User);

    const categories: Category[] | undefined = await categoryRepository.find({
      where: { id: In(testCategoryIds) },
    });

    const creator: User | undefined = await userRepository.findOne({
      where: { id: 28 },
    });

    const sleepAudio: SleepAudio | undefined = await audioRepository.save({
      title: "별똥별의 이야기1.5",
      categories,
      division: "Story",
      recoFlag: true,
      time: 2248,
      creator,
      thumbnail:
        "https://zama-contents.s3.ap-northeast-2.amazonaws.com/image/sample_image.png",
      file: "https://zama-contents.s3.ap-northeast-2.amazonaws.com/audio/sample_audio.mp3",
    });

    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default CreateMeditation;
