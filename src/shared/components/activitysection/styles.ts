import { StyleSheet } from 'react-native';
import { Colors } from '$theme';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'white',
    marginLeft: 16,
    marginTop: 10,
    backgroundColor: Colors.TRANSPARENT,
    textTransform: 'capitalize',
  },
  section: {
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
    color: Colors.OFFWHITE,
    display: 'flex',
  },
  poztrasluscent: {
    color: Colors.SEVENTYPERCENTOFFWHITE,
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
    color: Colors.OFFWHITE,
  },
  holderView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 16,
  },
  container: {},
  innerext:{
    position: 'relative',
    top: -25,
    paddingLeft: 68,
  },

});

export default styles;
