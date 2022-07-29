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
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileContainer: {
    backgroundColor: Colors.VERYLIGHTPURPLE,
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  arrowLeft: {
    position: 'absolute',
    top: '7%',
    left: 20,
  },
});
