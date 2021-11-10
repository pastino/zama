import {createSlice} from '@reduxjs/toolkit';

export interface InteractionState {
  toastMessage: boolean;
  toastMessageText: string;
  openUsePurposeServey: boolean;
  currentRoute: string;
}

const userSlice = createSlice({
  name: 'interaction',
  initialState: {
    toastMessage: false,
    toastMessageText: '',
    openUsePurposeServey: false,
    currentRoute: '',
  } as InteractionState,
  reducers: {
    onToastMessage(state, action) {
      state.toastMessage = true;
      state.toastMessageText = action.payload.toastMessageText;
    },
    offToastMessage(state, action) {
      state.toastMessage = false;
      state.toastMessageText = '';
    },
    setOpenUsePurposeServey(state, action) {
      state.openUsePurposeServey = true;
    },
    setCloseUsePurposeServey(state, action) {
      state.openUsePurposeServey = false;
    },
    setCurrentRoute(state, action) {
      state.currentRoute = action.payload.currentRoute;
    },
  },
});

export const {
  onToastMessage,
  offToastMessage,
  setOpenUsePurposeServey,
  setCloseUsePurposeServey,
  setCurrentRoute,
} = userSlice.actions;

export default userSlice.reducer;
