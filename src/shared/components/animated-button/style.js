import { Colors, BorderRadius, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: BorderRadius.XL,
    height: Scaling.scale(40),
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: Colors.WHITE,
    fontSize: 18,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    borderRadius: BorderRadius.XL,
    left: 0,
    position: 'absolute',
    top: 0,
  },
});
