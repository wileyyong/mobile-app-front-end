import { StyleSheet } from 'react-native';

import { colors } from '$theme/colors';

export default StyleSheet.create({
  bioBox: {
    borderColor: colors.GRAY3,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    height: 100,
    padding: 10,
    width: '100%',
  },
  metalicBorderContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    paddingVertical: 8,
    width: '100%',
  },
  passportContent: {
    alignSelf: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    padding: 20,
    width: '95%',
  },
  pfpBorderContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    padding: 4,
  },
  pfpImage: {
    borderRadius: 10,
    height: 90,
    width: 90,
  },
  underline: {
    borderColor: colors.GRAY3,
    borderStyle: 'dashed',
    borderWidth: 1,
    marginHorizontal: -1,
    marginTop: -1,
    paddingLeft: 5,
  },
  underlineOverflow: {
    height: 20,
    marginVertical: 5,
    overflow: 'hidden',
    width: '100%',
  },
});
