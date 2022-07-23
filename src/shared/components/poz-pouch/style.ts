import { Colors } from '$theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DARK_PURPLE,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  fill: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    marginVertical: 21,
  },
  Vbalance: {
    marginTop: 24,
    marginBottom: 8,
  },
  title: {
    flex: 1,
    color: 'white',
    alignSelf: 'flex-start',
    fontFamily: 'HansonBold',
  },
  actionBtnsView: {
    marginTop: 50,
    marginHorizontal: 12,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: Colors.EIGHTHUNDREDTHSPURPLE,
    padding: 14,
  },
  actionBtnTxt: {
    marginLeft: 8,
    color: Colors.OFFWHITE,
  },
  icon: {
    marginHorizontal: 10,
  },
  list: {
    width: '100%',
    marginVertical: 18,
  },
  listContainer: { paddingBottom: 70 },
  listItemContainer: { marginTop: 24, paddingHorizontal: 16 },
  opacity05: { opacity: 0.5 },
  trxTitle: {
    color: Colors.WHITE,
    alignSelf: 'flex-start',
  },
  trxDescription: {
    color: Colors.WHITE,
    alignSelf: 'flex-start',
    opacity: 0.6,
    marginTop: 2,
  },
  trxIconBg: {
    height: 33,
    width: 33,
    backgroundColor: Colors.EIGHTHUNDREDTHSPURPLE,
    borderRadius: 16.5,
  },
});
