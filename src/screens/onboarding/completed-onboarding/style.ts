import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: 20,
  },
  title: {
    fontFamily: 'HansonBold',
    textAlign: 'left',
    marginLeft: -20,
    textTransform: 'uppercase',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileContainer: {
    backgroundColor: 'rgba(223, 212, 255, 0.08)',
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
