import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  id: number;
  // loginMethod: string;
  kakaoId: string | null;
  // naverId: string | null;
  // password: string | null;
  // phoneNum: string | null;
  // appleId: string | null;
  // googleId: string | null;
  // avatar: string | null;
  // nickname: string;
  // updateAt: string;
  // createAt: string;
}

export interface MyState {
  token: string | null;
  user: UserState | null;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    user: null,
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
