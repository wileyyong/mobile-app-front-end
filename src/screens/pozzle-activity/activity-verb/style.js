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
  },
  verbsItem: {
    color: Colors.YELLOW,
    backgroundColor: Colors.YELLOW,
  },
});
