import {
  SetUserSuccess,
  UserActions,
  UserState,
  USER_ACTION_TYPES as actionType,
} from './types';

export const initialState: UserState = {
  user: null,
};

const ACTIONS: any = {
  [actionType.SET_STATE]: (state: UserState, {user}: SetUserSuccess) => ({
    ...state,
    user,
  }),
  [actionType.REMOVE_USER]: (state: UserState) => ({
    ...state,
    user: null,
  }),
};

export const userReducer = (state = initialState, action: UserActions) => {
  const handler = ACTIONS[action.type];
  return handler ? handler(state, action) : state;
};
