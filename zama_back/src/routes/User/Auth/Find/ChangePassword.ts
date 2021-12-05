import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../../../entities/User";
import bcrypt from "bcryptjs";

const ChangePassword = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userRepository = getRepository(User);

    await bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const createUser = await userRepository.update(
          { email },
          {
            password: hash,
          }
        );
        return res.status(200).send({ success: true });
      });
    });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default ChangePassword;
