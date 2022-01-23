import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { SleepAudio } from "../../../entities/SleepAudio";

const GetAudios = async (req: Request, res: Response) => {
  try {
    const {
      query: { division, page, size },
    }: any = req;

    const sleepAudioRepository = getRepository(SleepAudio);
    const [audios, totalCount]: any = await sleepAudioRepository.findAndCount({
      where: { division },
      relations: ["creator"],
      skip: page - 1,
      take: size,
      order: {
        id: "DESC",
      },
    });

    return res.status(200).send({
      success: true,
      audios,
      totalCount,
    });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetAudios;
