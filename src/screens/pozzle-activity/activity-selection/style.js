import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.SEVENTYPERCENTBLACK,
    height: '100%',
    paddingBottom: 0,
    marginBottom: 0,
    //alignSelf: 'baseline',
  },
  modalContent: {
    //backgroundColor: 'green',
    width: '100%',
    bottom: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
  modalActivityInputs: {
    // backgroundColor: 'blue',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    right: Scaling.scale(5),
    top: Scaling.scale(-15),
  },
  listHeader: {
    alignSelf: 'flex-start',
    fontSize: Scaling.scale(14),
    color: Colors.TWENTYPERCENTWHITE,
    left: Scaling.scale(5),
    top: Scaling.scale(5),
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
    width: 160,
    left: Scaling.scale(5),
  },
  itemLocation: {
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
  },
  itemPin: {
    alignItems: 'flex-start',
  },
  activityBtn: {
    fontSize: 14,
  },
  activityBtnContainer: {
    width: 100,
  },
  activitiesListView: {
    height: '70%',
    width: '100%',
    //backgroundColor: Colors.SEVENTYPERCENTBLACK,
  },
});
