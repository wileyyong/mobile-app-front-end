import { BorderRadius, Colors, Scaling } from '$theme';

import { Platform, StyleSheet } from 'react-native';

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
    borderRadius: Scaling.scale(16),
    padding: Scaling.scale(14),
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
    width: Platform.OS === 'ios' ? Scaling.scale(185) : Scaling.scale(180),
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
    color: Colors.DARK_PURPLE,
    margin: 0,
    padding: 0,
  },
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
    marginHorizontal: Scaling.scale(5),
  },
  backgroundImage: {
    borderRadius: BorderRadius.XL,
    overflow: 'hidden',
    position: 'absolute',
    height: '105%',
    width: '103%',
    top: '-2.5%',
    left: '-1.5%',
  },
  parentView: {
    height: '100%',
    width: '100%',
  },
});
