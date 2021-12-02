import { Request, Response } from "express";
import { getRepository, In } from "typeorm";
import { User } from "../../../entities/User";
import { filteredSubscriptions } from "../../../utils";

const GetUserInfo = async (req: Request, res: Response) => {
  const user: any = req.user;

  try {
    const userRepository = getRepository(User);

    const userInfo: User | undefined = await userRepository.findOne({
      where: { id: user.id },
      relations: ["subscriptions"],
    });

    if (userInfo) {
      return res.status(200).send({
        success: true,
        user: {
          ...userInfo,
          subscriptions: filteredSubscriptions(userInfo?.subscriptions),
        },
      });
    }

    return res.status(200).send({ success: false, message: "서버에러" });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetUserInfo;
