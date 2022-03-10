const initialState = {
  count: 0,
  file: undefined,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        count: action.payload.count,
        file: action.payload.file,
      };
    default:
      return state;
  }
};
export default countReducer;
