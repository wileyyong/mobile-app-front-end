import { Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  blurContainer: {
    borderRadius: 15,
    marginHorizontal: 10,
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  input: {
    color: Colors.WHITE,
  },
  inputBlur: {
    borderRadius: 15,
    height: 100,
    overflow: 'hidden',
    padding: 15,
    width: '100%',
  },
});