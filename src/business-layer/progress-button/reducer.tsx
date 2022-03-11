type progressButtonType = { isRecording: number; file?: string };

const initialState: progressButtonType = {
  isRecording: 0,
  file: undefined,
};

const progressButtonReducer = (
  state = initialState,
  action: { type: string; payload: progressButtonType }
) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        isRecording: action.payload.isRecording,
        file: action.payload.file,
      };
    default:
      return state;
  }
};

export default progressButtonReducer;
