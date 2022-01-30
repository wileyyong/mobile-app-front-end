import { Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
