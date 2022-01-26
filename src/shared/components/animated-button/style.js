import { BorderRadius, Scaling, Shadow } from '$theme';
import { StyleSheet } from 'react-native';
import { Colors } from '$theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    borderRadius: BorderRadius.XL,
    justifyContent: 'center',
    height: Scaling.scale(40),
    overflow: 'hidden',
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  progress: {
    borderRadius: BorderRadius.XL,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
