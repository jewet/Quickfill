import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const timelineModalStyles = StyleSheet.create({
  progressWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: -16,
  },
  trackWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 18,
    height: 36,
    backgroundColor: '#FFD66F',
    marginBottom: 20,
  },
  trackText: {
    fontSize: moderateScale(16),
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '600',
    color: '#000000',
  },
});

export default timelineModalStyles;
