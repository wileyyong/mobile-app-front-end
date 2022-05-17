import { Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    marginVertical: 20,
  },
  explainer: {
    backgroundColor: Colors.GRAY2,
    borderRadius: 15,
    marginHorizontal: 5,
    padding: 15,
  },
  li: {
    padding: 5,
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
    fontWeight: '600',
  },
  selectedPledge: { borderColor: 'yellow', borderWidth: 1, opacity: 1 },
});
