import "./env";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { createConnection } from "typeorm";
import connectionOptions from "./ormconfig";
import { authenticateJwt } from "./passport";
import { uploadController, uploadMiddleware } from "./uploadMeditation";
//apis
import SignUpByEmail from "./routes/User/Auth/SignUp/SignUpByEmail";
import Users from "./routes/User/Users";
import CreateSleepAudio from "./routes/admin/content/CreateSleepAudio";
import LoginByKakao from "./routes/User/Auth/Login/LoginByKakao";
import LoginByApple from "./routes/User/Auth/Login/LoginByApple";
import SendCertNumByEmail from "./routes/User/Auth/SignUp/SendCertNumByEmail";
import GetHomeAudio from "./routes/SleepAudio/GetHomeAudio";
import GetHomeAudioSubCate from "./routes/SleepAudio/GetHomeAudioSubCate";
import GetWhiteNoise from "./routes/WhiteNoise/GetWhiteNoise";
import ConfirmCertNum from "./routes/User/Auth/SignUp/ConfirmCertNum";
import SignUpServey from "./routes/User/Auth/SignUp/SignUpServey";
import GetSignUpServeyList from "./routes/User/Auth/SignUp/GetSignUpServeyList";
import LoginByEmail from "./routes/User/Auth/Login/LoginByEmail";
import SleepBasket from "./routes/SleepAudio/SleepBasket";
import GetSleepBasket from "./routes/SleepAudio/GetSleepBasket";
import CreateVoucher from "./routes/User/Subscription/CreateVoucher";
import UseVoucher from "./routes/User/Subscription/UseVoucher";
import GetSubscription from "./routes/User/Subscription/GetSubscription";
import GetUserInfo from "./routes/User/Auth/GetUserInfo";
import ContactUs from "./routes/Etc/ContactUs";
import SendCertNumToFind from "./routes/User/Auth/Find/SendCertNumToFind";
import ChangePassword from "./routes/User/Auth/Find/ChangePassword";
import GetNotices from "./routes/Etc/GetNotices";
import GetVersion from "./routes/Etc/GetVersion";
import GiveSubscription from "./routes/User/Subscription/GiveSubscription";
import LoginAdmin from "./routes/admin/auth/AdminLogin";
import CreateAdmin from "./routes/admin/auth/CreateAdmin";
import GetAudios from "./routes/admin/content/GetAudios";
import SendRewardMessage from "./routes/admin/SendRewardMessage";
import DeleteContents from "./routes/admin/content/DeleteContents";
import ModifySleepAudio from "./routes/admin/content/ModifySleepAudio";
import GetVouchers from "./routes/admin/voucher/GetVouchers";
import GetHomeTopTen from "./routes/SleepAudio/GetHomeTopTen";
import GetAudio from "./routes/SleepAudio/GetAudios";

const app = express();
const PORT = 5002;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(authenticateJwt);

//user
app.get("/user", GetUserInfo);
app.get("/users", Users);
app.post("/auth/signup/email", SignUpByEmail);
app.post("/auth/login/kakao", LoginByKakao);
app.post("/auth/login/apple", LoginByApple);
app.post("/auth/email/certnum", SendCertNumByEmail);
app.get("/auth/email/certnum", ConfirmCertNum);
app.post("/auth/servey", SignUpServey);
app.get("/auth/servey", GetSignUpServeyList);
app.post("/auth/login/email", LoginByEmail);
app.post("/find/password/certnum", SendCertNumToFind);
app.post("/password/change", ChangePassword);
app.get("/subscription", GetSubscription);
app.post("/subscription", GiveSubscription);

//sleep
app.get("/home/contents", GetHomeAudio);
app.get("/home/contents/v2", GetHomeAudioSubCate);
app.get("/home/contents/top-ten", GetHomeTopTen);
app.get("/audios", GetAudio);

// app.post("/sleep", uploadMiddleware, CreateSleepAudio);
app.get("/sleep/basket", GetSleepBasket);
app.post("/sleep/basket", SleepBasket);

//voucher
app.post("/voucher", CreateVoucher);
app.post("/voucher/use", UseVoucher);

//whiteNoise
app.get("/whiteNoise", GetWhiteNoise);

//contact
app.post("/contact", ContactUs);

//notice
app.get("/notice", GetNotices);

//etc
app.get("/version", GetVersion);

//admin
app.post("/admin/login", LoginAdmin);
app.post("/admin/signUp", CreateAdmin);
app.get("/admin/audios", GetAudios);
app.post("/admin/content", uploadMiddleware, CreateSleepAudio);
app.put("/admin/content", ModifySleepAudio);
app.post("/admin/delete/contents", DeleteContents);
app.get("/admin/voucher", GetVouchers);
app.post("/admin/reward", SendRewardMessage);

//upload file
app.post("/api/upload", uploadMiddleware, uploadController);

createConnection(connectionOptions)
  .then(() => {
    console.log("DB CONNECTION!");
    app.listen(PORT, () =>
      console.log(`Listening on port: "http://localhost:${PORT}"`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
