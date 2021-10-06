import {createSlice} from '@reduxjs/toolkit';

export interface HomeContentsState {
  recoAudios: any;
  totalAudios: any;
}

const userSlice = createSlice({
  name: 'interaction',
  initialState: {
    recoAudios: [],
    totalAudios: [],
  } as HomeContentsState,
  reducers: {
    setHomeContents(state, action) {
      state.recoAudios = action.payload.recoAudios;
      state.totalAudios = action.payload.totalAudios;
    },
  },
});

export const {setHomeContents} = userSlice.actions;
export default userSlice.reducer;
