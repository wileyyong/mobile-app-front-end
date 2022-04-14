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
    left: 0,
    top: Scaling.scale(4),
  },
  verbHStack: {
    overflow: 'hidden',
    backgroundColor: 'green',
  },
  verbSelectedVerb: {
    fontSize: Scaling.scale(18),
    color: Colors.FIFTYPERCENTWHITE,
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
    flex: 1,
    paddingRight: Scaling.scale(15),
    height: Scaling.scale(30),
  },
});
