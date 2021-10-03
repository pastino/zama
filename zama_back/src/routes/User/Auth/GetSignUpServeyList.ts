import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { SignUpServeyList } from "../../../entities/SignUpServeyList";

const GetSignUpServeyList = async (req: Request, res: Response) => {
  try {
    const serveyRepository = getRepository(SignUpServeyList);

    const serveyList: SignUpServeyList[] | [] | undefined =
      await serveyRepository.find();

    const setServeyList = [];
    for (let i = 0; i < serveyList.length; i++) {
      setServeyList.push({ purpose: serveyList[i].purpose, check: false });
    }
    console.log(setServeyList);
    return res.status(200).send({ success: true, data: setServeyList });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default GetSignUpServeyList;
