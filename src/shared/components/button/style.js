import { BorderRadius, Scaling, Shadow } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  outlinedContainer: {
    alignItems: 'center',
    borderRadius: BorderRadius.XL,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: Scaling.scale(12),
    ...Shadow.LARGE,
  },
  outlinedContent: {
    alignItems: 'center',
    borderRadius: BorderRadius.LARGE,
    justifyContent: 'center',
    padding: Scaling.scale(12),
    width: '99.5%',
  },
  solidButton: {
    alignItems: 'center',
    borderRadius: BorderRadius.XL,
    justifyContent: 'center',
    padding: Scaling.scale(12),
    ...Shadow.LARGE,
  },
});
