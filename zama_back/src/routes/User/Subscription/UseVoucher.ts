import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Voucher } from "../../../entities/Voucher";
import { Subscription } from "../../../entities/Subscription";
import moment from "moment";

const UseVoucher = async (req: Request, res: Response) => {
  try {
    const user: any = req.user;
    const voucherNumber = req.body.code;

    const voucherRepository = getRepository(Voucher);

    const existingVoucher = await voucherRepository.findOne({
      where: { voucherNumber },
      relations: ["user"],
    });

    const { success, message } = validate(res, existingVoucher);

    if (!success) {
      return res.status(200).send({ success, message });
    }

    const subscriptionRepository = getRepository(Subscription);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sixMonthLater = new Date(moment(today).add(7, "months").format());
    sixMonthLater.setHours(24, 0, 0, 0);

    await subscriptionRepository.save({
      user,
      startDate: today,
      endDate: sixMonthLater,
      name: "6Month",
    });

    await voucherRepository.update(
      { id: existingVoucher?.id },
      { available: false }
    );
    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default UseVoucher;

const validate = (res: Response, existingVoucher: Voucher | undefined) => {
  if (!existingVoucher) {
    return { success: false, message: "번호가 맞지 않습니다." };
  }
  if (existingVoucher?.user) {
    return { success: false, message: "이미 사용된 리워드 입니다." };
  }
  if (
    existingVoucher?.expiredDate &&
    new Date(
      moment(existingVoucher.expiredDate).format("YYYY.MM.DD")
    ).getTime() < new Date().getTime()
  ) {
    return { success: false, message: "유효기간이 만료되었습니다." };
  }
  return { success: true, message: null };
};
