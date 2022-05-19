import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Scaling.scale(10),
    marginRight: Scaling.scale(18),
  },
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
    //backgroundColor: 'yellow',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: Scaling.scale(50),
  },
  button: { alignItems: 'center', flexDirection: 'row' },
  optionsIcon: {
    marginRight: Scaling.scale(10),
    position: 'absolute',
    bottom: 80,
    right: 10,
    //backgroundColor: 'yellow',
    zIndex: 10,
  },
});
