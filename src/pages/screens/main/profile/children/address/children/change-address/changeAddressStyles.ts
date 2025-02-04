import { Dimensions, Platform, StyleSheet } from "react-native";
import { primaryColor } from "../../../../../../onboarding/splash/splashstyles";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const changeAddressStyles = StyleSheet.create({
   mapCont: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
   },
   editCont: {
    position: 'absolute',
    bottom: 20,
    padding: 10, 
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: 20,
    borderWidth: 1, 
    borderColor: primaryColor
   },
  edit: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
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

export default changeAddressStyles;
