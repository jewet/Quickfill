import {Dimensions, Platform, StyleSheet} from 'react-native';
import {primaryColor} from '../../../../../../../onboarding/splash/splashstyles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size; // 375 is the base width
const verticalScale = (size: number) => (screenHeight / 812) * size; // 812 is the base height
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const historyDetailsStyles = StyleSheet.create({
  historyWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    width: '100%',
    marginTop: verticalScale(10),
    paddingBottom: verticalScale(100),
  },
  historyCont: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 5,
    width: '100%',
    marginTop: verticalScale(10),
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#A8A8A3',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  addressWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  details: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  title: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: '#919191',
  },
  btn: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  transparentBtn: {
    width: '100%',
    borderRadius: 30,
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    borderWidth: 1,
    borderColor: primaryColor,
    marginTop: verticalScale(20),
    marginBottom: verticalScale(50),
  },
});

export default historyDetailsStyles;
