import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Version } from "../../entities/Version";

const GetVersion = async (req: Request, res: Response) => {
  try {
    const { user }: any = req;

    const versionRepository = getRepository(Version);
    const version = await versionRepository.find();

    if (user?.email === "test@test.com") {
      return res
        .status(200)
        .send({ success: true, data: { ...version[0], isTest: true } });
    }

    return res.status(200).send({ success: true, data: version[0] });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default GetVersion;
