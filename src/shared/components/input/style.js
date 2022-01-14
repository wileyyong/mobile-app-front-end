import { Colors, Padding, BorderRadius } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: BorderRadius.XL,
    flexDirection: 'row',
    overflow: 'hidden',
    ...Padding.HORIZONTAL_4X,
    ...Padding.VERTICAL_1X,
  },
  icon: {
    ...Padding.HORIZONTAL_3X,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: Colors.WHITE,
    height: 50,
    width: '100%',
  },
  multiline: {
    ...Padding.VERTICAL_4X,
    height: '100%',
  },
});
