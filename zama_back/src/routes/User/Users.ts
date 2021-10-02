import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entities/User";

const allUserSearch = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getRepository(User).find();
    res.status(200).send({ users });
    return users;
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default allUserSearch;
