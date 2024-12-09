import { Dimensions, Platform, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size; 
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const btnRadius= Platform.OS === 'ios' ? 30 : 20

const favouritesStyles = StyleSheet.create({
    favouritesContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  scrollview: {
    width: '100%',
    paddingBottom: verticalScale(100),
    backgroundColor: '#F6F6F6',
    paddingTop: 30
  },
  name: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  username: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#5E5E5E',
  },
  bal: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#5E5E5E',
  },
  amt: {
      color: '#2C2C2C',
      fontWeight: 700
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

export default favouritesStyles;
