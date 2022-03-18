import { BorderRadius, Scaling, Shadow, Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  outerStyle: {
    borderRadius: BorderRadius.LARGE,
    overflow: 'hidden',
    ...Shadow.LARGE,
  },
  outlinedContainer: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: BorderRadius.LARGE,
    justifyContent: 'center',
    padding: Scaling.scale(10),
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
