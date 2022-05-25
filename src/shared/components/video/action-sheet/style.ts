import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
  },
  safeareview: {
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.GRAY3,
    width: '100%',
    height: 50,
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  text: {
    fontSize: 16,
    color: '#25174E',
    textAlignVertical: 'center',
    justifyContent: 'flex-start',
    fontWeight: '600',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 32,
    justifyContent: 'center',
  },
  optsContainer: {
    backgroundColor: Colors.TRANSPARENT,
    borderRadius: Scaling.scale(20),
    marginBottom: Scaling.scale(20),
  },
  previouLast: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 5,
    top: -1,
  },
  lastItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 5,
  },
});
