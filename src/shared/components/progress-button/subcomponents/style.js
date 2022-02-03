import { Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  defaultContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    height: 20,
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  defaultProgressBar: {
    borderColor: Colors.BLACK,
    borderRadius: 5,
    borderWidth: 2,
    overflow: 'hidden',
    width: '100%',
  },
  progressOverlay: {
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
});
