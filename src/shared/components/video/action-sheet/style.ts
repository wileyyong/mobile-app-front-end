import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
  },
  safeareview: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'yellow',
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.GRAY3,
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    flex: 1,
    flexDirection: 'row',
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
  },
  lastItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 100,
  },
});
