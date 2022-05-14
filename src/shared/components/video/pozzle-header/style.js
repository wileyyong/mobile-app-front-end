import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bodyText: {
    fontWeight: '400',
    fontSize: Scaling.scale(14),
  },
  bodyTextContainer: {
    flexDirection: 'row',
    paddingBottom: Scaling.scale(8),
  },
  bodyTextMargin: {
    paddingRight: Scaling.scale(12),
  },
  downArrow: {
    height: Scaling.scale(26),
    width: Scaling.scale(26),
    top: Scaling.scale(6),
  },
  headerText: {
    fontWeight: '600',
    fontSize: Scaling.scale(14),
  },
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
