import { Colors, Scaling } from '$theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    //backgroundColor: Colors.SEVENTYPERCENTBLACK,
    paddingLeft: 47,
    paddingRight: 47,
    flex: 1,
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
    //backgroundColor: 'blue',
    height: Scaling.scale(100),
    width: Scaling.scale(100),
  },
  progress: {
    position: 'absolute',
    alignSelf: 'center',
    fontSize: Scaling.scale(18),
    top: Scaling.scale(35),
  },
  itemText: {
    fontWeight: '600',
    fontSize: Scaling.scale(18),
  },
  itemTotal: {
    marginTop: Scaling.scale(16),
    fontWeight: '700',
    fontSize: Scaling.scale(18),
  },
  itemIconTotal: {
    marginTop: Scaling.scale(16),
  },
  itemIcon: {
    width: Scaling.scale(18),
    height: Scaling.scale(18),
    right: 0,
  },
  polygonContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#5AD2F4',
    position: 'relative',
    bottom: 0,
  },
});
