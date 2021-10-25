import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { SleepAudio } from "../../entities/SleepAudio";

const SleepBasket = async (req: Request, res: Response) => {
  const user: any = req.user;

  const { body }: any = req;
  const audioId = body.audioId;

  try {
    const repository = getRepository(SleepAudio);
    const audio: any = await repository.findOne({
      where: { id: audioId },
      relations: ["inBasketUsers"],
    });

    audio.inBasketUsers.push({ id: user.id });

    repository.save(audio);

    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default SleepBasket;
