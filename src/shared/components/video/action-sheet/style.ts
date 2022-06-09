import { Colors, Scaling } from '$theme';

import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: Platform.OS === 'ios' ? Scaling.scale(30) : Scaling.scale(15),
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
    marginRight: Scaling.scale(10),
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
