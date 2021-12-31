import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Voucher } from "../../../entities/Voucher";
import { generateVoucherNum } from "../../../utils";

const CreateVoucher = async (req: Request, res: Response) => {
  try {
    const voucherNumber = generateVoucherNum();
    const voucherRepository = getRepository(Voucher);
    console.log(voucherNumber);
    await voucherRepository.save({
      voucherNumber,
      name: "6Month",
    });
    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default CreateVoucher;
