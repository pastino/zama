import { Request, Response } from "express";
import { getRepository, In } from "typeorm";
import { Category } from "../../entities/Category";
import { SleepAudio } from "../../entities/SleepAudio";
import { DivisionEnum } from "../../entities/Types";

const GetHomeAudio = async (req: Request, res: Response) => {
  try {
    const sleepAudioRepository = getRepository(SleepAudio);
    const recoData: SleepAudio[] | [] | undefined =
      await sleepAudioRepository.find({
        where: { recoFlag: true },
        relations: ["creator"],
      });

    const categoryRepository = getRepository(Category);

    const getCateories = async (division: string) => {
      return categoryRepository.find({ where: { division } });
    };

    const classifiedData = [];
    for (let i = 0; i < DivisionEnum.length; i++) {
      const division = DivisionEnum[i];
      const categories: any = await getCateories(division);
      const classifiedAudioData = [];

      for (let j = 0; j < categories.length; j++) {
        const data = await sleepAudioRepository
          .createQueryBuilder("sleepAudio")
          .innerJoinAndSelect("sleepAudio.creator", "creator")
          .innerJoin(
            "sleepAudio.categories",
            "category",
            "category.id = :categoryId",
            { categoryId: categories[j].id }
          )
          .getMany();
        classifiedAudioData.push({
          category: categories[j],
          categoryData: data,
        });
      }
      classifiedData.push({
        division,
        divisionData: classifiedAudioData,
      });
    }

    return res.status(200).send({
      success: true,
      recoAudios: recoData,
      totalAudios: classifiedData,
    });
  } catch (e: any) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default GetHomeAudio;
