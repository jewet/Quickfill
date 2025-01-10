import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const btnRadius = Platform.OS === 'ios' ? 30 : 20;

const fundWalletStyles = StyleSheet.create({
  fundWalletContainer: {
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1, 
    borderColor: '#5E5E5E',
    justifyContent: 'space-between',
    height: 48,
    marginBottom: 10
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
    backgroundColor: '#F2F2F7'
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
  },
  naira: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: '#919191',
    lineHeight: moderateScale(24),
  },
  input: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: '#2C2C2C',
    lineHeight: moderateScale(24),
  },
});

export default fundWalletStyles;
