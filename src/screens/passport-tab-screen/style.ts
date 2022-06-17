import { Colors, Scaling } from '$theme';

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  editView: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: Scaling.scale(20),
    borderTopRightRadius: Scaling.scale(20),
    height: Scaling.scale(485)
  },

  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10,
    width,
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
  ticketView: {
    backgroundColor: Colors.LIGHT_PURPLE
  },
});
