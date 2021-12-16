import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Subscription } from "../../../entities/Subscription";
import moment from "moment";
import { filteredSubscriptions } from "../../../utils";

const GiveSubscription = async (req: Request, res: Response) => {
  try {
    const user: any = req.user;

    const subscriptionRepository = getRepository(Subscription);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const oneMonthLater = new Date(moment(today).add(1, "months").format());
    oneMonthLater.setHours(24, 0, 0, 0);

    await subscriptionRepository.save({
      user,
      startDate: today,
      endDate: oneMonthLater,
      name: "1Month",
    });

    const subscriptions: Subscription[] | [] =
      await subscriptionRepository.find({
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

export default GiveSubscription;
