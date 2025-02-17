import {Dimensions, Platform, StyleSheet} from 'react-native';
import {primaryColor} from '../../../../../../../../onboarding/splash/splashstyles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const btnHeight = Platform.OS === 'ios' ? 100 : 70;
const btnWidth = Platform.OS === 'ios' ? '50%' : '60%';
const btnMarginTop = Platform.OS === 'ios' ? -30 : 0;
const btnMarginLeft = Platform.OS === 'ios' ? -10 : 0;
const btnContMarginLeft = Platform.OS === 'ios' ? 40 : 0;

const checkoutStyles = StyleSheet.create({
  checkoutContainer: {
    backgroundColor: '#FAFAFA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  flexCont: {
    borderTopWidth: 0.5,
    borderColor: '#E5E5EA',
    paddingVertical: 15,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  scrollview: {
    width: '100%',
    paddingBottom: verticalScale(100),
  },
  paymentText: {
    marginLeft: 16,
    color: '#5E5E5E',
    fontWeight: 700,
    fontSize: 17,
    marginTop: 30,
  },
  heading: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(17.64),
    fontWeight: '700',
    color: '#2C2C2C',
  },
  gasBottom: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(20),
  },
  input: {
    width: '100%',
    height: verticalScale(50),
    borderColor: primaryColor,
    borderWidth: 2,
    borderRadius: moderateScale(50),
    marginTop: verticalScale(10),
    padding: scale(10),
  },
  noteWrapper: {
    borderColor: '#DC5513',
    borderWidth: 2,
    borderRadius: moderateScale(10),
    backgroundColor: '#FEFBF4',
    padding: scale(10),
    marginTop: verticalScale(15),
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: verticalScale(60),
    width: '100%',
    paddingVertical: verticalScale(16),
    borderRadius: moderateScale(50),
    marginTop: verticalScale(30),
    paddingHorizontal: scale(20),
  },
  btnContent: {
    width: btnWidth,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: btnContMarginLeft,
  },
  btnText: {
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(20.16),
    fontWeight: '700',
    fontSize: moderateScale(16),
    textAlign: 'center',
    marginTop: btnMarginTop,
    marginLeft: btnMarginLeft,
  },
  selectedKgWrapper: {
    borderColor: primaryColor,
    borderWidth: 2,
    borderRadius: moderateScale(50),
    padding: scale(7),
    marginLeft: scale(20),
    marginTop: verticalScale(20),
    width: scale(80),
  },
  selectedKg: {
    fontSize: moderateScale(24),
    paddingTop: verticalScale(10),
  },
  gasSelectionWrapper: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: scale(10),
    width: scale(110),
    padding: scale(10),
    borderRadius: moderateScale(20),
    height: verticalScale(120),
    paddingTop: verticalScale(50),
    marginTop: verticalScale(50),
    borderWidth: 2,
  },
  gasCylinder: {
    position: 'absolute',
    top: verticalScale(-40),
  },
});

export default checkoutStyles;
