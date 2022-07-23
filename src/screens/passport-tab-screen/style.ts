import { Colors, Scaling } from '$theme';

import { StyleSheet, Dimensions, Platform } from 'react-native';

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
  userImage: {
    borderRadius: Scaling.scale(100),
    backgroundColor: Colors.DARK_PURPLE
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
    paddingBottom:0
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
    height: Platform.OS === 'ios' ? Scaling.scale(40) : Scaling.scale(40),
    marginTop: Platform.OS === 'ios' ? Scaling.scale(68) :Scaling.scale(35), 
    paddingHorizontal: Scaling.scale(18),
    marginBottom: Platform.OS === 'ios' ? Scaling.scale(0) : Scaling.scale(17),
  },
  settingsIcon: { 
    height: Scaling.scale(40),
    width: Scaling.scale(35),
    alignItems: 'center', 
    right: Scaling.scale(15),
    bottom: Scaling.scale(8),
    position:'absolute'
  },
  editModalContainer: {
    borderTopLeftRadius: Scaling.scale(32),
    borderTopRightRadius: Scaling.scale(32),
    backgroundColor: Colors.GRAY3,
    flex:1
  },
  editSummary:{

  },
  editText: {
    color: Colors.DARK_PURPLE,
    fontSize: Scaling.scale(14),
    paddingLeft: Scaling.scale(8),
    fontWeight: '600',
    paddingBottom: Scaling.scale(8),
    textTransform: 'uppercase',
  },
  editPhotoText: {
    color: Colors.DARK_PURPLE,
    fontSize: Scaling.scale(14),
    fontWeight:'700',
    paddingTop: Scaling.scale(20),
    textTransform: 'uppercase',
  },
  editTextButton: {
    fontSize: Scaling.scale(18),
    fontWeight:'700',
  },
  editButtonContainer: {
    paddingTop: Scaling.scale(50), 
  },
  modalRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Scaling.scale(12),
    paddingHorizontal: Scaling.scale(18),
  },
  modalRowLinks: { 
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Scaling.scale(20),
    paddingHorizontal: Scaling.scale(18),
  },
  editModalRow: { 
    width:'100%',
    paddingTop: Scaling.scale(20),
    paddingHorizontal: Scaling.scale(18),
  },
  editInputContainer:{
    backgroundColor:'rgba(54, 37, 102, 0.1)'
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Scaling.scale(12),
    paddingHorizontal: Scaling.scale(18),
    marginTop: Scaling.scale(55),
  },
  passportContainer: {
    marginHorizontal: Scaling.scale(15),
    paddingHorizontal: Scaling.scale(20),
    paddingBottom: Scaling.scale(17),
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
    fontFamily: 'HansonBold',
  }
});

