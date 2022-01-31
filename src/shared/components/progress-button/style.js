import { BorderRadius, Scaling, Shadow } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  animatedButton: {
    alignItems: 'center',
    borderRadius: BorderRadius.XL,
    justifyContent: 'center',
    ...Shadow.LARGE,
  },
  container: {
    borderRadius: BorderRadius.XL,
    height: Scaling.scale(40),
    overflow: 'hidden',
    width: '100%',
  },
  text: {
    alignSelf: 'center',
    fontSize: 22,
    height: Scaling.scale(50),
    position: 'absolute',
  },
});
