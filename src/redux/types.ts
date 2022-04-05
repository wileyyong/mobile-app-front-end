import { UserState } from './user/types';
import { progressButtonType } from './progress-button/types';

export interface AppState {
  user: UserState;
  ProgressButtonRedux: progressButtonType;
}
