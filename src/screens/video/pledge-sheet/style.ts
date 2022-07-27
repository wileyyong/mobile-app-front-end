import { BorderRadius, Colors, FontFamily, Scaling } from '$theme';

import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    fontSize: Scaling.scale(18),
  },
  subheader: {},
  boxFlatlist: { flex: 1, justifyContent: 'space-between' },
  explainerContainer: {
    alignItems: 'center',
  },
  explainerTxt: {
    textAlign: 'center',
    paddingHorizontal: Scaling.scale(20),
  },
  walletContainer: {
    backgroundColor: Colors.GRAY3,
    borderRadius: Scaling.scale(12),
    padding: Scaling.scale(15),
    width: '100%',
  },
  pledgeBox: {
    zIndex: 1,
    opacity: 1,
    borderRadius: Scaling.scale(20),
    backgroundColor: Colors.EIGHTHUNDREDTHSPURPLE,
    height: Scaling.scale(100),
  },
  pozIcon: {
    height: Scaling.scale(32),
    width: 'auto',
    minWidth: Scaling.scale(32),
  },
  pozIcon2: {
    height: Scaling.scale(32),
    width: 'auto',
    minWidth: Scaling.scale(64),
  },
  pozIcon3: {
    height: Scaling.scale(32),
    width: 'auto',
    minWidth: Scaling.scale(98),
  },
  pozText: {
    fontSize: Scaling.scale(18),
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
  },
  customPozText: {
    color: Colors.OFFWHITE,
    margin: 0,
    padding: 0,
  },
  buttonText: {
    fontSize: Scaling.scale(18),
    fontWeight: '700',
  },
  walletBalanceText: {
    marginLeft: Scaling.scale(8),
  },
  touchableContainer: {
    width: '48.5%',
  },
  rainbowborder: {
    position: 'absolute',
    opacity: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Scaling.scale(20),
  },
  rainbowInner: {
    backgroundColor: Colors.DARK_PURPLE,
    height: '98.2%',
    width: '98.2%',
    borderRadius: Scaling.scale(20),
  },
  parentView: {
    height: '100%',
    width: '100%',
  },
});
