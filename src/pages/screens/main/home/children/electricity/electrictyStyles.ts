import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const electricityStyles = StyleSheet.create({
  electricityContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
    position: 'relative',
  },
  scrollview: {
    width: '100%',
    padding: scale(20),
    paddingBottom: verticalScale(100),
    backgroundColor: '#FAFAFA',
    display: 'flex',
  },
  electricityTop: {
    width: '100%',
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
    marginTop: verticalScale(10),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(17.64),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  savedText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#000000',
    marginBottom: verticalScale(10),
  },
  meterNo: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  address: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(10),
    fontWeight: '400',
    color: '#A8A8A3',
  },
  grayBox: {
    width: verticalScale(28),
    height: verticalScale(28),
    borderRadius: verticalScale(10),
    backgroundColor: '#D9D9D9',
  },
  previousWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: verticalScale(10),
    borderRadius: verticalScale(8),
    backgroundColor: '#EDEDED',
    padding: verticalScale(10),
  },
});

export default electricityStyles;
