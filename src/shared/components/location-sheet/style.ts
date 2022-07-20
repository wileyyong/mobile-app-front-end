import { Colors, Scaling } from '$theme';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    paddingTop: Scaling.scale(30),
  },
  bottomSheetView: {
    paddingHorizontal: Scaling.scale(20),
    paddingVertical: Scaling.scale(20),
  }
});
