import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const vendorStyles = StyleSheet.create({
  vendorWrapper: {
    width: '100%',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  vendorCont: {
    width: '100%',
    padding: verticalScale(10),
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    justifyContent: 'space-between',
    borderColor: '#A8A8A3',
    borderWidth: 1,
    borderRadius: 20,
  },
  name: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  status: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(10),
    fontWeight: '600',
    color: '#919191',
  },
  time: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(10),
    fontWeight: '600',
    color: '#A8A8A3',
  },
  amt: {
    color: '#2C2C2C',
    fontWeight: 700,
  },
  referralCode: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  referralText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(10),
    fontWeight: '600',
    color: '#919191',
  },
});

export default vendorStyles;
