import { Request, Response } from "express";
import { getRepository, In } from "typeorm";
import { AudioBasketMapping } from "../../entities/AudioBasketMapping";

const GetSleepBasket = async (req: Request, res: Response) => {
  const user: any = req.user;

  try {
    const basketMappingRepository = getRepository(AudioBasketMapping);

    const myBasketAudio: AudioBasketMapping[] | [] =
      await basketMappingRepository.find({
        where: { user },
        relations: ["audio", "audio.creator"],
        order: { createAt: "ASC" },
      });
    return res
      .status(200)
      .send({ success: true, audios: myBasketAudio.map((item) => item.audio) });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetSleepBasket;
