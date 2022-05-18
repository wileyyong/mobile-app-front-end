import { StyleSheet } from 'react-native';
import { Colors } from '$theme';

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: 'white',
    marginLeft: 16,
    marginTop: 15,
    backgroundColor: Colors.TRANSPARENT,
    textTransform: 'capitalize'
  },
  section: {
    marginTop: 5,
    width: '100%',
    paddingTop: 10,
    backgroundColor: Colors.TRANSPARENT,
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
    color: Colors.EIGHTYPERCENTWHITE,
    display: 'flex',
  },
  poztrasluscent: {
    color: Colors.EIGHTYPERCENTWHITE,
    marginHorizontal: 4,
    fontSize:14
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
  },
  scroll: {
    paddingTop: 0,
  },
  icon: {
    color:Colors.OFFWHITE,
  },
  holderView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
    borderRadius: 120,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft:16
  },
});

export default styles;
