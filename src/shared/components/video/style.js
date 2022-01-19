import { BorderRadius, Colors, Shadow, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    borderRadius: BorderRadius.LARGE,
    height: '100%',
    width: '100%',
  },
  imageTintOverlay: {
    backgroundColor: Colors.BACKGROUND_TINT,
    borderRadius: BorderRadius.LARGE,
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  videoContainer: {
    flex: 1,
    marginBottom: Scaling.scale(12),
    ...Shadow.MEDIUM,
  },
  videoFeedContainer: {
    flex: 1,
    paddingHorizontal: Scaling.scale(28),
  },
});
