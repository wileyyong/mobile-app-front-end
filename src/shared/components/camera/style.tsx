// import { BorderRadius, Colors, Shadow, Scaling } from '$theme';

import { StyleSheet } from 'react-native';
import { BorderRadius, Colors, Scaling, Shadow } from '$theme';

export default StyleSheet.create({
  buttonContainer: {
    paddingLeft: Scaling.scale(10),
    paddingRight: Scaling.scale(50),
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    alignSelf: 'center',
    color: Colors.DARK_PURPLE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  camera: {
    height: '100%',
    width: '100%',
  },
  cameraButton: {
    alignItems: 'center',
    backgroundColor: Colors.SEVENTYPERCENTPURPLE,
    borderRadius: Scaling.scale(40),
    height: Scaling.scale(40),
    justifyContent: 'center',
    marginVertical: Scaling.scale(6),
    width: Scaling.scale(40),
  },
  cameraButtonContainer: {
    zIndex: 1,
    position: 'absolute',
    right: Scaling.scale(12),
    top: Scaling.scale(6),
  },
  cameraCancelContainer: {
    position: 'absolute',
    right: Scaling.scale(12),
    top: Scaling.scale(12),
  },
  cameraContainer: {
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    borderRadius: BorderRadius.XL,
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    ...Shadow.MEDIUM,
  },
  fakeVideo: {
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    borderRadius: BorderRadius.XL,
    flex: 1,
    justifyContent: 'center',
    marginBottom: Scaling.scale(12),
    ...Shadow.MEDIUM,
  },
  videoButtonPlayback: {
    alignItems: 'center',
    height: Scaling.scale(60),
    padding: Scaling.scale(10),
  },
  animatedView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  videoProgress: {
    color: Colors.WHITE,
    fontSize: 16,
  },
  reloadIcon: {
    width: Scaling.scale(40),
    height: Scaling.scale(40),
    backgroundColor: Colors.GRAY3,
    borderRadius: Scaling.scale(15),
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadow.LARGE,
  },
});
