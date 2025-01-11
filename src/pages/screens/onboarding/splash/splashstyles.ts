import { Dimensions, StyleSheet } from "react-native";
import Splash from "./splash";


export const primaryColor = '#FFD366'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const splashStyles = StyleSheet.create({
    splashContainer: {
        backgroundColor: primaryColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        width: width,
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    indicatorWrapper: {
        height: height,
        width: width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primaryColor
    }
})

export default splashStyles;