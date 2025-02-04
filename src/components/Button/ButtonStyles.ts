import { Dimensions, StyleSheet, Platform } from "react-native";


const width = Dimensions.get('window').width;
const btnHeight= Platform.OS === 'ios' ? 90 : 60
const btnRadius= Platform.OS === 'ios' ? 80 : 50
const btnMarginTop= Platform.OS === 'ios' ? -30 : 0
const btnMarginLeft= Platform.OS === 'ios' ? -10 : 0

const primaryBtnStyles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        paddingHorizontal: width * 0.05,
    },
    gradientContainer: {
        display: 'flex',
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
        marginLeft: '-5%'
    },
    btnText: {
        fontFamily: 'Plus Jakarta Sans',
        lineHeight: 20.16,
        fontWeight: 700,
        fontSize: 16,
        textAlign: 'center',
        marginTop: btnMarginTop,
        marginLeft: btnMarginLeft
    },
})

export default primaryBtnStyles;