import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { SleepAudio } from "../../entities/SleepAudio";

const GetAudio = async (req: Request, res: Response) => {
  try {
    const {
      query: { division, take, page },
    }: any = req;

    const sleepAudioRepository = getRepository(SleepAudio);

    const data = await sleepAudioRepository.findAndCount({
      where: { division },
      order: {
        createAt: "DESC",
      },
      take,
      skip: (page - 1) * take,
    });
    console.log(data, division);

    return res.status(200).send({
      success: true,
      audios: data,
    });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetAudio;
