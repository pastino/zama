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
var Users_1 = __importDefault(require("./routes/User/Users"));
var CreateMeditation_1 = __importDefault(require("./routes/Meditation/CreateMeditation"));
var KakaoLogin_1 = __importDefault(require("./routes/User/KakaoLogin"));
var GetRecoMeditation_1 = __importDefault(require("./routes/Meditation/GetRecoMeditation"));
var GetSleep_1 = __importDefault(require("./routes/Sleep/GetSleep"));
var GetWhiteNoise_1 = __importDefault(require("./routes/WhiteNoise/GetWhiteNoise"));
var GetVoiceActors_1 = __importDefault(require("./routes/User/GetVoiceActors"));
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
app.get("/voiceActors", GetVoiceActors_1.default);
app.post("/kakao/login", KakaoLogin_1.default);
//meditation
app.get("/meditation/reco", GetRecoMeditation_1.default);
app.post("/meditation", uploadMeditation_1.uploadMiddleware, CreateMeditation_1.default);
//sleep
app.get("/sleep", GetSleep_1.default);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQkFBZTtBQUNmLDRCQUEwQjtBQUMxQixvREFBOEI7QUFDOUIsOENBQXdCO0FBQ3hCLGtEQUE0QjtBQUM1QixtQ0FBMkM7QUFDM0MsMERBQTRDO0FBQzVDLHVDQUE2QztBQUM3Qyx1REFBc0Q7QUFDdEQsTUFBTTtBQUNOLDhEQUF3QztBQUN4QywwRkFBb0U7QUFDcEUsd0VBQWtEO0FBQ2xELDRGQUFzRTtBQUN0RSxxRUFBK0M7QUFDL0Msb0ZBQThEO0FBQzlELGdGQUEwRDtBQUUxRCxJQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRWxCLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pELEdBQUcsQ0FBQyxHQUFHLENBQ0wsY0FBSSxDQUFDO0lBQ0gsTUFBTSxFQUFFLElBQUk7SUFDWixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDO0lBQ3BELFdBQVcsRUFBRSxJQUFJO0NBQ2xCLENBQUMsQ0FDSCxDQUFDO0FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBQywwQkFBZSxDQUFDLENBQUM7QUFFekIsTUFBTTtBQUNOLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGVBQUssQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLHdCQUFjLENBQUMsQ0FBQztBQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxvQkFBVSxDQUFDLENBQUM7QUFDckMsWUFBWTtBQUNaLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsMkJBQWlCLENBQUMsQ0FBQztBQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxtQ0FBZ0IsRUFBRSwwQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELE9BQU87QUFDUCxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBUSxDQUFDLENBQUM7QUFDNUIsWUFBWTtBQUNaLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLHVCQUFhLENBQUMsQ0FBQztBQUV0QywwQkFBZ0IsQ0FBQyxtQkFBaUIsQ0FBQztLQUNoQyxJQUFJLENBQUM7SUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDZixPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQXdDLElBQUksT0FBRyxDQUFDO0lBQTVELENBQTRELENBQzdELENBQUM7QUFDSixDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsVUFBQyxLQUFLO0lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQyJ9