type progressButtonType = { isRecording: number; file?: string };

const initialState: progressButtonType = {
  file: undefined,
  isRecording: 0,
};

const progressButtonReducer = (
  state = initialState,
  action: { type: string; payload: progressButtonType }
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

export default progressButtonReducer;
