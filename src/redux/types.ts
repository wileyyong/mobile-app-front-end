import { UserState, USER_ACTION_TYPES } from './user/types';
import { progressButtonType } from './progress-button/types';
import { GenericState } from './generic/types';

type ActionTypes = USER_ACTION_TYPES;

export const requestActionsCreator = (type: ActionTypes) => ({
  type,
});
export interface AppState {
  user: UserState;
  ProgressButtonRedux: progressButtonType;
  generic: GenericState;
}
