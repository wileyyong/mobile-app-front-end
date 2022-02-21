import { BorderRadius, Scaling, Shadow } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: BorderRadius.XL,
    height: Scaling.scale(55),
    marginLeft: 15,
    overflow: 'hidden',
    width: '100%',
    ...Shadow.LARGE,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'absolute',
  },
});
