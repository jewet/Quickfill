import {Dimensions, StyleSheet} from 'react-native';
import {primaryColor} from '../../../../onboarding/splash/splashstyles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const referralStyles = StyleSheet.create({
  firstBox: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: 182,
    width: '100%',
    borderWidth: 1,
    borderColor: '#A8A8A3',
    marginTop: 20,
    borderRadius: 30,
    justifyContent: 'flex-end',
  },
  secondBox: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    borderWidth: 1,
    borderColor: '#A8A8A3',
    marginTop: 20,
    borderRadius: 30,
    justifyContent: 'flex-end',
    backgroundColor: '#F7F6F2',
    paddingVertical: 10,
    paddingHorizontal: 10,
    gap: 10,
  },
  thirdBox: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    borderWidth: 1,
    borderColor: '#A8A8A3',
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#F7F6F2',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  referralLink: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: primaryColor,
    padding: 16,
    justifyContent: 'space-between',
  },
  blurBg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#A8A8A3',
    opacity: 0.2,
    borderRadius: 30,
  },
  number: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: '#FFC533',
  },
  text: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#5E5E5E',
  },
  topText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#FFC533',
  },
  bottomText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: '#5E5E5E',
  },
  leftText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#2C2C2C',
  },
  rightText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#919191',
  },
});

export default referralStyles;
