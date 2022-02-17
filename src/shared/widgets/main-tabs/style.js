import { Colors, BorderRadius, Shadow } from '$theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    bottom: 25,
    position: 'absolute',
    width: '100%',
  },
  containerPozzleActivity: {
    right: 0,
    bottom: 40,
    position: 'absolute',
    width: '5%',
    height: 55,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: BorderRadius.LARGE,
    borderBottomLeftRadius: BorderRadius.LARGE,
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
});

export default styles;
