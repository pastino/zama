import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  id: number;
  name: string;
  loginMethod: string | null;
  email: string | null;
  password?: string;
  kakaoId: string | null;
  naverId: string | null;
  phoneNum: string | null;
  appleId: string | null;
  googleId: string | null;
  avatar: string | null;
  birth: string | null;
  joinStatus: number | null;
  sleepAudio: any;
  serviceTermAgreement: boolean | null;
  privacyPolicyAgreement: boolean | null;
  marketingAgreement: boolean | null;
  updateAt: string;
  createAt: string;
}

export interface MyState {
  token: string | null;
  user: UserState | null;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    user: {},
  } as MyState,
  reducers: {
    logIn(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logOut(state) {
      state.token = null;
      state.user = null;
    },
  },
});

export const {logIn, logOut} = userSlice.actions;
export default userSlice.reducer;
