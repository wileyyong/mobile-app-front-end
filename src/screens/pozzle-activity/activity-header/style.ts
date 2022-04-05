import { Colors, Scaling, TextAlign } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    paddingBottom: Scaling.scale(8),
    textAlign: TextAlign.LEFT.unit,
    height: Scaling.scale(55),
    width: '100%',
    overflow: 'hidden',
  },
  location: {
    flex: 1,
    flexDirection: 'row',
  },
  headerText: {
    paddingBottom: Scaling.scale(4),
  },
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginTop: Scaling.scale(5),
    marginLeft: Scaling.scale(8),
  },
  closeIcon: {
    right: Scaling.scale(30),
    top: Scaling.scale(55),
    position: 'absolute',
  },
});