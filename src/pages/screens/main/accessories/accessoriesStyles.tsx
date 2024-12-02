import { Dimensions, StyleSheet } from "react-native";
import { primaryColor } from "../../onboarding/splash/splashstyles";



const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const accessoriesStyles = StyleSheet.create({
    accessoriesContainer: {
        // backgroundColor: primaryColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height
    },
    scrollview: {
        width: '100%',
    },
})

export default accessoriesStyles;