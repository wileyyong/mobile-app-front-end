import { progressButtonType } from './types';

const initialState: progressButtonType = {
  file: undefined,
  isRecording: 0,
};

export const progressButtonReducer = (
  state = initialState,
  action: { type: string; payload: progressButtonType },
) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        file: action.payload.file,
        isRecording: action.payload.isRecording,
      };
    default:
      return state;
  }
};
