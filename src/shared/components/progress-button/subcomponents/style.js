import { Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // overflow: 'hidden',
    height: '100%',
  },
  defaultContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    height: 59,
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  defaultProgressBar: {
    borderColor: Colors.BLACK,
    borderRadius: 5,
    borderWidth: 2,
    height: 59,
    overflow: 'hidden',
    width: '100%',
  },
  progressOverlay: {
    height: 65,
    overflow: 'hidden',
    width: '100%',
  },
});
