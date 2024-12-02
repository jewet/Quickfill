import { Dimensions, StyleSheet } from "react-native";
import { primaryColor } from "../../pages/screens/onboarding/splash/splashstyles";


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const primaryBtnStyles = StyleSheet.create({
    btnContainer: {
        width: '100%',
    },
    gradientContainer: {
        backgroundColor: primaryColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: '100%',
        padding: 16,
        borderRadius: 50,
        marginTop: 20,
        shadowColor: '#FFB600', 
        shadowOffset: {
            width: 0, 
            height: 14, 
        },
        shadowOpacity: 0.25, 
        shadowRadius: 28, 
        elevation: 10,
    },
    btnText: {
        fontFamily: 'Plus Jakarta Sans',
        lineHeight: 20.16,
        fontWeight: 700,
        fontSize: 18,
        textAlign: 'center'
    },
})

export default primaryBtnStyles;