import {createSlice} from '@reduxjs/toolkit';

export interface VersionState {
  appVersionAnd: string;
  appVersionIOS: string;
  appMinimumVersion: string;
  appLatestVersion: string;
  isTest: boolean;
}

const versionSlice = createSlice({
  name: 'version',
  initialState: {
    appVersionAnd: '',
    appVersionIOS: '',
    appMinimumVersion: '',
    appLatestVersion: '',
    isTest: false,
  },
  reducers: {
    setVersion(state, action) {
      state.appVersionAnd = action.payload.appVersionAnd;
      state.appVersionIOS = action.payload.appVersionIOS;
      state.appMinimumVersion = action.payload.appMinimumVersion;
      state.appLatestVersion = action.payload.appLatestVersion;
      state.isTest = action.payload.isTest;
    },
  },
});

export const {setVersion} = versionSlice.actions;
export default versionSlice.reducer;
