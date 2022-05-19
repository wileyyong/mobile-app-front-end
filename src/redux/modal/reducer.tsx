import { ModalType } from './types';

const initialState: ModalType = {
modal:false
};

export const ModalReducer = (
  state = initialState,
  action: { type: string; },
) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,modal:!state.modal

      };

    default:
      return state;
  }
};
