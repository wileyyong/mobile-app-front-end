import { StyleSheet } from 'react-native';

import { colors } from '../../../shared/theme/colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  icon: {
    padding: 10,
  },
  title: {
    padding: 10,
  },
  li: {
    padding: 5,
  },
  x: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  explainer: {
    backgroundColor: colors.GRAY6,
    borderRadius: 15,
    padding: 15,
    margin: 10,
    width: '100%',
  },
  button: {
    marginVertical: 20,
  },
  blurContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  inputBlur: {
    width: '100%',
    height: 100,
    padding: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  inputBlurSm: {
    height: 50,
    borderRadius: 15,
    overflow: 'hidden',
  },
  input: {
    color: colors.WHITE,
  },
});
