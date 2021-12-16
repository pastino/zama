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
var CreateSleepAudio_1 = __importDefault(require("./routes/SleepAudio/CreateSleepAudio"));
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
app.post("/sleep", uploadMeditation_1.uploadMiddleware, CreateSleepAudio_1.default);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQkFBZTtBQUNmLDRCQUEwQjtBQUMxQixvREFBOEI7QUFDOUIsOENBQXdCO0FBQ3hCLGtEQUE0QjtBQUM1QixtQ0FBMkM7QUFDM0MsMERBQTRDO0FBQzVDLHVDQUE2QztBQUM3Qyx1REFBc0Q7QUFDdEQsTUFBTTtBQUNOLDBGQUFvRTtBQUNwRSw4REFBd0M7QUFDeEMsMEZBQW9FO0FBQ3BFLHVGQUFpRTtBQUNqRSx1RkFBaUU7QUFDakUsb0dBQThFO0FBQzlFLGtGQUE0RDtBQUM1RCxnR0FBMEU7QUFDMUUsb0ZBQThEO0FBQzlELDRGQUFzRTtBQUN0RSx3RkFBa0U7QUFDbEUsc0dBQWdGO0FBQ2hGLHVGQUFpRTtBQUNqRSxnRkFBMEQ7QUFDMUQsc0ZBQWdFO0FBQ2hFLDJGQUFxRTtBQUNyRSxxRkFBK0Q7QUFDL0QsK0ZBQXlFO0FBQ3pFLCtFQUF5RDtBQUN6RCxxRUFBK0M7QUFDL0MsZ0dBQTBFO0FBQzFFLDBGQUFvRTtBQUNwRSx1RUFBaUQ7QUFDakQsdUVBQWlEO0FBQ2pELGlHQUEyRTtBQUUzRSxJQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRWxCLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pELEdBQUcsQ0FBQyxHQUFHLENBQ0wsY0FBSSxDQUFDO0lBQ0gsTUFBTSxFQUFFLElBQUk7SUFDWixPQUFPLEVBQUUsQ0FBQyxL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