import actions from './actions';

const initState = {
  data: [],
  error: null,
  loading: false,
};

function userReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default userReducer;
