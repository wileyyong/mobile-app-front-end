import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 20,
  },
  wordContainer: {
    width: '40%',
    marginTop: 10,
    flexDirection: 'row',
  },
  word: {
    marginRight: 10,
    width: '20%',
    fontWeight: 'bold',
  },
  content: {
    marginHorizontal: 20,
  },
  text: {
    textAlign: 'center',
  },
});
