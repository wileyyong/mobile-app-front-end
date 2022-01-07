import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

import * as screens from '$screens';

export default function initialize(store) {
  Object.values(screens).forEach((s) => s.register(store));

  Navigation.setDefaultOptions({
    animations: Platform.select({
      android: {
        pop: {
          content: {
            x: {
              duration: 300,
              from: 0,
              interpolation: 'accelerate',
              to: 1000,
            },
          },
        },
        push: {
          content: {
            x: {
              duration: 300,
              from: 1000,
              interpolation: 'decelerate',
              to: 0,
            },
          },
          waitForRender: true,
        },
      },
      ios: {},
    }),
    layout: {
      orientation: ['portrait'],
    },
    modalPresentationStyle: Platform.select({
      android: 'overCurrentContext',
      ios: 'fullScreen',
    }),
    topBar: {
      drawBehind: true,
      visible: false,
    },
  });

  return Promise.resolve();
}
