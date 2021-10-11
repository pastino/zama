import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import usersReducer, {MyState} from './user/userSlice';
import interactionReducer, {
  InteractionState,
} from './interation/interactionSlice';
import audioReducer, {HomeContentsState} from './audio/audioSlice';
import playerReducer, {PlayerState} from './player/playerReducer';

export interface State {
  usersReducer: MyState;
  interactionReducer: InteractionState;
  audioReducer: HomeContentsState;
  playerReducer: PlayerState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 0,
  whitelist: ['usersReducer'],
};

const rootReducer = combineReducers({
  usersReducer,
  audioReducer,
  interactionReducer,
  playerReducer,
});

export default persistReducer(persistConfig, rootReducer);
