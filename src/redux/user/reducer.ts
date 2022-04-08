import {
  SetUserSuccess,
  UserActions,
  UserState,
  USER_ACTION_TYPES as actionType,
} from './types';

export const initialState: UserState = {
  user: null,
  authorizationHeader: null,
  requestStatus: 'idle',
};

const ACTIONS: any = {
  [actionType.SIGNUP_REQUEST]: (state: UserState) => ({
    ...state,
    requestStatus: 'pending',
  }),
  [actionType.SIGNUP_SUCCESS]: (
    state: UserState,
    { user }: SetUserSuccess,
  ) => ({
    ...state,
    user: user,
    authorizationHeader: user.authorizationHeader,
    requestStatus: 'success',
  }),
  [actionType.SIGNUP_ERROR]: (state: UserState) => ({
    ...state,
    requestStatus: 'failed',
  }),

  [actionType.SIGNIN_REQUEST]: (state: UserState) => ({
    ...state,
    requestStatus: 'pending',
  }),
  [actionType.SIGNIN_SUCCESS]: (
    state: UserState,
    { user }: SetUserSuccess,
  ) => ({
    ...state,
    user: user,
    authorizationHeader: user.authorizationHeader,
    requestStatus: 'success',
  }),
  [actionType.SIGNIN_ERROR]: (state: UserState) => ({
    ...state,
    requestStatus: 'failed',
  }),

  [actionType.REMOVE_USER]: (state: UserState) => ({
    ...state,
    user: null,
    authorizationHeader: null,
  }),
};

export const userReducer = (state = initialState, action: UserActions) => {
  const handler = ACTIONS[action.type];
  return handler ? handler(state, action) : state;
};
