"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMiddleware = void 0;
var multer_1 = __importDefault(require("multer"));
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var multer_s3_1 = __importDefault(require("multer-s3"));
var s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY,
    region: "ap-northeast-2",
});
var upload = multer_1.default({
    storage: multer_s3_1.default({
        s3: s3,
        bucket: "zama-assets",
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            var basePath = file.fieldname === "file"
                ? "audios/"
                : file.fieldname === "thumbnail"
                    ? "images/"
                    : "";
            cb(null, basePath + Date.now().toString() + "_" + file.originalname);
        },
    }),
});
exports.uploadMiddleware = upload.fields([
    { name: "thumbnail" },
    { name: "file" },
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkTWVkaXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91cGxvYWRNZWRpdGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUE0QjtBQUM1QixvREFBMEI7QUFDMUIsd0RBQWlDO0FBRWpDLElBQU0sRUFBRSxHQUFHLElBQUksaUJBQUcsQ0FBQyxFQUFFLENBQUM7SUFDcEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYTtJQUN0QyxlQUFlLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjO0lBQzNDLE1BQU0sRUFBRSxnQkFBZ0I7Q0FDekIsQ0FBQyxDQUFDO0FBRUgsSUFBTSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQztJQUNwQixPQUFPLEVBQUUsbUJBQVEsQ0FBQztRQUNoQixFQUFFLElBQUE7UUFDRixNQUFNLEVBQUUsYUFBYTtRQUNyQixRQUFRLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDL0IsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsR0FBRyxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzFCLElBQU0sUUFBUSxHQUNaLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTTtnQkFDdkIsQ0FBQyxDQUFDLFNBQVM7Z0JBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssV0FBVztvQkFDaEMsQ0FBQyxDQUFDLFNBQVM7b0JBQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNULEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7S0FDRixDQUFDO0NBQ0gsQ0FBQyxDQUFDO0FBRVUsUUFBQSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUNyQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7Q0FDakIsQ0FBQyxDQUFDIn0=