import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bodyText: {
    color: Colors.WHITE,
  },
  bodyTextContainer: {
    flexDirection: 'row',
    paddingBottom: Scaling.scale(8),
  },
  bodyTextMargin: {
    paddingRight: Scaling.scale(12),
  },
  downArrow: {
    height: Scaling.scale(28),
    width: Scaling.scale(20),
  },
  headerText: {
    color: Colors.WHITE,
    paddingBottom: Scaling.scale(4),
  },
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
