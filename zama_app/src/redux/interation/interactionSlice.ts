import {createSlice} from '@reduxjs/toolkit';

export interface InteractionState {
  toastMessage: boolean;
  toastMessageText: string;
  openUsePurposeServey: boolean;
  openSubscriptionModal: boolean;
  openRewardModal: boolean;
  openReportModal: boolean;
  currentRoute: string;
  isLoading: boolean;
}

const userSlice = createSlice({
  name: 'interaction',
  initialState: {
    toastMessage: false,
    toastMessageText: '',
    openReportModal: false,
    openUsePurposeServey: false,
    openSubscriptionModal: false,
    openRewardModal: false,
    currentRoute: '',
    isLoading: false,
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
    setSubscriptionModal(state, action) {
      state.openSubscriptionModal = action.payload.openSubscriptionModal;
    },
    setRewardModal(state, action) {
      state.openRewardModal = action.payload.openRewardModal;
    },
    setOpenReportModal(state, action) {
      state.openReportModal = action.payload.openReportModal;
    },
    setCurrentRoute(state, action) {
      state.currentRoute = action.payload.currentRoute;
    },
    setLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const {
  onToastMessage,
  offToastMessage,
  setOpenUsePurposeServey,
  setCloseUsePurposeServey,
  setSubscriptionModal,
  setRewardModal,
  setOpenReportModal,
  setCurrentRoute,
  setLoading,
} = userSlice.actions;

export default userSlice.reducer;
