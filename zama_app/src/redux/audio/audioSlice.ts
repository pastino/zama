import {createSlice} from '@reduxjs/toolkit';
import {UserState} from '../user/userSlice';

export interface AudioState {
  id: number;
  recoFlag: boolean;
  title: string;
  time: number;
  division: string;
  thumbnail: string;
  file: string;
  createAt: Date;
  updateAt: Date;
}

export interface RecoAudiosState extends AudioState {
  creator: UserState;
}

interface DivisionDataState {
  category: string;
  categoryData: RecoAudiosState[];
}

export interface TotalAudiosState {
  division: string;
  divisionData: DivisionDataState;
}

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
