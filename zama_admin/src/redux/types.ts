export interface User {
  id: number;
  appleId: number | string | null;
  googleId: number | string | null;
  kakaoId: number | string | null;
  naverId: number | string | null;
  loginMethod: string;
  name: string | null;
  password: string | number;
  avatar: string | null;
  birth: string | null;
  email: string | null;
  phoneNum: string | number | null;
  privacyPolicyAgreement: boolean | null;
  serviceTermAgreement: boolean | null;
  marketingAgreement: boolean | null;
  createAt: Date;
  updateAt: Date;
}

export interface Content {
  division: string;
  file: string;
  free: boolean;
  history: string | null;
  id: number;
  order: number;
  recoFlag: boolean;
  thumbnail: string;
  time: number;
  title: string;
  voiceGender: string;
  creator: User;
  createAt: Date;
  updateAt: Date;
}

export interface ContentState {
  storyList: Content[] | [];
  songList: Content[] | [];
  asmrList: Content[] | [];
}
