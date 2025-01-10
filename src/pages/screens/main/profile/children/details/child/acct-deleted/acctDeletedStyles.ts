import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const btnRadius = Platform.OS === 'ios' ? 30 : 20;

const acctDeletedStyles = StyleSheet.create({
  sorryWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  scrollview: {
    width: '100%',
    paddingBottom: verticalScale(100),
    backgroundColor: '#F6F6F6',
    paddingTop: 30,
  },
  sorryText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#FFFFFF',
    position: 'absolute',
    marginTop: '10%',
  },
  noteWrapper: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginTop: '10%',
    padding: verticalScale(10),
  },
  note: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: '#000000',
  },
  boldText: {
    fontWeight: '700',
  },
  redText: {
    color: '#DC5513',
  },
  bal: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#5E5E5E',
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

export default acctDeletedStyles;
