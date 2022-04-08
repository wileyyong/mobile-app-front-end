export enum USER_ACTION_TYPES {
  SIGNUP_REQUEST = 'user/SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'user/SIGNUP_SUCCESS',
  SIGNUP_ERROR = 'user/SIGNUP_ERROR',

  SIGNIN_REQUEST = 'user/SIGNIN_REQUEST',
  SIGNIN_SUCCESS = 'user/SIGNIN_SUCCESS',
  SIGNIN_ERROR = 'user/SIGNIN_ERROR',

  SET_WALLET_ADDRESS = 'user/SET_WALLET_ADDRESS',
  REMOVE_USER = 'user/REMOVE_USER',
  CLEAR_REDUX_STORE = 'user/CLEAR_REDUX_STORE',
}

export type SetUserSuccess = {
  type: USER_ACTION_TYPES.SIGNUP_SUCCESS | USER_ACTION_TYPES.SIGNIN_SUCCESS;
  user: PozzleUser;
};

export type RemoveUserSuccess = {
  type: USER_ACTION_TYPES.REMOVE_USER;
};

export type UserState = {
  user: null | PozzleUser;
  authorizationHeader: null | string;
  requestStatus: RequestStatus;
};

export type UserActions = SetUserSuccess | RemoveUserSuccess;
