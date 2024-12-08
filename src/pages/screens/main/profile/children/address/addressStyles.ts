import { Dimensions, Platform, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size; 
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const btnRadius= Platform.OS === 'ios' ? 30 : 20

const addressStyles = StyleSheet.create({
  location: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: '#2C2C2C',
  },
  locationBottom: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#919191',
  },
  savedAddress: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '700',
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

export default addressStyles;
