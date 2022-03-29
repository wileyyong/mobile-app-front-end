import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    height: '100%',
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
    //  backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    right: Scaling.scale(15),
    minWidth: Scaling.scale(200),
  },
  closeIcon: {
    alignSelf: 'flex-end',
    right: Scaling.scale(15),
    top: Scaling.scale(-5),
  },
  listHeader: {
    alignSelf: 'flex-start',
    fontSize: Scaling.scale(14),
    color: Colors.TWENTYPERCENTWHITE,
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
    //width: Scaling.scale(160),
    left: Scaling.scale(5),
    paddingRight: Scaling.scale(10),
  },
  itemLocation: {
    alignItems: 'flex-end',
    fontSize: Scaling.scale(14),
    color: Colors.TWENTYPERCENTWHITE,
  },
  activityInput: {
    fontSize: Scaling.scale(18),
    borderRadius: 0,
    opacity: 1.0,
    width: Scaling.scale(200),
    paddingRight: 5,
    paddingLeft: 5,
    marginLeft: 5,
    marginRight: 5,
    color: Colors.WHITE,
    alignSelf: 'flex-start',
  },
  itemPin: {
    marginRight: Scaling.scale(5),
    top: Scaling.scale(5.5),
  },
  activityBtn: {
    fontSize: Scaling.scale(14),
    alignSelf: 'flex-end',
  },
  activityBtnContainer: {
    width: 100,
  },
  activitiesListView: {
    height: '80%',
    width: '100%',
    //backgroundColor: Colors.SEVENTYPERCENTBLACK,
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
});
