import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// reducers
import contents, { ContentsState } from "./contents";

export interface State {
  contents: ContentsState;
}

const persistConfig = {
  key: "root",
  storage: storage,
  timeout: 0,
  whitelist: ["contents"],
};

const rootReducer = combineReducers({
  contents,
});

export default persistReducer(persistConfig, rootReducer);
