import { Colors, Scaling } from "$theme";
import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
screen:{
  flex:1,
  display:"flex",
  justifyContent:"flex-end",
  backgroundColor: Colors.PURPLE, 
},
bottomSheetView: {
  backgroundColor: Colors.DARK_PURPLE,  
}, 
containerDiscovery:{  
  backgroundColor: Colors.PURPLE,
  flex:1,
  borderTopRightRadius: Scaling.scale(20),
  borderTopLeftRadius: Scaling.scale(20),
}
})

export default styles