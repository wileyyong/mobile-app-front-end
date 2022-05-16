import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  aboutContainer: {
    bottom: Scaling.scale(5),
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
    paddingBottom: Scaling.scale(4),
  },
  optionsIcon: {
    alignSelf: 'flex-end',
  },
});
