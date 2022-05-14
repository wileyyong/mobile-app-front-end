import { BorderRadius, Colors, Shadow, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  fakeVideo: {
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    borderRadius: BorderRadius.LARGE,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
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
  textPadding: {
    paddingTop: Scaling.scale(2),
  },
  videoButtonImage: {
    height: Scaling.scale(20),
    resizeMode: 'contain',
    width: Scaling.scale(20),
  },
  videoButtonPlayback: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  animatedView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  videoButtonsContainer: {
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Scaling.scale(12),
    paddingVertical: Scaling.scale(20),
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
  },
  videoHeader: {
    paddingHorizontal: Scaling.scale(16),
  },
  videoProgress: {
    color: Colors.WHITE,
    fontSize: 16,
  },
  videoProgressContainer: {
    height: Scaling.scale(40),
    left: Scaling.scale(12),
    position: 'absolute',
    top: Scaling.scale(6),
    width: Scaling.scale(100),
  },
});
