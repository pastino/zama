import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";
import { Subscription } from "./entities/Subscription";
import axios from "axios";

export const generateToken = (id: number) =>
  jwt.sign({ id }, process.env.SECRET as string);

export const generateSecret = (n: number) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += Math.floor(Math.random() * (9 - 1) + 1);
  }
  return Number(str);
};

const decimal = [];
const baseList =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const baseSize: any = baseList.length;

const getRandomInt = (mininum: number, maximum: number) => {
  const min = Math.ceil(mininum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getBase62 = (n: any) => {
  let num: any = n;
  const res: any = [];
  do {
    const mod: any = num % baseSize;
    num = parseInt(num) / parseInt(baseSize);
    res.push(baseList[mod]);
  } while (num > 0);

  return res.reverse().join("");
};

export const generateVoucherNum = () => {
  let result = "";
  for (let i = 0; i < 12; i++) {
    const n = getRandomInt(0, 62);
    decimal.push(n);
    result += getBase62(n);
  }
  return result;
};

const sendMail = (email: {}) => {
  const auth = {
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  };
  const nodemailerMailgun = nodemailer.createTransport(mg(auth as any));
  return nodemailerMailgun.sendMail(email);
};

export const sendSecretMail = (secret: number, adress: string) => {
  const email = {
    from: "zama@zama.com",
    to: adress,
    subject: `zama 회원가입을(를) 위한 이메일 인증번호 안내`,
    html: `안녕하세요.<br/>
    <br/>
    회원님이 사용하는 이메일을 인증하려면,<br/>
    아래 인증 번호를 ZAMA에 입력해주세요.<br/>
    <br/>
    인증번호: ${secret}<br/>
    <br/>
    인증번호는 5분 이내에 입력하셔야 합니다.<br/>
    <br/>
    감사합니다.<br/>
    <br/>
    ZAMA팀 드림.`,
  };
  return sendMail(email);
};

export const sendSecretMailToFind = (secret: number, adress: string) => {
  const email = {
    from: "zama@zama.com",
    to: adress,
    subject: `zama 비밀번호를 찾기 위한 이메일 인증번호 안내`,
    html: `안녕하세요.<br/>
    <br/>
    이메일을 인증하려면,<br/>
    아래 인증 번호를 ZAMA에 입력해주세요.<br/>
    <br/>
    인증번호: ${secret}<br/>
    <br/>
    인증번호는 5분 이내에 입력하셔야 합니다.<br/>
    <br/>
    감사합니다.<br/>
    <br/>
    ZAMA팀 드림.`,
  };
  return sendMail(email);
};

export const audioClassifier = (data: any) => {
  console.log(data);

  return data;
};

export const filteredSubscriptions = (subscriptions: Subscription[]) => {
  return subscriptions.filter(
    (subscription) =>
      new Date(subscription.startDate).getTime() <= new Date().getTime() &&
      new Date(subscription.endDate).getTime() >= new Date().getTime()
  );
};

export const sendSms = ({ receivers, message }: any) => {
  return axios
    .post("https://apis.aligo.in/send/", null, {
      params: {
        key: process.env.ALIGO_API_KEY,
        user_id: "joon5006",
        sender: "01056843712",
        receiver: receivers.join(","),
        msg: message,
      },
    })
    .then((res) => {
      console.log(res);
      res.data;
    })
    .catch((err) => {
      console.log("err", err);
    });
};
