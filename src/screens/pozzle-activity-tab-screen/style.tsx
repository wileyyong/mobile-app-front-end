import { BorderRadius, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Scaling.scale(28),
    paddingVertical: Scaling.scale(50),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Scaling.scale(28),
  },
  buttonImage: {
    height: Scaling.scale(20),
    marginRight: Scaling.scale(12),
    width: Scaling.scale(20),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    borderRadius: BorderRadius.LARGE,
    height: '100%',
    width: '100%',
  },
});
