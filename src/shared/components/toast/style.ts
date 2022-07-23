import { FontFamily } from '$theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  fill: {
    flex: 1,
  },
  container: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 26,
    width: '92%',
  },
  icon: {
    marginHorizontal: 10,
  },
  text1: {
    fontFamily: FontFamily.REGULAR.font,
  },
});
