import { BorderRadius, Scaling, Shadow, Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  outlinedContainer: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: BorderRadius.LARGE,
    justifyContent: 'center',
    left: 20,
    overflow: 'hidden',
    padding: Scaling.scale(10),
    position: 'absolute',
    top: 50,
    ...Shadow.LARGE,
  },
  outlinedContent: {
    alignItems: 'center',
    borderRadius: BorderRadius.LARGE,
    justifyContent: 'center',
    padding: Scaling.scale(12),
  },
  solidButton: {
    alignItems: 'center',
    borderRadius: BorderRadius.XL,
    justifyContent: 'center',
    padding: Scaling.scale(12),
    ...Shadow.LARGE,
  },
});
