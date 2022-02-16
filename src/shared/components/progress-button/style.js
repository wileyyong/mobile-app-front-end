import { BorderRadius, Scaling, Shadow } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: BorderRadius.XL,
    height: Scaling.scale(55),
    overflow: 'hidden',
    width: '100%',
    marginLeft: 15,
    ...Shadow.LARGE,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
