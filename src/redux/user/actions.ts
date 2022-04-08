import { instance } from 'src/shared/api/axios';
import { createUserProfileApi } from 'src/shared/api/user';
import {
  ICreateUserProfilePayload,
  ILoginUserProfilePayload,
} from 'src/shared/api/user/models';
import { setItemToStorage } from 'src/shared/utils/asyncstorage';
import { requestActionsCreator } from '../types';
import { USER_ACTION_TYPES as ActionTypes } from './types';

export const setSignedUpUser = (PozzleUser: PozzleUser) => ({
  type: ActionTypes.SIGNUP_SUCCESS,
  user: PozzleUser,
});

export const setSignInUser = (PozzleUser: PozzleUser) => ({
  type: ActionTypes.SIGNIN_SUCCESS,
  user: PozzleUser,
});

export const createUser = (payload: ICreateUserProfilePayload) => {
  return (dispatch: any) => {
    dispatch(requestActionsCreator(ActionTypes.SIGNUP_REQUEST));

    return instance
      .put('/users', payload)
      .then(async response => {
        console.log(response, 'signUprequest');
        if ([200, 201].includes(response.status)) {
          await setItemToStorage(
            'sessionToken',
            response.data.authorizationHeader,
          );
          dispatch(setSignedUpUser(response.data));
          return {
            data: response.data,
            requestStatus: 'success',
          };
        }
      })
      .catch(res => {
        dispatch(requestActionsCreator(ActionTypes.SIGNUP_REQUEST));
      });
  };
};
export const loginUser = (payload: ILoginUserProfilePayload) => {
  return (dispatch: any) => {
    dispatch(requestActionsCreator(ActionTypes.SIGNIN_REQUEST));
    console.log(payload);

    return instance
      .post('/users', payload)
      .then(async response => {
        console.log(response, 'signInrequest');
        if ([200, 201].includes(response.status)) {
          await setItemToStorage(
            'sessionToken',
            response.data.authorizationHeader,
          );
          dispatch(setSignInUser(response.data));
          return {
            data: response.data,
            requestStatus: 'success',
          };
        }

        return {
          data: response.data,
          requestStatus: 'success',
        };
      })
      .catch(err => {
        console.log(err.response, payload);
        dispatch(requestActionsCreator(ActionTypes.SIGNIN_REQUEST));
        return {
          requestStatus: 'failure',
        };
      });
  };
};
