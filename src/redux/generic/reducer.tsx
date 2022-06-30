import { GenericState } from './types';

export const genericReducer = (
  state: GenericState = { showOptsSheet: false, showPassportModal: false, userId:'' },
  action: { type: string; payload: GenericState },
) => {
  switch (action.type) {
    case 'UPDATE_OPTS_SHEET':
      return {
        ...state,
        showOptsSheet: action.payload.showOptsSheet,
      };
      case 'UPDATE_PASSPORT_MODAL':
        return {
          ...state,
          showPassportModal: action.payload.showPassportModal,
          userId: action.payload.userId,
        };
    default:
      return state;
  }
};
