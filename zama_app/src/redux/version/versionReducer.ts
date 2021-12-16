import {createSlice} from '@reduxjs/toolkit';

export interface VersionState {
  appVersionAnd: string;
  appVersionIOS: string;
  isTest: boolean;
}

const versionSlice = createSlice({
  name: 'version',
  initialState: {
    appVersionAnd: '',
    appVersionIOS: '',
    isTest: false,
  },
  reducers: {
    setVersion(state, action) {
      state.appVersionAnd = action.payload.appVersionAnd;
      state.appVersionIOS = action.payload.appVersionIOS;
      state.isTest = action.payload.isTest;
    },
  },
});

export const {setVersion} = versionSlice.actions;
export default versionSlice.reducer;
