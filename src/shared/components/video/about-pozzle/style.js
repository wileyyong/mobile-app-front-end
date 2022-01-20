import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  aboutContainer: {
    bottom: 0,
    paddingHorizontal: Scaling.scale(12),
    paddingVertical: Scaling.scale(20),
    position: 'absolute',
    width: '100%',
  },
  addedByContainer: {
    flexDirection: 'row',
  },
  addedByImage: {
    borderRadius: 40,
    height: Scaling.scale(40),
    marginRight: 12,
    width: Scaling.scale(40),
  },
  headerText: {
    color: Colors.WHITE,
    paddingBottom: Scaling.scale(4),
  },
});
