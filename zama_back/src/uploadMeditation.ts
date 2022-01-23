import multer from "multer";
import aws from "aws-sdk";
import multerS3 from "multer-s3";
import { Request, Response } from "express";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: "zama-assets",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const basePath =
        file.fieldname === "file"
          ? "audios/"
          : file.fieldname === "thumbnail"
          ? "images/"
          : "";
      cb(null, basePath + Date.now().toString() + "_" + file.originalname);
    },
  }),
});

export const uploadMiddleware = upload.fields([
  { name: "thumbnail" },
  { name: "file" },
]);

export const uploadController = (req: Request, res: Response) => {
  const { files }: any = req;

  const thumbnail = files?.thumbnail;
  const audio = files?.file;
  if (thumbnail) {
    return res.json({ location: thumbnail.map((obj: any) => obj.location) });
  }
  if (audio) {
    return res.json({ location: audio.map((obj: any) => obj.location) });
  }
};
