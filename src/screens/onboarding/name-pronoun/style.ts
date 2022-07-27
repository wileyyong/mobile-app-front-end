import { StyleSheet } from 'react-native';
import { Colors } from '$theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: 20,
  },
  title: {
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  InputContainer: {
    backgroundColor: Colors.VERYLIGHTPURPLE,
  },
  arrowLeft: {
    position: 'absolute',
    top: '7%',
    left: 20,
  },
});
