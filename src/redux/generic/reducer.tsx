import { GenericState } from './types';

export const genericReducer = (
  state: GenericState = { showOptsSheet: false },
  action: { type: string; payload: GenericState },
) => {
  switch (action.type) {
    case 'UPDATE_OPTS_SHEET':
      return {
        ...state,
        showOptsSheet: action.payload.showOptsSheet,
      };
    default:
      return state;
  }
};
