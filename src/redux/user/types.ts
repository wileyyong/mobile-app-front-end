export enum USER_ACTION_TYPES {
  SIGNUP_REQUEST = 'user/SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'user/SIGNUP_SUCCESS',
  SIGNUP_ERROR = 'user/SIGNUP_ERROR',

  SIGNIN_REQUEST = 'user/SIGNIN_REQUEST',
  SIGNIN_SUCCESS = 'user/SIGNIN_SUCCESS',
  SIGNIN_ERROR = 'user/SIGNIN_ERROR',

  SET_WALLET_ADDRESS = 'user/SET_WALLET_ADDRESS',
  SET_IS_NEW_USER = 'user/SET_IS_NEW_USER',
  CLEAR_USER = 'user/CLEAR_USER',
  CLEAR_REDUX_STORE = 'user/CLEAR_REDUX_STORE',
}

export type SetUserSuccess = {
  type: USER_ACTION_TYPES.SIGNUP_SUCCESS | USER_ACTION_TYPES.SIGNIN_SUCCESS;
  user: PozzleUser;
};

export type RemoveUserSuccess = {
  type: USER_ACTION_TYPES.REMOVE_USER;
};

export type SetIsNewUser = {
  type: USER_ACTION_TYPES.SET_IS_NEW_USER;
  isNewUser: boolean;
}

export type UserState = {
  user: null | PozzleUser;
  authorizationHeader: null | string;
  requestStatus: RequestStatus;
  isNewUser: boolean;
};

export type UserActions = SetUserSuccess | RemoveUserSuccess | SetIsNewUser;
