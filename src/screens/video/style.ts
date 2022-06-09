import { Colors, Scaling } from '$theme';

import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Scaling.scale(10),
    marginRight: Scaling.scale(16),
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
    paddingBottom: Platform.OS === 'ios' ? Scaling.scale(5) : Scaling.scale(0),
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: Scaling.scale(50),
  },
  buttonIcon: { marginRight: Scaling.scale(10) },
  optionsIcon: {
    marginRight: Scaling.scale(10),
    position: 'absolute',
    bottom: 80,
    right: 10,
    zIndex: 10,
  },
  verbsArrowDown: {
    top: Scaling.scale(10),
    right: Scaling.scale(14),
    position: 'absolute',
    zIndex: 2,
  },
  downArrowIcon: {
    top: Scaling.scale(4),
    right: Scaling.scale(14),
  },
});
