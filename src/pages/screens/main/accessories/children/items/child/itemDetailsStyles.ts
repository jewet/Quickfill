import { Dimensions, Platform, StyleSheet } from "react-native";
import { primaryColor } from "../../../../../onboarding/splash/splashstyles";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size; 
const verticalScale = (size: number) => (screenHeight / 812) * size; 
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const btnHeight= Platform.OS === 'ios' ? 90 : 60
const btnRadius= Platform.OS === 'ios' ? 80 : 50
const btnMarginTop= Platform.OS === 'ios' ? -30 : 0
const btnMarginLeft= Platform.OS === 'ios' ? -10 : 0

const itemDetailsStyles = StyleSheet.create({
    itemsDetailsContainer: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        width: width,
        height: height
    },
    topScrollView: {
        width: '100%',
        paddingVertical: 10,
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
        paddingTop: 20
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
    titleText: {
        fontSize: moderateScale(24),
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '600',
        color: '#2C2C2C',
        lineHeight: 30,
    },
    specText: {
        fontSize: moderateScale(14),
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '500',
        color: '#919191',
        lineHeight: 20,
        marginTop: 10
    },
    priceTextWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primaryColor, 
        paddingVertical: 10,
        paddingHorizontal: 16,
        width: 120,
        borderRadius: 30,
        marginTop: 20
    },
    priceText: {
        fontSize: moderateScale(16),
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '600',
        color: '#2C2C2C',
    },
    orderText: {
        fontSize: moderateScale(14),
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '500',
        color: '#2C2C2C',
    },
    similarProduct: {
        fontSize: moderateScale(17),
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '600',
        color: '#5E5E5E',
        marginVertical: 10,
        marginLeft: 16,
    },
    gradientContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: btnHeight,
        width: '110%',
        padding: 16,
        borderRadius: btnRadius,
        marginTop: 20,
        shadowColor: '#FFB600', 
        shadowOffset: {
            width: 0, 
            height: 14, 
        },
        shadowOpacity: 0.25, 
        shadowRadius: 28, 
        elevation: 10,
        marginLeft: '-5%',
        gap: 20
    },
    btnText: {
        fontFamily: 'Plus Jakarta Sans',
        lineHeight: 20.16,
        fontWeight: 700,
        fontSize: 16,
        textAlign: 'center',
        marginLeft: btnMarginLeft
    },
    otherIems: {
        width: 151,
        height: 250,
        backgroundColor: '#FFFFFF',
        margin: 15,
        borderWidth: 0.5,
        borderColor: '#A8A8A3',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16
    },
    addToCartBtn: {
        justifyContent: 'center',
        gap: 15,
        backgroundColor: primaryColor,
        borderRadius: 30,
        height: 45,
        paddingHorizontal: 10
    }
})

export default itemDetailsStyles;