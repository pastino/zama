import "./env";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { createConnection } from "typeorm";
import connectionOptions from "./ormconfig";
import { authenticateJwt } from "./passport";
import { uploadMiddleware } from "./uploadMeditation";
//apis
import SignUpByEmail from "./routes/User/Auth/SignUp/SignUpByEmail";
import Users from "./routes/User/Users";
import CreateSleepAudio from "./routes/SleepAudio/CreateSleepAudio";
import LoginByKakao from "./routes/User/Auth/Login/LoginByKakao";
import SendCertNumByEmail from "./routes/User/Auth/SignUp/SendCertNumByEmail";
import GetRecoSleepAudio from "./routes/SleepAudio/GetRecoSleepAudio";
import GetWhiteNoise from "./routes/WhiteNoise/GetWhiteNoise";
import ConfirmCertNum from "./routes/User/Auth/SignUp/ConfirmCertNum";
import SignUpServey from "./routes/User/Auth/SignUp/SignUpServey";
import GetSignUpServeyList from "./routes/User/Auth/SignUp/GetSignUpServeyList";
import LoginByEmail from "./routes/User/Auth/Login/LoginByEmail";

const app = express();
const PORT = 5000;

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
app.get("/user", Users);
app.post("/auth/signup/email", SignUpByEmail);
app.post("/auth/login/kakao", LoginByKakao);
app.post("/auth/email/certnum", SendCertNumByEmail);
app.get("/auth/email/certnum", ConfirmCertNum);
app.post("/auth/servey", SignUpServey);
app.get("/auth/servey", GetSignUpServeyList);
app.post("/auth/login/email", LoginByEmail);

//sleep
app.get("/sleep/reco", GetRecoSleepAudio);
app.post("/sleep", uploadMiddleware, CreateSleepAudio);

//whiteNoise
app.get("/whiteNoise", GetWhiteNoise);

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
