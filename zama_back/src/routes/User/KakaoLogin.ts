import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entities/User";
import { generateToken } from "../../utils";

const KakaoLogin = async (req: Request, res: Response) => {
  try {
    const kakaoId = req.body.id;
    const userRepository = getRepository(User);
    const user: User | undefined = await userRepository.findOne({
      kakaoId,
    });

    if (user) {
      return res.status(200).send({ user, token: generateToken(user.id) });
    }

    const createUser = await userRepository.save({
      kakaoId,
      loginMethod: "KAKAO",
      nickname: "test",
    });
    const token = generateToken(createUser.id);
    return res.status(200).send({ user, token });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default KakaoLogin;
