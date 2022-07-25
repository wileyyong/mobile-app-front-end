import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    paddingTop: Scaling.scale(30),
  },
  bottomSheetView: {
    paddingHorizontal: Scaling.scale(20),
    paddingVertical: Scaling.scale(20),
    flex:1,
  },
  modalLocation: { 
    borderRadius: Scaling.scale(20),
    overflow:'hidden', 
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: Colors.GRAY3,
    height: Scaling.scale(440),
    top:'20%',
    position:'absolute'
  }
});
