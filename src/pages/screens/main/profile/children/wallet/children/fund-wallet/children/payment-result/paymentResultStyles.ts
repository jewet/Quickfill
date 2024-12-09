import {Dimensions, Platform, StyleSheet} from 'react-native';
import { primaryColor } from '../../../../../../../../onboarding/splash/splashstyles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const btnRadius = Platform.OS === 'ios' ? 30 : 20;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const paymentResultStyles = StyleSheet.create({
  paymentResultContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    gap: 20
  },
  nairaWrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#5E5E5E',
    justifyContent: 'center',
    padding: 10,
    height: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#F2F2F7',
  },
  linearBg: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 30,
    justifyContent: 'center',
  },
  scrollview: {
    width: '100%',
    paddingBottom: verticalScale(100),
    backgroundColor: '#F6F6F6',
    flex: 1,
  },
  firstText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: '#2C2C2C',
    textAlign: 'center'
  },
  secondText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(24),
    fontWeight: '600',
    color: '#2C2C2C',
    textAlign: 'center'
  },
  thirdText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: '#5E5E5E',
    textAlign: 'center',
    width: 196
  },
  btnWrapper: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: primaryColor,
    borderRadius: 30,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  btnText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#2C2C2C',
    textAlign: 'center'
  },
});

export default paymentResultStyles;
