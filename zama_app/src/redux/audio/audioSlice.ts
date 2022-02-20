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
  voiceGender: string;
  color: string;
  isLike: boolean;
  createAt: Date;
  updateAt: Date;
  free: boolean;
  history?: any;
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
  topTenAudios: any;
  totalAudios: any;
  basketAudios: AudioState[];
}

const initBlankData = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}];

const userSlice = createSlice({
  name: 'interaction',
  initialState: {
    topTenAudios: [],
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
    basketAudios: [],
  } as HomeContentsState,
  reducers: {
    setTopTenAudios(state, action) {
      state.topTenAudios = action.payload.topTenAudios;
    },
    setHomeContents(state, action) {
      state.totalAudios = action.payload.totalAudios;
    },
    setBasketAudios(state, action) {
      state.basketAudios = action.payload.basketAudios;
    },
    updateBasketAudio(state, action) {
      const isBeforeLike = action.payload.isLike;
      if (isBeforeLike) {
        const filteredAudios = state.basketAudios.filter(
          audio => audio.id !== action.payload.audio.id,
        );
        state.basketAudios = filteredAudios;
      } else {
        state.basketAudios = [...state.basketAudios, action.payload.audio];
      }
    },
  },
});

export const {
  setHomeContents,
  setBasketAudios,
  setTopTenAudios,
  updateBasketAudio,
} = userSlice.actions;
export default userSlice.reducer;
