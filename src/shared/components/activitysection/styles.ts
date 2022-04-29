import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'white',
    marginLeft: 16,
    marginTop: 10,
    backgroundColor: 'transparent',
    textTransform: 'capitalize'
  },
  section: {
    width: '100%',
    paddingTop: 10,
    backgroundColor: 'transparent',

    fontWeight: 'bold',
  },
  number: {
    zIndex: -2,
    position: 'absolute',
    left: 10,
    top: -20,
    transform: [{ scaleX: 1.4 }, { scaleY: 0.7 }],
  },
  poz: {
    fontSize: 12,
    marginTop: 1,
    color: 'rgba(248,248,248,1)',
    display: 'flex',
  },
  poztrasluscent: {
    color: 'rgba(248,248,248,0.7)',
    marginHorizontal: 4,
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
  },
  scroll: {
    padding: 0,
 
  },
  icon: {
    color: 'rgba(248,248,248,1)',
  },
  holderView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 16,
  },
  container: {},
});

export default styles;
