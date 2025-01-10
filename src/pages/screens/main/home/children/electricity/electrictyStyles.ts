import { Dimensions, Platform, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size; // 375 is the base width
const verticalScale = (size: number) => (screenHeight / 812) * size; // 812 is the base height
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const electricityStyles = StyleSheet.create({
  electricityContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
    position: 'relative'
  },
  scrollview: {
    width: '100%',
    padding: scale(20),
    paddingBottom: verticalScale(100),
    backgroundColor: '#FAFAFA',
    display: 'flex',
  },
  electricityTop: {
    width: '100%',
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
    marginTop: verticalScale(10),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(17.64),
    fontWeight: '600',
    color: '#2C2C2C',
  },
});

export default electricityStyles;
