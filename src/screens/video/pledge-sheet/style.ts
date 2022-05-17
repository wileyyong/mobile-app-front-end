import { Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    marginVertical: 20,
  },
  explainer: {
    backgroundColor: Colors.GRAY2,
    borderRadius: 15,
    margin: 10,
    padding: 15,
    width: '100%',
  },
  li: {
    padding: 5,
  },
  requiredFieldText: { textAlign: 'center', width: '100%' },
});
