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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQkFBZTtBQUNmLDRCQUEwQjtBQUMxQixvREFBOEI7QUFDOUIsOENBQXdCO0FBQ3hCLGtEQUE0QjtBQUM1QixtQ0FBMkM7QUFDM0MsMERBQTRDO0FBQzVDLHVDQUE2QztBQUM3Qyx1REFBc0Q7QUFDdEQsTUFBTTtBQUNOLDBGQUFvRTtBQUNwRSw4REFBd0M7QUFDeEMsMEZBQW9FO0FBQ3BFLHVGQUFpRTtBQUNqRSx1RkFBaUU7QUFDakUsb0dBQThFO0FBQzlFLGtGQUE0RDtBQUM1RCxnR0FBMEU7QUFDMUUsb0ZBQThEO0FBQzlELDRGQUFzRTtBQUN0RSx3RkFBa0U7QUFDbEUsc0dBQWdGO0FBQ2hGLHVGQUFpRTtBQUNqRSxnRkFBMEQ7QUFDMUQsc0ZBQWdFO0FBQ2hFLDJGQUFxRTtBQUNyRSxxRkFBK0Q7QUFDL0QsK0ZBQXlFO0FBQ3pFLCtFQUF5RDtBQUN6RCxxRUFBK0M7QUFDL0MsZ0dBQTBFO0FBQzFFLDBGQUFvRTtBQUNwRSx1RUFBaUQ7QUFFakQsSUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBQ3RCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUVsQixHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN2QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRCxHQUFHLENBQUMsR0FBRyxDQUNMLGNBQUksQ0FBQztJQUNILE1BQU0sRUFBRSxJQUFJO0lBQ1osT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVB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