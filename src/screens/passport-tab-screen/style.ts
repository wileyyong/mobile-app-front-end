import { Colors, Scaling } from '$theme';

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Scaling.scale(20),
    paddingBottom: Scaling.scale(17),
    marginTop: Scaling.scale(55),
  },
  passportInput: {
    fontSize: 11,
    height: 20,
    lineHeight: 20,
    padding: 0,
    textAlignVertical: 'bottom',
  },
  dashedLine: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 1,
    width: '100%',
    position: 'absolute',
    bottom: Scaling.scale(8),
  },
  dashedLineNormalMiddle: {
    borderStyle: 'solid',
    borderWidth: 1.2,
    borderRadius: 1,
    width: '100%',
    position: 'absolute',
    bottom: Scaling.scale(5),
  },
  dashedLineHalf: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 1,
    width: '100%',
    position: 'absolute',
    bottom: Scaling.scale(28),
  },
  dashedLineMiddle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 1,
    width: '100%',
    position: 'absolute',
    bottom: Scaling.scale(0),
  },
  headerText : { 
    textTransform: 'uppercase',
    fontFamily: 'Hanson-Bold',
   }
});

