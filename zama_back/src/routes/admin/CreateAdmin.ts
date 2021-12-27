import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Administrator } from "../../entities/Administrator";
import bcrypt from "bcryptjs";

const CreateAdmin = async (req: Request, res: Response) => {
  try {
    const args = req.body;

    const id = args.id;
    const password = args.password;
    const superFlag = args.super;

    const administratorRepository = getRepository(Administrator);
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        await administratorRepository.save({
          administratorId: id,
          password: hash,
          super: superFlag,
        });
      });
    });

    return res.status(200).send({ success: true });
  } catch (e) {
    console.log(e);
  }
};

export default CreateAdmin;
