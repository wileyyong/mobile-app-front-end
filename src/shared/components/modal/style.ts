import { Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical:14
  },
  modalContainer: {},
  icon: {
    paddingBottom: 10,
  },
  modal: {
    backgroundColor: Colors.DARK_PURPLE,
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
    color: 'white',
    alignSelf: 'flex-start',
  },
  headerContainer: {
    marginTop: 24,
  },
});
