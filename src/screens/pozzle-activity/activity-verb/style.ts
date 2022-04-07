import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  verbsView: {
    backgroundColor: Colors.SEVENTYPERCENTBLACK,
    width: '100%',
    alignSelf: 'flex-start',
  },
  verbsItem: {
    width: '100%',
    alignSelf: 'flex-start',
  },
  verbItemText: {
    fontSize: Scaling.scale(18),
    color: Colors.FIFTYPERCENTWHITE,
  },
  verbsArrowDown: {
    left: 0,
    top: Scaling.scale(4),
  },
  verbHStack: {
    overflow: 'hidden',
  },
  verbSelectedVerb: {
    fontSize: Scaling.scale(18),
    color: Colors.FIFTYPERCENTWHITE,
  },
  verbBtn: {
    fontSize: Scaling.scale(14),
    fontWeight: '600',
  },
});
