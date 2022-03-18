export enum USER_ACTION_TYPES {
  SET_STATE = 'user/SET_STATE',
  REMOVE_USER = 'user/REMOVE_USER',

  CLEAR_REDUX_STORE = 'user/CLEAR_REDUX_STORE',
}

export type SetUserSuccess = {
  type: USER_ACTION_TYPES.SET_STATE;
  user: PozzleUser;
};

export type RemoveUserSuccess = {
  type: USER_ACTION_TYPES.REMOVE_USER;
};

export type UserState = {
  user: null | PozzleUser;
};

export type UserActions = SetUserSuccess | RemoveUserSuccess;
