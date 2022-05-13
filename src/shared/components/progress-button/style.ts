import { BorderRadius, Colors, Scaling, Shadow } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: BorderRadius.XL,
    height: Scaling.scale(50),
    marginLeft: Scaling.scale(20),
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
