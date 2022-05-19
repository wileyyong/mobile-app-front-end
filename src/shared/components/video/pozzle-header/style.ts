import { Colors, Scaling, TextAlign } from '$theme';

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
  headerContainer: {
    marginBottom: Scaling.scale(2),
    textAlign: TextAlign.LEFT.unit,
    height: Scaling.scale(55),
    width: '100%',
    overflow: 'hidden',
  },
  location: {
    flex: 1,
    flexDirection: 'row',
  },
  pozzlesIcon: {
    marginRight: Scaling.scale(4),
  },
  pledgeIcon: {
    marginLeft: Scaling.scale(4),
    marginRight: Scaling.scale(3),
  },
  verbsArrowDown: {
    top: Scaling.scale(10),
    right: Scaling.scale(14),
    position: 'absolute',
    zIndex: 2,
  },
  downArrowIcon: {
    top: Scaling.scale(8),
    right: Scaling.scale(14),
  },
  maskedView: { flex: 1, height: 20 },
  childrenMaskedView: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
