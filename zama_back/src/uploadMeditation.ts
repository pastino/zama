import multer from "multer";
import aws from "aws-sdk";
import multerS3 from "multer-s3";

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
