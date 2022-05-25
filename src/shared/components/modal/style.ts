import { Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 20,
  },
  modalContainer: {},
  icon: {
    paddingBottom: 20,
  },
  modal: {
    backgroundColor: Colors.GRAY1,
  },
  title: {
    padding: 15,
  },
  xButton: {
    padding: 20,
    paddingBottom: 0,
  },
  xButtonPledge: {
    position: 'absolute',
    top: 35,
    right: 20,
    width: 30,
    height: 30,
    alignSelf: 'flex-start',
  },
  headerContainer: {
    height: 60,
  },
});
