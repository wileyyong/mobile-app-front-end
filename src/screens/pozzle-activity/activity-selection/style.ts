import { Colors, Scaling } from '$theme';

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    height: '100%',
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
    paddingRight: Scaling.scale(15),
    height: Scaling.scale(30),
  },
  closeIcon: {
    alignSelf: 'flex-end',
    right: Scaling.scale(25),
    top: Scaling.scale(-5),
    width: Scaling.scale(25),
    height: Scaling.scale(25),
  },
  listHeader: {
    alignSelf: 'flex-start',
    fontSize: Scaling.scale(14),
    color: Colors.FIFTYPERCENTWHITE,
    left: Scaling.scale(15),
    top: Scaling.scale(30),
    height: 35,
  },
  itemTitle: {
    width: '100%',
    textAlign: 'left',
    color: Colors.WHITE,
    fontSize: Scaling.scale(18),
    left: Scaling.scale(5),
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
    fontSize: Scaling.scale(18),
    borderRadius: 0,
    opacity: 1.0,
    width: Scaling.scale(200),
    height: Scaling.scale(40),
    paddingRight: 5,
    paddingLeft: 5,
    marginLeft: 5,
    marginRight: 5,
    color: Colors.WHITE,
    alignSelf: 'flex-start',
    flex: 1,
  },
  itemPin: {
    marginRight: Scaling.scale(5),
    top: Scaling.scale(5.5),
  },
  activityBtn: {
    fontSize: Scaling.scale(14),
    fontWeight: '600',
    height: Scaling.scale(18),
  },
  activitiesListView: {
    width: '100%',
    flex: 1,
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
    backgroundColor: Colors.THIRTYPERCENTBLACK,
    borderRadius: Scaling.scale(50),
    padding: Scaling.scale(2),
  },
});
