import { FontFamily } from '$theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    marginHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontFamily: FontFamily.REGULAR.font,
  },
  copyText: {
    marginLeft: 10,
  },
  copyBtn: {
    height: 44,
    borderRadius: 16,
  },
});
