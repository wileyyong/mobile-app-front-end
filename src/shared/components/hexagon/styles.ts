import { StyleSheet } from 'react-native';
import { Colors } from '$theme';

const styles = StyleSheet.create({
  bg: {
    width: 130,
    height: 130,
    backgroundColor: Colors.TRANSPARENT,
  },
  hex: {
    margin: 0,
    height: 115,
    width: 115,
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
    width: 103,
    height: 116,
    padding: 10,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1,
    backgroundColor: Colors.FIFTYPERCENTWHITE,
  },
});
export default styles;
