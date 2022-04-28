import { Colors, Scaling, Shadow } from '$theme';

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Platform.OS === 'ios' ? Scaling.scale(20) : Scaling.scale(0),
    paddingBottom: 0,
    marginBottom: 0,
  },
  modalContent: {
    width: '100%',
    bottom: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
  modalActivityInputs: {
    flex: 1,
    flexDirection: 'row',
    minWidth: Scaling.scale(160),
    marginLeft: Scaling.scale(30),
    marginRight: Scaling.scale(20),
    height: Scaling.scale(25),
  },
  closeIcon: {
    alignSelf: 'flex-end',
    right: Scaling.scale(25),
    top: Platform.OS === 'ios' ? Scaling.scale(2) : Scaling.scale(-5),
    width: Scaling.scale(25),
    height: Scaling.scale(25),
  },
  listHeader: {
    alignSelf: 'flex-start',
    fontSize: Scaling.scale(14),
    color: Colors.FIFTYPERCENTWHITE,
    left: Scaling.scale(15),
    top: Platform.OS === 'ios' ? Scaling.scale(40) : Scaling.scale(30),
    height: Scaling.scale(35),
  },
  itemTitle: {
    width: '100%',
    textAlign: 'left',
    color: Colors.WHITE,
    fontSize: Scaling.scale(18),
    left: Scaling.scale(5),
  },
  pozzlesIcon: {
    fontSize: Scaling.scale(14),
    marginLeft: Scaling.scale(5),
    paddingRight: Scaling.scale(3),
    opacity: 1.0,
  },
  itemPozzles: {
    fontSize: Scaling.scale(14),
    color: Colors.EIGHTYPERCENTWHITE,
    left: Scaling.scale(5),
    paddingRight: Scaling.scale(10),
  },
  itemLocation: {
    alignItems: 'flex-end',
    fontSize: Scaling.scale(14),
    color: Colors.FIFTYPERCENTWHITE,
  },
  activityInput: {
    width: '90%',
    fontSize: Scaling.scale(14),
  },
  itemPin: {
    marginRight: Scaling.scale(5),
    top: Scaling.scale(5.5),
  },
  startNewActivity: {
    fontSize: Scaling.scale(14),
    fontWeight: '400',
    height: Scaling.scale(19),
    color: Colors.GRAY3,
    paddingLeft: Scaling.scale(8),
    opacity: 0.7,
    marginBottom: Scaling.scale(20),
  },
  activitiesListView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  activitiesListItem: {
    height: Scaling.scale(60),
    top: Scaling.scale(15),
    paddingBottom: Scaling.scale(15),
    left: Scaling.scale(10),
    alignItems: 'flex-start',
  },
  loading: {
    padding: Scaling.scale(15),
    fontSize: Scaling.scale(16),
    alignSelf: 'center',
  },
  clearInputIcon: {
    backgroundColor: Colors.GRAY3,
    borderRadius: Scaling.scale(50),
    padding: Scaling.scale(2),
    position: 'absolute',
    right: Scaling.scale(40),
  },
  checkmarkButton: {
    borderRadius: Scaling.scale(100),
    width: Scaling.scale(40),
    height: Scaling.scale(40),
    backgroundColor: Colors.LIGHT_PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadow.LARGE,
  },
  hstackContainer: {
    paddingBottom: Scaling.scale(25),
  },
});
