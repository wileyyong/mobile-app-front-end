import { BorderRadius, Scaling, Shadow } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: BorderRadius.XL,
    height: Scaling.scale(50),
    marginLeft: Scaling.scale(35),
    overflow: 'hidden',
    width: '90%',
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
