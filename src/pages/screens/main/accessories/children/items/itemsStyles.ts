import { Dimensions, StyleSheet } from "react-native";
import { primaryColor } from "../../../../onboarding/splash/splashstyles";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size; 
const verticalScale = (size: number) => (screenHeight / 812) * size; 
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const itemsStyles = StyleSheet.create({
    itemsContainer: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        width: width,
        height: height
    },
    topScrollView: {
        width: '100%',
        paddingBottom: 20,
        paddingHorizontal: 16,
    },
    topScrollViewCont: {
        width: '100%',
        display: 'flex',
        gap: 10,
        flexDirection: 'row'
    },
    scrollview: {
        width: '100%',
        backgroundColor: '#F6F6F6',
        paddingBottom: 50,
    },
    itemsCont:  {
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderColor: '#A8A8A3',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        marginBottom: 20,
        paddingVertical: 10,
        height: 130
      },
    searchOption: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: primaryColor,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        padding: 10,
        paddingHorizontal: 16,
        height: 48
    },
    accessoriesItems: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: verticalScale(15),
        paddingRight: verticalScale(30),
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: '#A8A8A3',
    },
    searchText: {
        fontSize: moderateScale(14),
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '500',
        color: '#2C2C2C',
    },
    titleText: {
        fontSize: moderateScale(16),
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '600',
        color: '#2C2C2C',
        marginBottom: 5
    },
    specText: {
        fontSize: moderateScale(12),
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '500',
        color: '#919191',
        lineHeight: 15
    },
    priceText: {
        fontSize: moderateScale(16),
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '600',
        color: primaryColor,
    },
})

export default itemsStyles;