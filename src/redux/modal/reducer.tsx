import { ModalType } from './types';

const initialState: ModalType = {
modal:false,
pozPouchModal:false
};

export const ModalReducer = (
  state = initialState,
  action: { type: string; },
) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        modal:!state.modal

      };
    case 'TOGGLE_POZPOUCH':
      return {
        ...state,
        pozPouchModal:!state.pozPouchModal
      };
    default:
      return state;
  }
};
