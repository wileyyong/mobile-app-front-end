import { Colors, Scaling } from '$theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.SEVENTYPERCENTBLACK,
    height: '100%',
    paddingLeft: 47,
    paddingRight: 47,
  },
  type: {
    fontSize: Scaling.scale(18),
    fontWeight: 'normal',
    textAlign: 'center',
  },
  title: {
    fontSize: Scaling.scale(18),
    fontWeight: '700',
    textAlign: 'center',
  },
  iconContainer: {
    alignSelf: 'center',
  },
  progress: {
    position: 'absolute',
    alignSelf: 'center',
    color: 'black',
    fontSize: Scaling.scale(18),
    top: Scaling.scale(35),
  },
  itemText: {
    fontWeight: '600',
    fontSize: Scaling.scale(18),
  },
  itemTotal: {
    fontWeight: '700',
    fontSize: Scaling.scale(18),
  },
  itemIcon: {
    width: Scaling.scale(18),
    height: Scaling.scale(18),
    right: 0,
  },
});
