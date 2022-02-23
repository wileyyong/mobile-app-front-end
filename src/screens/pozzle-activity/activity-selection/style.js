import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.SEVENTYPERCENTBLACK,
    height: '100%',
    // padding: 20,
  },
  modalContent: {
    backgroundColor: 'green',
    width: '100%',
    height: '100%',
    textAlign: 'left',
    //alignItems: 'flex-end',
  },
  modalActivityInputs: {
    // backgroundColor: 'blue',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    paddingRight: 15,
    paddingTop: 60,
  },
  activityInput: {
    width: '100%',
  },
  activityInputContainer: {
    borderRadius: 0,
    opacity: 1.0,
    width: 240,
    paddingRight: 5,
    paddingLeft: 5,
    marginLeft: 5,
    marginRight: 5,
    borderBottomWidth: 1,
    borderColor: Colors.WHITE,
  },
  activityBtn: {
    fontSize: 14,
  },
});
