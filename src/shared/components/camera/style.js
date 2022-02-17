import { BorderRadius, Colors, Shadow, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  videoProgress: {
    color: Colors.WHITE,
    fontSize: 16,
  },
  cameraButton: {
    alignItems: 'center',
    backgroundColor: Colors.THIRTYPERCENTBLACK,
    borderRadius: Scaling.scale(40),
    height: Scaling.scale(40),
    justifyContent: 'center',
    marginVertical: Scaling.scale(6),
    width: Scaling.scale(40),
  },
  videoProgressContainer: {
    position: 'absolute',
    left: Scaling.scale(12),
    top: Scaling.scale(6),
    // backgroundColor: Colors.YELLOW,
    height: Scaling.scale(40),
    width: Scaling.scale(100),
  },
  cameraButtonContainer: {
    position: 'absolute',
    right: Scaling.scale(12),
    top: Scaling.scale(6),
  },
  camera: {
    height: '100%',
    width: '100%',
  },
  cameraContainer: {
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    borderRadius: BorderRadius.LARGE,
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    ...Shadow.MEDIUM,
  },
  fakeVideo: {
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    borderRadius: BorderRadius.LARGE,
    flex: 1,
    justifyContent: 'center',
    marginBottom: Scaling.scale(12),
    ...Shadow.MEDIUM,
  },
  videoButtonPlayback: {
    alignItems: 'center',
    height: '20%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    top: 10,
    paddingRight: 30,
  },
});
