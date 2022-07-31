// import { BorderRadius, Scaling, Shadow } from '$theme';

import { StyleSheet } from 'react-native';
import { Colors, BorderRadius, Scaling, Shadow } from '$theme';

export default StyleSheet.create({
  outlinedContainer: {
    alignItems: 'center',
    borderRadius: BorderRadius.XL,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: Scaling.scale(12),
  },
  outlinedContent: {
    alignItems: 'center',
    borderRadius: BorderRadius.LARGE,
    justifyContent: 'center',
    padding: Scaling.scale(12),
    width: '99.7%',
  },
  solidButton: {
    alignItems: 'center',
    borderRadius: BorderRadius.XL,
    justifyContent: 'center',
    height: 59,
    padding: Scaling.scale(14),
  },
  iconButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE,
    width: 50,
    borderRadius: 16,
  },

  rainbowborder: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Scaling.scale(16),
  },
  rainbowInner: {
    backgroundColor: Colors.DARK_PURPLE,
    width: '99.2%',
    height: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Scaling.scale(16),
  },
});
