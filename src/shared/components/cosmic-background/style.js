import { StyleSheet } from 'react-native';

import { colors } from '$theme/colors';

export default StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  underlay: {
    backgroundColor: colors.BLACK,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});
