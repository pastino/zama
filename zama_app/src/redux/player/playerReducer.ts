import {createSlice} from '@reduxjs/toolkit';

export interface PlayList {
  id: number;
  url: string;
  title: string;
  artist?: string;
  artwork: string;
  duration: number;
  division: string;
}

export interface PlayerState {
  playing: boolean;
  playingNum: number;
  playList: PlayList[];
  continuePlay: boolean;
  modalVisible: boolean;
}

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    playing: false,
    playingNum: 0,
    playList: [],
    continuePlay: false,
    modalVisible: false,
  } as PlayerState,
  reducers: {
    setResetPlayer(state, action) {
      state.playing = false;
      state.playingNum = 0;
      state.playList = [];
      state.continuePlay = false;
      state.modalVisible = false;
    },
    setPlay(state, action) {
      state.playing = true;
    },
    setPause(state, action) {
      state.playing = false;
    },
    setPlayingNum(state, action) {
      state.playingNum = action.payload.playingNum;
    },
    setPlayList(state, action) {
      state.playList = action.payload.playList;
    },
    setModalVisible(state, action) {
      state.modalVisible = action.payload.modalVisible;
    },
    setContinuePlay(state, action) {
      state.continuePlay = action.payload.continuePlay;
    },
    setFirstPlay(state, action) {
      state.modalVisible = action.payload.modalVisible;
      state.playList = action.payload.playList;
      state.playing = action.payload.playing;
      state.playingNum = action.payload.playingNum;
    },
  },
});

export const {
  setResetPlayer,
  setPlay,
  setPause,
  setPlayList,
  setPlayingNum,
  setContinuePlay,
  setModalVisible,
  setFirstPlay,
} = playerSlice.actions;
export default playerSlice.reducer;
