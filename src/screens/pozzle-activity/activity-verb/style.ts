import { BorderRadius, Colors, Padding, Scaling, Shadow } from '$theme';

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
    overflow: 'visible',
    ...Padding.HORIZONTAL_4X,
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
    flex: 1,
    flexDirection: 'row',
  },
  verbSelectedVerb: {
    fontSize: Scaling.scale(14),
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
    minWidth: Scaling.scale(116),
    flexDirection: 'row',
    height: Scaling.scale(25),
  },
  pressVerb: {
    flex: 1,
    flexDirection: 'row',
    height: 58,
  },
  leftArrowButton: {
    borderRadius: Scaling.scale(100),
    width: Scaling.scale(40),
    height: Scaling.scale(40),
    backgroundColor: Colors.LIGHT_PURPLE,
    ...Shadow.LARGE,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Scaling.scale(5),
  },
});
