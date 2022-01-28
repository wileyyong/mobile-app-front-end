import { BorderRadius, Colors, Shadow, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  cameraContainer: {
    flex: 1,
    marginBottom: Scaling.scale(12),
    ...Shadow.MEDIUM,
  },
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
});
