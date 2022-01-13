import { Colors, Padding, BorderRadius } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: BorderRadius.XL,
    flexDirection: 'row',
    marginHorizontal: '1%',
    marginVertical: 8,
    overflow: 'hidden',
    ...Padding.HORIZONTAL_3X,
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
});
