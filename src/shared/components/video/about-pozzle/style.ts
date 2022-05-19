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
    top: Scaling.scale(16),
  },
  hStackContainer: { width: '100%' },
  vStackContainer: { height: Scaling.scale(42) },
  optsContainer: {
    backgroundColor: Colors.TRANSPARENT,
    borderRadius: Scaling.scale(20),
    marginBottom: Scaling.scale(20),
  },
  optsText: {
    fontSize: Scaling.scale(14),
    fontWeight: '600',
    color: Colors.DARK_PURPLE,
  },
});
