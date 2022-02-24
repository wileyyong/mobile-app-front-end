import { BorderRadius, Colors, Shadow, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    paddingRight: 30,
    top: 10,
    width: '100%',
    height: 55,
    //backgroundColor: 'yellow',
  },

  camera: {
    height: '100%',
    width: '100%',
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
  cameraButtonContainer: {
    position: 'absolute',
    right: Scaling.scale(12),
    top: Scaling.scale(6),
  },
  cameraCancelContainer: {
    position: 'absolute',
    right: Scaling.scale(30),
    top: Scaling.scale(55),
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
