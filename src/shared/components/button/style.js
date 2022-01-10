import { StyleSheet } from 'react-native';

import { colors } from '../../theme/colors';

export default StyleSheet.create({
  button: {
    borderRadius: 15,
    padding: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
