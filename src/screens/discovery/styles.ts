import { StyleSheet } from 'react-native';

console.log(process.env.API_TOKEN);
import { Colors } from '$theme';
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.PURPLE,
    width: '100%',
    height: '95%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  purplebg: {
    flex: 1,
    paddingTop: 20,
  },
  input: {
    fontSize: 15,
    borderRadius: 16,
    padding: 16,
    backgroundColor: Colors.TENPERCENTWHITE,
    color: 'white',
    width: '100%',
    borderColor: Colors.PURPLE,
    borderWidth: 1,
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
    marginHorizontal: 10,
    marginBottom: 10,
  },
  bottombar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
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
    marginHorizontal: 10,
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
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    flex: 1,
  },
  btnLeft: {
    backgroundColor: Colors.TENPERCENTWHITE,
    padding: 12,
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    flex: 1,
    marginRight: 8,
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
    position: 'absolute',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.FIFTYPERCENTWHITE,
    right: 18,
    borderRadius: 22,
    zIndex: 3,
  },
  topwrapper: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
  },
  labelContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 25,
    width: '100%',
  },
});

export default styles;
