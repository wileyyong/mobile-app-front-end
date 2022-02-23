import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  verbContainer: {
    backgroundColor: Colors.SEVENTYPERCENTBLACK,
    width: '33%',
  },
  verbsView: {
    width: '100%',
    position: 'absolute',
    zIndex: 999,
    backgroundColor: Colors.SEVENTYPERCENTBLACK,
    fontSize: 18,
  },
  verbsItem: {
    paddingLeft: 15,
    width: '90%',
  },
  verbsArrow: {
    position: 'absolute',
    left: 0,
  },
  verbHStack: {
    overflow: 'hidden',
    width: 90,
    textAlign: 'left',
  },
  verbSelectedVerb: {
    position: 'absolute',
    left: 30,
  },
});
