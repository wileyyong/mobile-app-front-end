import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.SEVENTYPERCENTBLACK,
    height: '100%',
    padding: 20,
  },
  modalContent: {
    backgroundColor: 'green',
    width: '100%',
    height: '100%',
    textAlign: 'left',
    //alignItems: 'flex-end',
  },
  modalActivityInputs: {
    zIndex: 998,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    zIndex: 9,
    paddingTop: 35,
  },
});
