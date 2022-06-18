import { Colors, Scaling } from '$theme';

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  editView: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: Scaling.scale(20),
    borderTopRightRadius: Scaling.scale(20),
    height: Scaling.scale(485),
    paddingTop: Scaling.scale(20),
    paddingBottom: Scaling.scale(20),
    paddingHorizontal: Scaling.scale(20),
  },
  userSummaryData: {
    height: Scaling.scale(110),
    flex: 1,
    paddingHorizontal: Scaling.scale(10),
  },
  rowInfo: {
    paddingTop: Scaling.scale(17),
    height: Scaling.scale(70),
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Scaling.scale(20),
    paddingBottom: Scaling.scale(17),
  },
  passportContainer: {
    marginTop: 55,
  },
  passportInput: {
    fontSize: 11,
    height: 20,
    lineHeight: 20,
    padding: 0,
    textAlignVertical: 'bottom',
  },
  userSummary: {
    height: Scaling.scale(120),
  },
  userImage: {
    borderRadius: Scaling.scale(100),
  },
  ticketView: {
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_PURPLE,
  },
  labelInfo: {
    fontSize: Scaling.scale(14),
    textTransform:'uppercase',
    color: Colors.SEVENTYPERCENTPURPLE,
  },
  labelText: {
    fontSize: Scaling.scale(16),
    color: Colors.LIGHT_PURPLE,
  },
  dashedLine: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 1,
    width: '100%',
    position: 'absolute',
    bottom: Scaling.scale(8),
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
    bottom: Scaling.scale(-3),
  },
});
