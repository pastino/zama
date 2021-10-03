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
import EmailSignUp from "./routes/User/Auth/EmailSignUp";
import Users from "./routes/User/Users";
import CreateSleepAudio from "./routes/SleepAudio/CreateSleepAudio";
import KakaoLogin from "./routes/User/Auth/KakaoLogin";
import SendCertNumByEmaill from "./routes/User/Auth/SendCertNumByEmail";
import GetRecoSleepAudio from "./routes/SleepAudio/GetRecoSleepAudio";
import GetWhiteNoise from "./routes/WhiteNoise/GetWhiteNoise";
import ConfirmCertNum from "./routes/User/Auth/ConfirmCertNum";
import SignUpServey from "./routes/User/Auth/SignUpServey";
import GetSignUpServeyList from "./routes/User/Auth/GetSignUpServeyList";
import EmailLogin from "./routes/User/Auth/EmailLogin";

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
app.post("/auth/email/signup", EmailSignUp);
app.get("/user", Users);
app.post("/auth/kakao/login", KakaoLogin);
app.post("/auth/email/certnum", SendCertNumByEmaill);
app.get("/auth/email/certnum", ConfirmCertNum);
app.post("/auth/servey", SignUpServey);
app.get("/auth/servey", GetSignUpServeyList);
app.post("/auth/email/login", EmailLogin);

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
