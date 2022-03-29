import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  verbContainer: {
    height: 375,
    width: '100%',
    top: '115%',
    left: -25,
  },
  verbsView: {
    backgroundColor: Colors.SEVENTYPERCENTBLACK,
    width: '100%',
    alignSelf: 'flex-start',
  },
  verbsItem: {
    width: '100%',
    alignSelf: 'flex-start',
  },
  verbsArrowUp: {
    position: 'absolute',
    left: 0,
    bottom: '-80%',
  },
  verbsArrowDown: {
    left: 0,
    top: Scaling.scale(4),
  },
  verbHStack: {
    overflow: 'hidden',
    width: Scaling.scale(120),
    backgroundColor: 'red',
  },
  verbSelectedVerb: {
    fontSize: Scaling.scale(18),
    color: Colors.TWENTYPERCENTWHITE,
  },
  verbContainerBtn: {
    position: 'absolute',
    right: 15,
    bottom: '-80%',
  },
  verbBtn: {
    fontSize: Scaling.scale(14),
  },
  modalVerbsView: {
    width: '50%',
  },
});
