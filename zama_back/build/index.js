"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./env");
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var typeorm_1 = require("typeorm");
var ormconfig_1 = __importDefault(require("./ormconfig"));
var passport_1 = require("./passport");
var uploadMeditation_1 = require("./uploadMeditation");
//apis
var SignUpByEmail_1 = __importDefault(require("./routes/User/Auth/SignUp/SignUpByEmail"));
var Users_1 = __importDefault(require("./routes/User/Users"));
var CreateSleepAudio_1 = __importDefault(require("./routes/admin/content/CreateSleepAudio"));
var LoginByKakao_1 = __importDefault(require("./routes/User/Auth/Login/LoginByKakao"));
var LoginByApple_1 = __importDefault(require("./routes/User/Auth/Login/LoginByApple"));
var SendCertNumByEmail_1 = __importDefault(require("./routes/User/Auth/SignUp/SendCertNumByEmail"));
var GetHomeAudio_1 = __importDefault(require("./routes/SleepAudio/GetHomeAudio"));
var GetHomeAudioSubCate_1 = __importDefault(require("./routes/SleepAudio/GetHomeAudioSubCate"));
var GetWhiteNoise_1 = __importDefault(require("./routes/WhiteNoise/GetWhiteNoise"));
var ConfirmCertNum_1 = __importDefault(require("./routes/User/Auth/SignUp/ConfirmCertNum"));
var SignUpServey_1 = __importDefault(require("./routes/User/Auth/SignUp/SignUpServey"));
var GetSignUpServeyList_1 = __importDefault(require("./routes/User/Auth/SignUp/GetSignUpServeyList"));
var LoginByEmail_1 = __importDefault(require("./routes/User/Auth/Login/LoginByEmail"));
var SleepBasket_1 = __importDefault(require("./routes/SleepAudio/SleepBasket"));
var GetSleepBasket_1 = __importDefault(require("./routes/SleepAudio/GetSleepBasket"));
var CreateVoucher_1 = __importDefault(require("./routes/User/Subscription/CreateVoucher"));
var UseVoucher_1 = __importDefault(require("./routes/User/Subscription/UseVoucher"));
var GetSubscription_1 = __importDefault(require("./routes/User/Subscription/GetSubscription"));
var GetUserInfo_1 = __importDefault(require("./routes/User/Auth/GetUserInfo"));
var ContactUs_1 = __importDefault(require("./routes/Etc/ContactUs"));
var SendCertNumToFind_1 = __importDefault(require("./routes/User/Auth/Find/SendCertNumToFind"));
var ChangePassword_1 = __importDefault(require("./routes/User/Auth/Find/ChangePassword"));
var GetNotices_1 = __importDefault(require("./routes/Etc/GetNotices"));
var GetVersion_1 = __importDefault(require("./routes/Etc/GetVersion"));
var GiveSubscription_1 = __importDefault(require("./routes/User/Subscription/GiveSubscription"));
var AdminLogin_1 = __importDefault(require("./routes/admin/auth/AdminLogin"));
var CreateAdmin_1 = __importDefault(require("./routes/admin/auth/CreateAdmin"));
var GetAudios_1 = __importDefault(require("./routes/admin/content/GetAudios"));
var SendRewardMessage_1 = __importDefault(require("./routes/admin/SendRewardMessage"));
var DeleteContents_1 = __importDefault(require("./routes/admin/content/DeleteContents"));
var ModifySleepAudio_1 = __importDefault(require("./routes/admin/content/ModifySleepAudio"));
var GetVouchers_1 = __importDefault(require("./routes/admin/voucher/GetVouchers"));
var app = express_1.default();
var PORT = 5002;
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default({
    origin: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    credentials: true,
}));
app.use(passport_1.authenticateJwt);
//user
app.get("/user", GetUserInfo_1.default);
app.get("/users", Users_1.default);
app.post("/auth/signup/email", SignUpByEmail_1.default);
app.post("/auth/login/kakao", LoginByKakao_1.default);
app.post("/auth/login/apple", LoginByApple_1.default);
app.post("/auth/email/certnum", SendCertNumByEmail_1.default);
app.get("/auth/email/certnum", ConfirmCertNum_1.default);
app.post("/auth/servey", SignUpServey_1.default);
app.get("/auth/servey", GetSignUpServeyList_1.default);
app.post("/auth/login/email", LoginByEmail_1.default);
app.post("/find/password/certnum", SendCertNumToFind_1.default);
app.post("/password/change", ChangePassword_1.default);
app.get("/subscription", GetSubscription_1.default);
app.post("/subscription", GiveSubscription_1.default);
//sleep
app.get("/home/contents", GetHomeAudio_1.default);
app.get("/home/contents/v2", GetHomeAudioSubCate_1.default);
// app.post("/sleep", uploadMiddleware, CreateSleepAudio);
app.get("/sleep/basket", GetSleepBasket_1.default);
app.post("/sleep/basket", SleepBasket_1.default);
//voucher
app.post("/voucher", CreateVoucher_1.default);
app.post("/voucher/use", UseVoucher_1.default);
//whiteNoise
app.get("/whiteNoise", GetWhiteNoise_1.default);
//contact
app.post("/contact", ContactUs_1.default);
//notice
app.get("/notice", GetNotices_1.default);
//etc
app.get("/version", GetVersion_1.default);
//admin
app.post("/admin/login", AdminLogin_1.default);
app.post("/admin/signUp", CreateAdmin_1.default);
app.get("/admin/audios", GetAudios_1.default);
app.post("/admin/content", uploadMeditation_1.uploadMiddleware, CreateSleepAudio_1.default);
app.put("/admin/content", ModifySleepAudio_1.default);
app.post("/admin/delete/contents", DeleteContents_1.default);
app.get("/admin/voucher", GetVouchers_1.default);
app.post("/admin/reward", SendRewardMessage_1.default);
//upload file
app.post("/api/upload", uploadMeditation_1.uploadMiddleware, uploadMeditation_1.uploadController);
typeorm_1.createConnection(ormconfig_1.default)
    .then(function () {
    console.log("DB CONNECTION!");
    app.listen(PORT, function () {
        return console.log("Listening on port: \"http://localhost:" + PORT + "\"");
    });
})
    .catch(function (error) {
    console.log(error);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQkFBZTtBQUNmLDRCQUEwQjtBQUMxQixvREFBOEI7QUFDOUIsOENBQXdCO0FBQ3hCLGtEQUE0QjtBQUM1QixtQ0FBMkM7QUFDM0MsMERBQTRDO0FBQzVDLHVDQUE2QztBQUM3Qyx1REFBd0U7QUFDeEUsTUFBTTtBQUNOLDBGQUFvRTtBQUNwRSw4REFBd0M7QUFDeEMsNkZBQXVFO0FBQ3ZFLHVGQUFpRTtBQUNqRSx1RkFBaUU7QUFDakUsb0dBQThFO0FBQzlFLGtGQUE0RDtBQUM1RCxnR0FBMEU7QUFDMUUsb0ZBQThEO0FBQzlELDRGQUFzRTtBQUN0RSx3RkFBa0U7QUFDbEUsc0dBQWdGO0FBQ2hGLHVGQUFpRTtBQUNqRSxnRkFBMEQ7QUFDMUQsc0ZBQWdFO0FBQ2hFLDJGQUFxRTtBQUNyRSxxRkFBK0Q7QUFDL0QsK0ZBQXlFO0FBQ3pFLCtFQUF5RDtBQUN6RCxxRUFBK0M7QUFDL0MsZ0dBQTBFO0FBQzFFLDBGQUFvRTtBQUNwRSx1RUFBaUQ7QUFDakQsdUVBQWlEO0FBQ2pELGlHQUEyRTtBQUMzRSw4RUFBd0Q7QUFDeEQsZ0ZBQTBEO0FBQzFELCtFQUF5RDtBQUN6RCx1RkFBaUU7QUFDakUseUZBQW1FO0FBQ25FLDZGQUF1RTtBQUN2RSxtRkFBNkQ7QUFFN0QsSUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBQ3RCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUVsQixHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN2QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxD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