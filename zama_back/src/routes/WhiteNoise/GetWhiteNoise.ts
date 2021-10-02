import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { WhiteNoise } from "../../entities/WhiteNoise";

const GetWhiteNoise = async (req: Request, res: Response) => {
  try {
    const whiteNoiseRepository = getRepository(WhiteNoise);
    const whiteNoise:
      | WhiteNoise[]
      | []
      | undefined = await whiteNoiseRepository.find();

    return res.status(200).send({ whiteNoise });
  } catch (e) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetWhiteNoise;
