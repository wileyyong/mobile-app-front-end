import { StyleSheet } from 'react-native';

import { colors } from '../../theme/colors';

export default StyleSheet.create({
  metalicBorderContainer: {
    width: '100%',
    paddingVertical: 8,
    borderRadius: 15,
    overflow: 'hidden',
  },
  passportContent: {
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    padding: 20,
  },
  pfpBorderContainer: {
    padding: 4,
    borderRadius: 10,
    overflow: 'hidden',
  },
  pfpImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  underline: {
    borderWidth: 1,
    marginTop: -1,
    marginHorizontal: -1,
    borderStyle: 'dashed',
    borderColor: colors.GRAY3,
    paddingLeft: 5,
  },
  underlineOverflow: {
    height: 20,
    overflow: 'hidden',
    width: '100%',
    marginVertical: 5,
  },
  bioBox: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
    borderColor: colors.GRAY3,
    width: '100%',
    padding: 10,
  },
});
