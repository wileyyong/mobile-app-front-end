import { Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,
    justifyContent: 'center',
    padding: 15,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '100%',
  },
});
