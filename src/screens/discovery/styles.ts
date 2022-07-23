import { StyleSheet } from 'react-native';
import { Colors, Scaling } from '$theme';

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    borderRadius: 16,
    padding: 16,
    backgroundColor: Colors.TENPERCENTWHITE,
    color: 'white',
    width: '100%',
    borderColor: Colors.PURPLE,
    borderWidth: 0,
  },
  inputfocused: {
    fontSize: 15,
    borderRadius: 16,
    padding: 16,
    backgroundColor: Colors.TENPERCENTWHITE,
    color: 'white',
    width: '100%',
    borderColor: Colors.BORDERPURPLE,
    borderWidth: 1,
  },
  topbar: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: Colors.PURPLE,
  },
  bottombar: { 
    flex:1,
    backgroundColor: Colors.DARK_PURPLE,
  },
  caret: {
    marginTop: 13,
    width: 25,
    height: 25,
    transform: [{ scaleX: 1.0 }],
  },
  scroll: {
    flex: 1,
    paddingBottom: 3,
  },
  bg: {
    flex: 1,
    display: 'flex',
  },
  toplabel: {
    color: 'white',
    alignSelf: 'flex-start',
    marginBottom: 21,
    marginTop: 21,
    fontSize: 24,
    paddingHorizontal: 16,
    fontFamily: 'HansonBold',
  },
  btns: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 12,
  },
  btn: {
    backgroundColor: Colors.TENPERCENTWHITE,
    padding: 12,
    width: '44%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    flex: 1,
  },
  btnLeft: {
    backgroundColor: Colors.TENPERCENTWHITE,
    padding: 12,
    width: '44%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    flex: 1,
    borderWidth: 2,
    borderColor: Colors.TENPERCENTWHITE,
  },
  active: {
    borderColor: 'white',
  },
  btntext: {
    color: 'white',
    fontSize: 14,
  },
  clearbutton: {
    borderRadius: Scaling.scale(50),
    opacity: 0.7,
    position: 'absolute',
    right: Scaling.scale(12),
    zIndex:9999
  },
  topwrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  labelContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 25,
    width: '100%',
    backgroundColor: Colors.PURPLE,
    borderTopRightRadius: Scaling.scale(15),
    borderTopLeftRadius: Scaling.scale(15),
  },
});

export default styles;
