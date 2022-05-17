import {
  combineReducers,
  createStore,
  applyMiddleware,
  AnyAction,
  CombinedState,
} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from './types';
import { userReducer } from './user/reducer';
import { USER_ACTION_TYPES } from './user/types';
import { progressButtonReducer } from './progress-button/reducer';
import{ModalReducer} from "./modal/reducer"

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const appReducer = combineReducers<AppState>({
  user: userReducer,
  ProgressButtonRedux: progressButtonReducer,
  modal:ModalReducer
});

const rootReducer = (
  state: CombinedState<AppState> | undefined,
  action: AnyAction,
) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === USER_ACTION_TYPES.CLEAR_REDUX_STORE) {
    AsyncStorage.removeItem('persist:root');

    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
let persistor = persistStore(store);

export { store, persistor };
