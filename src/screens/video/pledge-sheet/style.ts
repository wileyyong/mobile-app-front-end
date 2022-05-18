import { Colors } from '$theme';

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
    marginBottom: 8,
    marginHorizontal: 8,
  },
  pozIcon: {
    height: 30,
    width: 30,
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
    borderColor: 'yellow',
    borderWidth: 1,
    opacity: 1,
  },
  walletBalanceText: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 17,
  },
});
