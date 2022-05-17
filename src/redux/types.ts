import { UserState } from './user/types';
import { progressButtonType } from './progress-button/types';
import { GenericState } from './generic/types';

export interface AppState {
  user: UserState;
  ProgressButtonRedux: progressButtonType;
  generic: GenericState;
}
