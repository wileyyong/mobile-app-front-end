import { StyleSheet } from 'react-native';

import { colors } from '../../../shared/theme/colors';

export default StyleSheet.create({
  blurContainer: {
    borderRadius: 15,
    marginHorizontal: 10,
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  button: {
    marginVertical: 20,
  },
  container: {
    marginHorizontal: 20,
  },
  explainer: {
    backgroundColor: colors.GRAY6,
    borderRadius: 15,
    margin: 10,
    padding: 15,
    width: '100%',
  },
  icon: {
    padding: 10,
  },
  input: {
    color: colors.WHITE,
  },
  inputBlur: {
    borderRadius: 15,
    height: 100,
    overflow: 'hidden',
    padding: 15,
    width: '100%',
  },
  inputBlurSm: {
    borderRadius: 15,
    height: 50,
    overflow: 'hidden',
  },
  li: {
    padding: 5,
  },
  title: {
    padding: 10,
  },
  x: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
