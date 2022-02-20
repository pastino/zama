import {createSlice} from '@reduxjs/toolkit';

export interface PlayList {
  id: number;
  url: string;
  title: string;
  artist?: string;
  artwork: string;
  duration: number;
  division: string;
  color: string;
}

type RepeatStateType = 'normal' | 'totalRepeat' | 'oneRepeat';

export interface PlayerState {
  playing: boolean;
  playList: PlayList[];
  modalVisible: boolean;
  repeatState: RepeatStateType;
}

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    playing: false,
    playList: [],
    modalVisible: false,
    repeatState: 'normal',
  } as PlayerState,
  reducers: {
    setResetPlayer(state, action) {
      state.playing = false;
      state.playList = [];
      state.modalVisible = false;
    },
    setPlay(state, action) {
      state.playing = true;
    },
    setPause(state, action) {
      state.playing = false;
    },
    setPlayList(state, action) {
      state.playList = action.payload.playList;
    },
    setModalVisible(state, action) {
      state.modalVisible = action.payload.modalVisible;
    },
    setFirstPlay(state, action) {
      state.modalVisible = action.payload.modalVisible;
      state.playList = action.payload.playList;
      state.playing = action.payload.playing;
    },
    setRepeatState(state, action) {
      let repeat;
      switch (state.repeatState) {
        case 'normal':
          repeat = 'totalRepeat';
          break;
        case 'totalRepeat':
          repeat = 'oneRepeat';
          break;
        case 'oneRepeat':
          repeat = 'normal';
          break;
      }

      state.repeatState = repeat;
    },
  },
});

export const {
  setResetPlayer,
  setPlay,
  setPause,
  setPlayList,
  setModalVisible,
  setFirstPlay,
  setRepeatState,
} = playerSlice.actions;
export default playerSlice.reducer;
