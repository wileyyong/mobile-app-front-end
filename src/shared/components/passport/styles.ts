import { StyleSheet } from 'react-native';
import { Colors, Scaling } from '$theme';
const styles = StyleSheet.create({
  
  passportContainer: {
  },
  modalContainer: {
    
    height: '100%',
    width: '100%',
  }, 
  ticketView: {
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_PURPLE,
  },
  videosView: {
    alignItems: 'center',
    height: Scaling.scale(380),
    backgroundColor: Colors.WHITE,
    paddingBottom: Scaling.scale(20),
    marginBottom: Scaling.scale(20),
    borderBottomLeftRadius: Scaling.scale(20),
    borderBottomRightRadius: Scaling.scale(20),
  },
  userSummary: {
    height: Scaling.scale(120),
  },  
  editView: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: Scaling.scale(20),
    borderTopRightRadius: Scaling.scale(20),
    height: Scaling.scale(485),
    paddingTop: Scaling.scale(20),
    paddingBottom: Scaling.scale(20),
    paddingHorizontal: Scaling.scale(20),
  },
  userImage: {
    borderRadius: Scaling.scale(100),
  },
  rowInfo: {
    paddingTop: Scaling.scale(17),
    height: Scaling.scale(70),
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  labelInfo: {
    fontSize: Scaling.scale(14),
    textTransform:'uppercase',
    color: Colors.SEVENTYPERCENTPURPLE,
  },
  labelText: {
    fontSize: Scaling.scale(16),
    color: Colors.LIGHT_PURPLE, 
  },
  headerText : { 
    textTransform: 'uppercase',
    fontFamily: 'Hanson-Bold',
   },
   userSummaryData: {
     height: Scaling.scale(110),
     flex: 1,
     paddingHorizontal: Scaling.scale(10),
     paddingTop: Scaling.scale(10),
   },
});

export default styles;
