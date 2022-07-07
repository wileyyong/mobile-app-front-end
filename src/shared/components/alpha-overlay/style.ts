import { Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  overlay: {
    backgroundColor: Colors.SEVENTYPERCENTPURPLE, 
    position:'absolute',
    zIndex: 9999,
    width:'100%',
    height:'100%'
  }
});
