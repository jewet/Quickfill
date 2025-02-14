import { Dimensions, StyleSheet } from "react-native";
import { primaryColor } from "../../onboarding/splash/splashstyles";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const scale = (size: number) => (screenWidth / 375) * size; 
export const verticalScale = (size: number) => (screenHeight / 812) * size; 
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const height = Dimensions.get('window').height;

const accessoriesStyles = StyleSheet.create({
    accessoriesContainer: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: height
    },
    scrollview: {
        width: '100%',
        backgroundColor: '#F6F6F6',
        paddingBottom: 100,
    },
    accessoriesItemsWrapper: {
        display: 'flex',
        gap: 15,
        marginTop: 20,
        width: '100%',
        paddingBottom: 300
    },
    accessoriesItems: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: verticalScale(15),
        paddingRight: verticalScale(30),
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: '#A8A8A3'
    },
    accessoriesText: {
        fontSize: moderateScale(32),
        fontFamily: 'Plus Jakarta Sans',
        lineHeight: moderateScale(32),
        fontWeight: '600',
        color: primaryColor,
        marginTop: 20
    },
    topText: {
        fontSize: moderateScale(20),
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '600',
        color: '#2C2C2C',
    },
    bottomText: {
        fontSize: moderateScale(12),
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '500',
        color: '#919191',
        marginTop: 5
    },
})

export default accessoriesStyles;