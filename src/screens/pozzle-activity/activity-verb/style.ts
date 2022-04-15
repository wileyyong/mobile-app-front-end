import { BorderRadius, Colors, Padding, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  verbsView: {
    backgroundColor: Colors.SEVENTYPERCENTPURPLE,
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
    top: Scaling.scale(4),
    right: Scaling.scale(10),
  },
  verbHStack: {
    overflow: 'hidden',
  },
  verbSelectedVerb: {
    fontSize: Scaling.scale(18),
    color: Colors.FIFTYPERCENTWHITE,
    width: '30%',
    minWidth: Scaling.scale(80),
    ...Padding.HORIZONTAL_2X,
    ...Padding.VERTICAL_1X,
  },
  verbBtn: {
    fontSize: Scaling.scale(14),
    fontWeight: '600',
  },
  blurContainer: {
    height: 80,
    borderRadius: BorderRadius.XL,
    flexDirection: 'row',
    overflow: 'hidden',
    ...Padding.HORIZONTAL_4X,
    ...Padding.VERTICAL_1X,
  },
  modalActivityInputs: {
    width: '30%',
    minWidth: Scaling.scale(100),
    height: Scaling.scale(30),
  },
  pressVerb: {
    flex: 1,
    flexDirection: 'row',
    height: 58,
  },
});
