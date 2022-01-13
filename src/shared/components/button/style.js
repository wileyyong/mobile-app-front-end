import { BorderRadius, Shadow, Padding } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  outlinedContainer: {
    alignItems: 'center',
    borderRadius: BorderRadius.XL,
    justifyContent: 'center',
    overflow: 'hidden',
    ...Padding.ALL_SIDES_1X,
    ...Shadow.LARGE,
  },
  outlinedContent: {
    alignItems: 'center',
    borderRadius: BorderRadius.LARGE,
    justifyContent: 'center',
    width: '99.5%',
    ...Padding.ALL_SIDES_3X,
  },
  solidButton: {
    alignItems: 'center',
    borderRadius: BorderRadius.XL,
    justifyContent: 'center',
    ...Padding.ALL_SIDES_4X,
    ...Shadow.LARGE,
  },
});
