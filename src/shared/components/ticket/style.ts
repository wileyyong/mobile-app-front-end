import { Colors } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bottomCurveBorder: {
    alignSelf: 'center',
    backgroundColor: Colors.DARK_PURPLE,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 15,
    width: 30,
    marginTop: 5,
  },
  lineatGradientBG: {
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    width: 350,
  },

  ticketContent: {
    backgroundColor: Colors.WHITE,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    height: 130,
    margin: 0,
    marginLeft: 18,
    marginTop: 2,
    width: '80%',
  },
  ticketContentInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ticketNumber: {
    height: 30,
    marginLeft: -30,
    marginTop: 50,
    transform: [{ rotate: '-90deg' }],
  },
  topCurveBorder: {
    alignSelf: 'center',
    backgroundColor: Colors.DARK_PURPLE,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: 15,
    marginTop: -5,
    width: 30,
  },
});
