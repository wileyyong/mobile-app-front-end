import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  aboutContainer: {
    bottom: Scaling.scale(15),
    paddingHorizontal: Scaling.scale(12),
    position: 'absolute',
    width: '100%',
    // backgroundColor: 'yellow',
  },
  addedByContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addedByImage: {
    borderRadius: 40,
    height: Scaling.scale(40),
    marginRight: 12,
    width: Scaling.scale(40),
  },
  headerText: {
    color: Colors.WHITE,
  },
  inpiredBy: { marginLeft: Scaling.scale(3) },
  optionsIcon: {
    marginRight: Scaling.scale(8),
  },
  hStackContainer: { width: '100%' },
  vStackContainer: { height: Scaling.scale(42) },
});
