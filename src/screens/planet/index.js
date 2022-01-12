import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { navigate, push, pop } from './actions';
import NAME from './name';
import registrar from './screen';

function register(state) {
  Navigation.registerComponentWithRedux(NAME, registrar, Provider, state);
}

const screen = {
  navigate,
  pop,
  push,
  register,
};

export default screen;
