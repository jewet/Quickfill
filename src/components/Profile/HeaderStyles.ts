import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const headerStyles = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    paddingVertical: scale(20),
    paddingHorizontal: scale(16),
    gap: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignContent: 'center',
  },
  singleContent: {
    justifyContent: 'center',
  },
  multipleContent: {
    justifyContent: 'space-between',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: verticalScale(20),
  },
  title: {
    fontSize: moderateScale(18),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(30),
    fontWeight: '500',
    color: '#2C2C2C',
    textAlign: 'center',
  },
  cartWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'relative',
  },
  countWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#FFB600',
    borderRadius: 50,
    height: 16,
    width: 16,
    right: -5,
    top: -2,
  },
  countText: {
    fontSize: moderateScale(11),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(30),
    fontWeight: '500',
    color: '#2C2C2C',
    textAlign: 'center',
    marginTop: -7,
  },
});

export default headerStyles;
