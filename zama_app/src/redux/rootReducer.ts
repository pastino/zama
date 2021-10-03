import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import usersReducer, {MyState} from './user/userSlice';
import interactionReducer, {
  InteractionState,
} from './interation/interactionSlice';

export interface State {
  usersReducer: MyState;
  interactionReducer: InteractionState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 0,
  whitelist: ['usersReducer'],
};

const rootReducer = combineReducers({
  usersReducer,
  interactionReducer,
});

export default persistReducer(persistConfig, rootReducer);
