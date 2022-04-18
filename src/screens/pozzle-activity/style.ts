import { BorderRadius, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Scaling.scale(50),
    paddingBottom: Scaling.scale(20),
  },
  buttonImage: {
    height: Scaling.scale(20),
    marginRight: Scaling.scale(12),
    width: Scaling.scale(20),
  },
  container: {
    flex: 1,
  },
  image: {
    borderRadius: BorderRadius.LARGE,
    height: '100%',
    width: '100%',
  },
});
