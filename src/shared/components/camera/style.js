import { BorderRadius, Shadow, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cameraContainer: {
    flex: 1,
    marginBottom: Scaling.scale(12),
    ...Shadow.MEDIUM,
  },
  image: {
    borderRadius: BorderRadius.LARGE,
    height: '100%',
    width: '100%',
  },
});
