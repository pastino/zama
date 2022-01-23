import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Voucher } from "../../../entities/Voucher";
import { generateVoucherNum } from "../../../utils";

const CreateVoucher = async (req: Request, res: Response) => {
  try {
    const {
      body: { type },
    } = req;

    const voucherNumber = generateVoucherNum();
    const voucherRepository = getRepository(Voucher);

    await voucherRepository.save({
      voucherNumber,
      name: type,
    });

    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default CreateVoucher;
