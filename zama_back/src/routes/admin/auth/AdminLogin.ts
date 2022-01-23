import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Administrator } from "../../../entities/Administrator";
import bcrypt from "bcryptjs";
import { generateToken } from "../../../utils";

const LoginAdmin = async (req: Request, res: Response) => {
  try {
    const args = req.body;

    const id = args.id;
    const password = args.password;

    const administratorRepository = getRepository(Administrator);

    const administrator: any = await administratorRepository.findOne({
      administratorId: id,
    });

    try {
      const valid = await bcrypt.compare(password, administrator.password);
      if (!valid) return res.status(200).send({ success: false });

      return res.status(200).send({
        success: true,
        token: generateToken(administrator.id),
        administrator,
      });
    } catch (e) {
      return res.status(200).send({ success: false });
    }
  } catch (e) {
    console.log(e);
  }
};

export default LoginAdmin;
