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

export interface ContentsState {
  storyList: {
    totalCount: number;
    page: number;
    audios: Content[] | [];
  };
  songList: {
    totalCount: number;
    page: number;
    audios: Content[] | [];
  };
  asmrList: {
    totalCount: number;
    page: number;
    audios: Content[] | [];
  };
}

export const initialState: ContentsState = {
  storyList: { totalCount: 0, page: 1, audios: [] },
  songList: { totalCount: 0, page: 1, audios: [] },
  asmrList: { totalCount: 0, page: 1, audios: [] },
};

export type Action =
  | {
      type: "SET_STORY";
      payload: {
        storyList: {
          audios: Content[];
          page: number;
          totalCount: number;
        };
      };
    }
  | {
      type: "SET_SONG";
      payload: {
        songList: {
          audios: Content[];
          page: number;
          totalCount: number;
        };
      };
    }
  | {
      type: "SET_ASMR";
      payload: {
        asmrList: { audios: Content[]; page: number; totalCount: number };
      };
    };

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_STORY":
      return {
        ...state,
        storyList: action.payload.storyList,
      };
    case "SET_SONG":
      return {
        ...state,
        songList: action.payload.songList,
      };
    case "SET_ASMR":
      return {
        ...state,
        asmrList: action.payload.asmrList,
      };

    default:
      return state;
  }
};

export default reducer;
