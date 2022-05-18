import { BorderRadius, Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    fontWeight: '700',
    fontSize: 18,
  },
  subheader: {
    fontWeight: '700',
    fontSize: 18,
  },
  explainerContainer: {
    backgroundColor: Colors.GRAY2,
    borderRadius: 15,
    marginHorizontal: 5,
    padding: 15,
  },
  walletContainer: {
    backgroundColor: Colors.GRAY3,
    borderRadius: 12,
    padding: 15,
    width: '97%',
  },
  pledgeBox: {
    opacity: 0.5,
    borderRadius: 20,
    backgroundColor: Colors.GRAY3,
    width: 170,
    height: 100,
  },
  pozIcon: {
    height: 40,
    width: 40,
  },
  pozText: {
    fontSize: 18,
    fontWeight: '700',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
  },
  selectedPledge: {
    opacity: 1,
  },
  walletBalanceText: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 8,
  },
  touchableContainer: {
    marginBottom: 8,
    marginHorizontal: 8,
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
    top: Scaling.scale(0),
    right: Scaling.scale(5),
    width: Scaling.scale(25),
    height: Scaling.scale(25),
  },
});
