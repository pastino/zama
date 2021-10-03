import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { SolutionAnalysis } from "../../../entities/SolutionAnalysis";

const SignUpServey = async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId;
    const serveyResult = req.body.serveyResult;

    const serveyRepository = getRepository(SolutionAnalysis);
    for (let i = 0; i < serveyResult.length; i++) {
      await serveyRepository.save({
        userId,
        purpose: serveyResult[i],
        category: "SignUp",
      });
    }
    return res.status(200).send({ success: true });
  } catch (e: any) {
    res.status(400).json({ success: false, message: e.message });
    throw new Error(e);
  }
};

export default SignUpServey;
