import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size; 
const verticalScale = (size: number) => (screenHeight / 812) * size;  
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const modalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        width: width,
        height: height, 
        paddingHorizontal: 20, 
        gap: 10, 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        zIndex: 1000, 
      },
      modalBg: {
        opacity: 0.4,
        backgroundColor: '#031A09', 
        position: 'absolute',
        width: width,
        height: height
      },
      modalCont: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderRadius: 30,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 20,
      },
  topText: {
    fontSize: moderateScale(16),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(30),
    fontWeight: '600',
    color: '#2C2C2C',
    textAlign: 'center'
  },
  bottomText: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(17.64),
    fontWeight: '400',
    color: '#2C2C2C',
    marginTop: verticalScale(2),
    textAlign: 'center'
  },
});

export default modalStyles;
