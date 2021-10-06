import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";

export const generateToken = (id: number) =>
  jwt.sign({ id }, process.env.SECRET as string);

export const generateSecret = (n: number) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += Math.floor(Math.random() * (9 - 1) + 1);
  }
  return Number(str);
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
    인증번호는 60분 이내에 입력하셔야 합니다.<br/>
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
