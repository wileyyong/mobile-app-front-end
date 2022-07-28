import { Colors, Scaling } from '$theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    paddingLeft: 47,
    paddingRight: 47,
    flex: 1,
  },
  type: {
    fontSize: Scaling.scale(14),
    fontWeight: 'normal',
    textAlign: 'center',
  },
  title: {
    fontSize: Scaling.scale(18),
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: Scaling.scale(6)
  },
  iconContainer: {
    alignSelf: 'center',
    height: Scaling.scale(100),
    width: Scaling.scale(100),
  },
  progress: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: Scaling.scale(18),
    top: Scaling.scale(36),
    fontWeight: '600'
  },
  itemText: {
    fontWeight: '600',
    fontSize: Scaling.scale(16),
  },
  itemTotal: {
    marginTop: Scaling.scale(16),
    fontWeight: '700',
    fontSize: Scaling.scale(16),
  },
  itemIcon: {
    width: Scaling.scale(24),
    height: Scaling.scale(24),
    right: 0,
    alignSelf: 'flex-end',
    marginLeft:Scaling.scale(7),
    marginRight:Scaling.scale(5)
  },
  polygonContainer: {
    width: 100,
    height: 100,
    position: 'relative',
    bottom: 0,
  },
});
