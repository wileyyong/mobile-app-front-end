import { Colors } from '$theme';

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    justifyContent: 'center',
  },

  editView: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.LIGHT_PURPLE,
    borderRadius: 20,
    borderWidth: 5,

    // marginHorizontal: 27,
  },

  editViewBottom: {
    borderColor: '#CAA7D1',
    borderTopWidth: 1,

    paddingVertical: 32,
  },

  explainer: {
    // margin: 10,
    // padding: 15,
    // width: '100%',
    marginBottom: 20,
  },

  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  passportContainer: {
    marginHorizontal: 15,
    marginTop: 55,
  },
  profileImage: {
    borderColor: '#CAA7D1',
    borderRadius: 5,
    borderWidth: 3,
    // flex:1
  },

  profileInfo: {
    flex: 2,
    marginLeft: 16,
  },
  profileInfotextArea: {
    borderColor: '#CAA7D1',
    borderRadius: 5,
    borderStyle: 'dashed',
    borderWidth: 1,
  },

  textArea: {
    borderColor: '#CAA7D1',
    borderRadius: 5,
    borderStyle: 'dashed',
    borderWidth: 1,

    marginTop: 16,
  },

  ticket: {
    // height: 120,
  },
  ticketView: {},

  modalRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
