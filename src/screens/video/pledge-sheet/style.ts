import { BorderRadius, Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    fontWeight: '700',
    fontSize: Scaling.scale(18),
  },
  subheader: {
    fontWeight: '700',
    fontSize: Scaling.scale(18),
    opacity: 0.55,
  },
  explainerContainer: {
    backgroundColor: Colors.GRAY2,
    borderRadius: Scaling.scale(15),
    padding: Scaling.scale(10),
    textAlign: 'center',
  },
  walletContainer: {
    backgroundColor: Colors.GRAY3,
    borderRadius: Scaling.scale(12),
    padding: Scaling.scale(15),
    width: '100%',
  },
  pledgeBox: {
    opacity: 0.5,
    borderRadius: Scaling.scale(20),
    backgroundColor: Colors.GRAY3,
    width: Scaling.scale(170),
    height: Scaling.scale(100),
  },
  pozIcon: {
    height: Scaling.scale(32),
    width: 'auto',
    minWidth: Scaling.scale(32),
  },
  pozIcon2: {
    width: Scaling.scale(64),
  },
  pozIcon3: {
    width: Scaling.scale(98),
  },
  pozText: {
    fontSize: Scaling.scale(18),
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
  },
  customPozText: { color: Colors.DARK_PURPLE, margin: 0, padding: 0 },
  buttonText: {
    fontSize: Scaling.scale(18),
    fontWeight: '700',
  },
  selectedPledge: {
    opacity: 1,
  },
  walletBalanceText: {
    fontSize: Scaling.scale(14),
    fontWeight: '400',
    marginLeft: Scaling.scale(8),
  },
  touchableContainer: {
    marginBottom: Scaling.scale(8),
    marginHorizontal: Scaling.scale(8),
  },
  backgroundImage: {
    borderRadius: BorderRadius.XL,
    overflow: 'hidden',
    position: 'absolute',
    height: '103%',
    width: '103%',
    left: '-1.5%',
    top: '-1.5%',
  },
  closeIcon: {
    position: 'absolute',
    top: Scaling.scale(-40),
    right: Scaling.scale(5),
    width: Scaling.scale(25),
    height: Scaling.scale(25),
    backgroundColor: 'yellow',
    zIndex: 9999999,
  },
  parentView: {
    height: '100%',
    width: '100%',
  },
});
