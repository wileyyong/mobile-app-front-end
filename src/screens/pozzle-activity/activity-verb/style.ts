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
    overflow: 'visible',
    ...Padding.HORIZONTAL_4X,
  },
  verbItemText: {
    fontSize: Scaling.scale(14),
    lineHeight: Scaling.scale(19),
  },
  selectedItem: {
    fontSize: Scaling.scale(14),
    lineHeight: Scaling.scale(48),
  },
  verbsArrowDown: {
    top: Scaling.scale(2),
    right: Scaling.scale(4),
  },
  verbHStack: {
    flex: 1,
    flexDirection: 'row',
  },
  verbSelectedVerb: {
    fontSize: Scaling.scale(14),
    ...Padding.HORIZONTAL_2X,
    alignSelf: 'center',
  },
  verbBtn: {
    fontSize: Scaling.scale(14),
    fontWeight: '600',
  },
  blurContainer: {
    borderRadius: BorderRadius.XL,
    flexDirection: 'row',
    overflow: 'hidden',
    alignSelf: 'center',
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
    top: Scaling.scale(22),
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
