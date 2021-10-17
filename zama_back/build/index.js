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
var SendCertNumByEmail_1 = __importDefault(require("./routes/User/Auth/SignUp/SendCertNumByEmail"));
var GetHomeAudio_1 = __importDefault(require("./routes/SleepAudio/GetHomeAudio"));
var GetHomeAudioSubCate_1 = __importDefault(require("./routes/SleepAudio/GetHomeAudioSubCate"));
var GetWhiteNoise_1 = __importDefault(require("./routes/WhiteNoise/GetWhiteNoise"));
var ConfirmCertNum_1 = __importDefault(require("./routes/User/Auth/SignUp/ConfirmCertNum"));
var SignUpServey_1 = __importDefault(require("./routes/User/Auth/SignUp/SignUpServey"));
var GetSignUpServeyList_1 = __importDefault(require("./routes/User/Auth/SignUp/GetSignUpServeyList"));
var LoginByEmail_1 = __importDefault(require("./routes/User/Auth/Login/LoginByEmail"));
var app = express_1.default();
var PORT = 5000;
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
app.get("/user", Users_1.default);
app.post("/auth/signup/email", SignUpByEmail_1.default);
app.post("/auth/login/kakao", LoginByKakao_1.default);
app.post("/auth/email/certnum", SendCertNumByEmail_1.default);
app.get("/auth/email/certnum", ConfirmCertNum_1.default);
app.post("/auth/servey", SignUpServey_1.default);
app.get("/auth/servey", GetSignUpServeyList_1.default);
app.post("/auth/login/email", LoginByEmail_1.default);
//sleep
app.get("/home/contents", GetHomeAudio_1.default);
app.get("/home/contents/v2", GetHomeAudioSubCate_1.default);
app.post("/sleep", uploadMeditation_1.uploadMiddleware, CreateSleepAudio_1.default);
//whiteNoise
app.get("/whiteNoise", GetWhiteNoise_1.default);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQkFBZTtBQUNmLDRCQUEwQjtBQUMxQixvREFBOEI7QUFDOUIsOENBQXdCO0FBQ3hCLGtEQUE0QjtBQUM1QixtQ0FBMkM7QUFDM0MsMERBQTRDO0FBQzVDLHVDQUE2QztBQUM3Qyx1REFBc0Q7QUFDdEQsTUFBTTtBQUNOLDBGQUFvRTtBQUNwRSw4REFBd0M7QUFDeEMsMEZBQW9FO0FBQ3BFLHVGQUFpRTtBQUNqRSxvR0FBOEU7QUFDOUUsa0ZBQTREO0FBQzVELGdHQUEwRTtBQUMxRSxvRkFBOEQ7QUFDOUQsNEZBQXNFO0FBQ3RFLHdGQUFrRTtBQUNsRSxzR0FBZ0Y7QUFDaEYsdUZBQWlFO0FBRWpFLElBQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFFbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakQsR0FBRyxDQUFDLEdBQUcsQ0FDTCxjQUFJLENBQUM7SUFDSCxNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7SUFDcEQsV0FBVyxFQUFFLElBQUk7Q0FDbEIsQ0FBQyxDQUNILENBQUM7QUFFRixHQUFHLENBQUMsR0FBRyxDQUFDLDBCQUFlLENBQUMsQ0FBQztBQUV6QixNQUFNO0FBQ04sR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsZUFBSyxDQUFDLENBQUM7QUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSx1QkFBYSxDQUFDLENBQUM7QUFDOUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxzQkFBWSxDQUFDLENBQUM7QUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSw0QkFBa0IsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsd0JBQWMsQ0FBQyxDQUFDO0FBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLHNCQUFZLENBQUMsQ0FBQztBQUN2QyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSw2QkFBbUIsQ0FBQyxDQUFDO0FBQzdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsc0JBQVksQ0FBQyxDQUFDO0FBRTVDLE9BQU87QUFDUCxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLHNCQUFZLENBQUMsQ0FBQztBQUN4QyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLDZCQUFtQixDQUFDLENBQUM7QUFFbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsbUNBQWdCLEVBQUUsMEJBQWdCLENBQUMsQ0FBQztBQUV2RCxZQUFZO0FBQ1osR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsdUJBQWEsQ0FBQyxDQUFDO0FBRXRDLDBCQUFnQixDQUFDLG1CQUFpQixDQUFDO0tBQ2hDLElBQUksQ0FBQztJQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNmLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBd0MsSUFBSSxPQUFHLENBQUM7SUFBNUQsQ0FBNEQsQ0FDN0QsQ0FBQztBQUNKLENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7SUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDIn0=