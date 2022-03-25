import { progressButtonType } from './types';

const initialState: progressButtonType = {
  file: undefined,
  isRecording: false,
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
    case 'UPDATE_ACTIVITY':
      return {
        ...state,
        hasActivity: action.payload.hasActivity,
      };
    default:
      return state;
  }
};
