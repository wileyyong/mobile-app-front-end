import { StyleSheet } from 'react-native';
import { Colors } from '$theme';
import { Color } from 'three';

const styles = StyleSheet.create({
  bg: {
    width: 130,
    height: 130,
    backgroundColor: Colors.TRANSPARENT,
  },
  hex: {
    margin: 4,
    height: 130,
    width: 130,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.TRANSPARENT,
  },
  polygon: {
    width: 120,
    height: 130,
    padding: 10,
    resizeMode: 'stretch',
    position: 'absolute',
  },
  image: {
    width: 102,
    height: 120,
    padding: 10,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1,
    backgroundColor:Colors.FIFTYPERCENTWHITE

  },
});
export default styles;
