import { progressButtonType } from './types';

const initialState: progressButtonType = {
  file: undefined,
  isRecording: false,
  hasActivity: false,
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
        activity: action.payload.activity,
        hasActivity: action.payload.hasActivity,
      };
    case 'UPDATE_UPLOADING':
      return {
        ...state,
        isUploading: action.payload.isUploading,
      };
    case 'UPDATE_MODAL':
      return {
        ...state,
        hasModalOpen: action.payload.hasModalOpen,
      };

    case 'UPDATE_PROGRESS':
      return {
        ...state,
        uploadProgress: action.payload.uploadProgress,
      };

    default:
      return state;
  }
};
