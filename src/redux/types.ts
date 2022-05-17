import { UserState } from './user/types';
import { progressButtonType } from './progress-button/types';
import { ModalType } from './modal/types';

export interface AppState {
  user: UserState;
  ProgressButtonRedux: progressButtonType;
  modal:ModalType
}
