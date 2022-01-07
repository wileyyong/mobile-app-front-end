import { Navigation } from 'react-native-navigation';

import NAME from './name';

export function navigate() {
  Navigation.setRoot({
    root: {
      component: {
        id: NAME,
        name: NAME,
      },
    },
  });
}
