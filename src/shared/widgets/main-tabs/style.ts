import { Colors, BorderRadius, Shadow } from '$theme';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    bottom: 25,
    position: 'absolute',
    width: '100%',
  },
  containerPozzleActivity: {
    backgroundColor: Colors.WHITE,
    borderBottomLeftRadius: BorderRadius.LARGE,
    borderTopLeftRadius: BorderRadius.LARGE,
    bottom: 40,
    height: 55,
    position: 'absolute',
    right: 0,
    width: '5%',
    ...Shadow.LARGE,
  },
  tabContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default styles;
