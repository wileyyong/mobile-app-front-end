import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(37, 23, 78, 1)',
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
    backgroundColor: 'rgba(223, 212, 255, 0.08)',
    padding: 14,
  },
  actionBtnTxt: {
    marginLeft: 8,
    color: 'rgba(248, 248, 248, 1)',
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
  trxTitle: {
    color: 'white',
    alignSelf: 'flex-start',
  },
  trxDescription: {
    color: 'rgba(255, 255, 255, 1)',
    alignSelf: 'flex-start',
    opacity: 0.6,
    marginTop: 2,
  },
  trxIconBg: {
    height: 33,
    width: 33,
    backgroundColor: 'rgba(223, 212, 255, 0.08)',
    borderRadius: 16.5,
  },
});
