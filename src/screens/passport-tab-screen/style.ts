import { Colors, Scaling } from '$theme';

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
    borderRadius: Scaling.scale(20),
    borderWidth: Scaling.scale(5),
  },
  editViewBottom: {
    borderColor: '#CAA7D1',
    borderTopWidth: Scaling.scale(1),
    paddingVertical: Scaling.scale(32),
  },
  settingsModalContainer: {
    marginBottom: Scaling.scale(20),
  },
  settingsModal: {
     // backgroundColor: Colors.LIGHT_PURPLE
  },
  settingsText: {
    color: Colors.WHITE,
    fontSize: Scaling.scale(18),
    paddingLeft: Scaling.scale(8),
    fontWeight:'600'
  },
  settingsLogoutText: {
    color: Colors.ORANGE,
    fontSize: Scaling.scale(18),
    paddingLeft: Scaling.scale(8),
    fontWeight:'600'
  },
  settingsVersionText: {
    color: Colors.FIFTYPERCENTWHITE,
    fontSize: Scaling.scale(14), 
  },
  settingsVersionContainer: {
    paddingTop: Scaling.scale(40),
    fontWeight:'600'
  },
  settingsLogoutIconContainer: {
    backgroundColor: Colors.ORANGE, 
    borderRadius: Scaling.scale(50), 
    width: Scaling.scale(40), 
    height:Scaling.scale(40), 
    alignItems: 'center',  
    justifyContent: 'center'
  },
  settingsIconContainer: {
    backgroundColor: Colors.WHITE, 
    borderRadius: Scaling.scale(50), 
    width: Scaling.scale(40), 
    height:Scaling.scale(40), 
    alignItems: 'center',  
    justifyContent: 'center'
  },
  settingsHeader: {
    height: Scaling.scale(40),
    marginTop: Scaling.scale(25), 
    paddingHorizontal: Scaling.scale(18),
    marginBottom: Scaling.scale(25),
  },
  settingsIcon: { 
    height: Scaling.scale(40),
    width: Scaling.scale(35),
    marginTop: Scaling.scale(3),
    alignItems: 'center',   
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Scaling.scale(12),
    paddingHorizontal: Scaling.scale(18),
  },
  passportContainer: {
    marginHorizontal: Scaling.scale(15),
    marginTop: Scaling.scale(55),
  },
  passportInput: {
    fontSize: Scaling.scale(11),
    height: Scaling.scale(20),
    lineHeight: Scaling.scale(20),
    padding: Scaling.scale(0),
    textAlignVertical: 'bottom',
  },
  profileImage: {
    borderColor: '#CAA7D1',
    borderRadius: Scaling.scale(5),
    borderWidth: Scaling.scale(3),
  },
  profileInfo: {
    flex: 2,
    marginLeft: Scaling.scale(16),
  },
  profileInfotextArea: {
    borderColor: '#CAA7D1',
    borderRadius: Scaling.scale(5),
    borderStyle: 'dashed',
    borderWidth:Scaling.scale( 1),
  },
  textArea: {
    borderColor: '#CAA7D1',
    borderRadius: 5,
    borderStyle: 'dashed',
    borderWidth:Scaling.scale( 1),
    marginTop: Scaling.scale(16),
  },
  ticketView: {},
  headerText: {
    textTransform: 'uppercase',
    fontFamily: 'Hanson-Bold',
  }
});
