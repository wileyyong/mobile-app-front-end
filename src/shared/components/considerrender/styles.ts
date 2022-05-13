import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  purplebg: {
    flex: 1,
    paddingTop: 20,
  },
  input: {
    fontSize: 15,
    borderRadius: 16,
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'white',
    width: '100%',
  },
  topbar: {
    marginHorizontal: 10,
    // flexDirection: 'row',
    // alignItems: 'center',
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
  activity: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  bg: {
    flex: 1,
    backgroundColor: 'rgba(54, 37, 102, 1)',
    display: 'flex',
  },
  toplabel: {
    color: 'white',
    fontWeight: '900',
    transform: [{ scaleX: 1.5 }, { scaleY: 0.9 }],
    alignSelf: 'flex-start',
    marginBottom: 21,
    marginLeft: 40,
    marginTop: 21,
    fontSize: 24,
  },
  btns: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 12,
  },
  btn: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    flex: 1,
  },
  active: {
    borderWidth: 2,

    borderColor: 'white',
  },
  btncontainer: {},
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
    backgroundColor: 'rgba(248, 248, 248, 0.5)',
    right: 18,
    top: 20,
    borderRadius: 22,
    zIndex: 3,
  },
});

export default styles;
