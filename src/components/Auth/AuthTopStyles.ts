import { Dimensions, StyleSheet } from "react-native";

// Get screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Scaling utility
const scale = (size: number) => (screenWidth / 375) * size; // 375 is the base width
const verticalScale = (size: number) => (screenHeight / 812) * size; // 812 is the base height
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const authTopStyles = StyleSheet.create({
  authTopContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: scale(20),
    gap: 10
  },
  homeTop: {
    display: 'flex',
    paddingVertical: verticalScale(30),
    paddingHorizontal: scale(10),
    borderBottomLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30),
    width: '100%',
    justifyContent: 'space-between',
    gap: verticalScale(20),
  },
  firstText: {
    fontSize: moderateScale(24),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(30),
    fontWeight: '600',
    color: '#2C2C2C',
    marginTop: 30,
    textAlign: 'center'
  },
  secondText: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(17.64),
    fontWeight: '400',
    color: '#2C2C2C',
    marginTop: verticalScale(2),
    textAlign: 'center'
  },
});

export default authTopStyles;
