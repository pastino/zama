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

const initBlankData = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}];

const userSlice = createSlice({
  name: 'interaction',
  initialState: {
    recoAudios: initBlankData,
    totalAudios: [
      {
        division: 'Song',
        data: initBlankData,
      },
      {
        division: 'Story',
        data: initBlankData,
      },
      {
        division: 'ASMR',
        data: initBlankData,
      },
    ],
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
