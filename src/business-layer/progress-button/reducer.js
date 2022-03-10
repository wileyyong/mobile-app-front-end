const initialState = {
  isRecording: 0,
  file: undefined,
};
const progressButtonReducer = (state = initialState, action) => {
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
