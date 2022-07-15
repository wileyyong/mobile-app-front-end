import { instance } from 'src/shared/api/axios';
import { createUserProfileApi } from 'src/shared/api/user';
import {
  ICreateUserProfilePayload,
  ILoginUserProfilePayload,
} from 'src/shared/api/user/models';
import { removeItemFromStorage, setItemToStorage } from '$utils';
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

export const setIsNewUser = (isNewUser: boolean) => ({
  type: ActionTypes.SET_IS_NEW_USER,
  isNewUser: isNewUser,
});

export const clearUser = () => ({
  type: ActionTypes.CLEAR_USER,
});

export const createUser = (payload: ICreateUserProfilePayload) => {
  return (dispatch: any) => {
    dispatch(requestActionsCreator(ActionTypes.SIGNUP_REQUEST));
    return instance
      .put('/users', payload)
      .then(async response => {
        await setItemToStorage(
          'sessionToken',
          response.data.authorizationHeader,
        );
        dispatch(setSignedUpUser(response.data));
        return {
          data: response.data,
          requestStatus: 'success',
        };
      })
      .catch(err => {
        Sentry.captureException(err);

        dispatch(requestActionsCreator(ActionTypes.SIGNUP_REQUEST));
      });
  };
};
export const loginUser = async (payload: ILoginUserProfilePayload) => {
  return (dispatch: any) => {
    dispatch(requestActionsCreator(ActionTypes.SIGNIN_REQUEST));
    return instance
      .post('/users', payload)
      .then(async response => {
        await setItemToStorage(
          'sessionToken',
          response.data.authorizationHeader,
        );
        dispatch(setSignInUser(response.data));
        return {
          data: response.data,
          requestStatus: 'success',
        };
      })
      .catch(err => {
        dispatch(requestActionsCreator(ActionTypes.SIGNIN_REQUEST));
        return {
          requestStatus: 'failure',
        };
      });
  };
};

/**
 *
 * Case 1: First time in the app:
 *
 * - If the user doesnt have a wallet => Clicks "I'm New"
 *   - Creates a new wallet via web3 api
 *   - Present them with their seed phrase
 *   - Continue to passport screen, fill out info
 *   - Clicking "Done" => Sign message and hit login endpoint
 *
 * - If the user has am existing wallet => Clicks "Login with Wallet"
 *   - Connect wallet via WalletConnect
 *   - Continue to passport screen, fill out info
 *   - Clicking "Done" => Sign message and hit login endpoint
 *
 * Case 2: Returning to the app:
 *
 * - When the user returns, the app will automatically connect to the wallet
 * - If the user was logged out from within the app, they will be presented with the Onboarding flow again
 * - They have the option to create a new wallet or reconnect the existing wallet
 * - If they choose to connect the existing wallet, we already have the passport info saved, so we can go straight to "Home"
 *
 */
