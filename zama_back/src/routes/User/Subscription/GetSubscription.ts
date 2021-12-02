import { Request, Response } from "express";
import { getRepository, In } from "typeorm";
import { Subscription } from "../../../entities/Subscription";
import { filteredSubscriptions } from "../../../utils";

const GetSubscription = async (req: Request, res: Response) => {
  const user: any = req.user;

  try {
    const basketMappingRepository = getRepository(Subscription);

    const subscriptions: Subscription[] | [] =
      await basketMappingRepository.find({
        where: { user },
      });

    return res.status(200).send({
      success: true,
      subscriptions: filteredSubscriptions(subscriptions),
    });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetSubscription;
