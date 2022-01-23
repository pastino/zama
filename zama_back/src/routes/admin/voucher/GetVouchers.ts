import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Voucher } from "../../../entities/Voucher";

const GetVouchers = async (req: Request, res: Response) => {
  try {
    const {
      query: { page, size },
    }: any = req;

    const voucherRepository = getRepository(Voucher);
    const [vouchers, totalCount] = await voucherRepository.findAndCount({
      skip: page - 1,
      take: size,
      order: {
        id: "DESC",
      },
    });

    return res.status(200).send({
      success: true,
      vouchers: vouchers,
      totalCount,
    });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetVouchers;
