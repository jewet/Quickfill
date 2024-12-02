import { Dimensions, StyleSheet } from "react-native";
import { primaryColor } from "../../pages/screens/onboarding/splash/splashstyles";


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const onboardingStyles = StyleSheet.create({
    onboardingContainer: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        width: width,
        paddingHorizontal: 20,
        paddingVertical: 70
    },
    onboardingContent: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: width,
    },
    boldText: {
        fontFamily: 'Plus Jakarta Sans',
        lineHeight: 30,
        fontWeight: 700,
        fontSize: 28,
        textAlign: 'center',
        marginTop: 20
    },
    lightText: {
        fontFamily: 'Plus Jakarta Sans',
        lineHeight: 20.16,
        fontWeight: 400,
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10
    },
})

export default onboardingStyles;