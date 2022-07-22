import { StyleSheet } from 'react-native';
import { Colors, Scaling } from '$theme';
const styles = StyleSheet.create({
  activity: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  scroll: {
    paddingBottom: 3,
  },
  containerDiscovery:{  
    backgroundColor: Colors.PURPLE,
    flex:1,
    borderTopRightRadius: Scaling.scale(20),
    borderTopLeftRadius: Scaling.scale(20),
  }
});

export default styles;
