import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { AudioBasketMapping } from "../../entities/AudioBasketMapping";
import { SleepAudio } from "../../entities/SleepAudio";

const SleepBasket = async (req: Request, res: Response) => {
  const user: any = req.user;

  const { body }: any = req;
  const audioId: number = body.audioId;

  try {
    const audioRepository = getRepository(SleepAudio);
    const basketRepository = getRepository(AudioBasketMapping);

    const mappingData: any = await basketRepository.findOne({
      where: { user: { id: user.id }, audio: { id: audioId } },
    });

    if (mappingData) {
      await basketRepository.delete({ id: mappingData.id });
    } else {
      const audio: any = await audioRepository.findOne({
        where: { id: audioId },
      });
      await basketRepository.save({ user, audio });
    }

    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default SleepBasket;
