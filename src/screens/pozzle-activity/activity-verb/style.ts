import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  verbContainer: {
    backgroundColor: Colors.SEVENTYPERCENTBLACK,
    width: '33%',
  },
  verbsView: {
    backgroundColor: Colors.SEVENTYPERCENTBLACK,
    width: '100%',
    alignSelf: 'flex-start',
  },
  verbsItem: {
    //paddingLeft: 15,
    width: '100%',
    //backgroundColor: 'black',
    alignSelf: 'flex-start',
  },
  verbsArrowUp: {
    position: 'absolute',
    left: 0,
  },
  verbsArrowDown: {
    left: 0,
    top: Scaling.scale(3),
  },
  verbHStack: {
    overflow: 'hidden',
    width: 120,
  },
  verbSelectedVerb: {
    fontSize: Scaling.scale(18),
    position: 'absolute',
    left: 30,
    color: Colors.TWENTYPERCENTWHITE,
  },
  verbContainerBtn: {
    backgroundColor: 'yellow',
  },
  verbBtn: {
    fontSize: 14,
  },
  modalVerbsView: {
    width: '50%',
  },
});
