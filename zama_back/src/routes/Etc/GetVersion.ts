import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Version } from "../../entities/Version";

const GetVersion = async (req: Request, res: Response) => {
  try {
    const versionRepository = getRepository(Version);
    const version = await versionRepository.find();

    return res.status(200).send({ success: true, data: version[0] });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default GetVersion;
