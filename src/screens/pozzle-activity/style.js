import { BorderRadius, Scaling, Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Scaling.scale(28),
    paddingVertical: Scaling.scale(50),
  },
  buttonImage: {
    height: Scaling.scale(20),
    marginRight: Scaling.scale(12),
    width: Scaling.scale(20),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.YELLOW,
    height: '120%',
  },
  image: {
    borderRadius: BorderRadius.LARGE,
    height: '100%',
    width: '100%',
  },
});
