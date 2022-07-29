import { StyleSheet } from 'react-native';
import { Colors, Scaling } from '$theme';
const styles = StyleSheet.create({
  modalContainer: {
    height: '100%',
    width: '100%',
  },
  ticketView: {
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_PURPLE,
  },
  videosView: {
    alignItems: 'center',
    height: Scaling.scale(380),
    backgroundColor: Colors.GRAY3,
    paddingBottom: Scaling.scale(20),
    marginBottom: Scaling.scale(150),
    borderBottomLeftRadius: Scaling.scale(20),
    borderBottomRightRadius: Scaling.scale(20),
  },
  userSummary: {
    height: Scaling.scale(120),
  },
  editView: {
    backgroundColor: Colors.GRAY3,
    borderTopLeftRadius: Scaling.scale(32),
    borderTopRightRadius: Scaling.scale(32),
    paddingBottom: Scaling.scale(20),
    paddingHorizontal: Scaling.scale(20),
  },
  userImage: {
    borderRadius: Scaling.scale(100),
  },
  rowBio: {
    height: Scaling.scale(96),
  },
  rowInfo: {
    paddingTop: Scaling.scale(17),
    height: Scaling.scale(70),
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
  labelInfo: {
    fontSize: Scaling.scale(14),
    textTransform: 'uppercase',
    color: Colors.SEVENTYPERCENTPURPLE,
  },
  labelText: {
    fontSize: Scaling.scale(16),
    color: Colors.LIGHT_PURPLE,
    fontWeight: '600',
  },
  headerText: {
    textTransform: 'uppercase',
    paddingVertical: Scaling.scale(17),
  },
  userSummaryData: {
    height: Scaling.scale(110),
    flex: 1,
    paddingRight: Scaling.scale(10),
    paddingLeft: Scaling.scale(20),
    paddingTop: Scaling.scale(10),
  },
  dashedLine: {
    height: 2,
    width: '100%',
    position: 'absolute',
    top: Scaling.scale(42),
    zIndex: 100,
    overflow: 'visible',
  },
  dashedLineNormalMiddle: {
    height: 2.5,
    width: '100%',
    position: 'absolute',
    bottom: Scaling.scale(5),
    zIndex: 100,
    overflow: 'visible',
  },
  dashedLineHalf: {
    height: 2,
    width: '100%',
    position: 'absolute',
    bottom: Scaling.scale(28),
    zIndex: 100,
    overflow: 'visible',
  },
  dashedLineMiddle: {
    width: '100%',
    position: 'absolute',
    height: 2,
    top: Scaling.scale(22),
    zIndex: 100,
    overflow: 'visible',
  },
  dashedLineBio: {
    width: '100%',
    position: 'absolute',
    height: 2,
    bottom: 0,
    zIndex: 100,
    overflow: 'visible',
  },
});

export default styles;
