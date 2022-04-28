import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bg: {
    width: 130,
    height: 130,
  },
  hex: {
    margin: 4,
    height: 130,
    width: 130,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});
export default styles;
