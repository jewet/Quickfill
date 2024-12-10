import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size; 
const verticalScale = (size: number) => (screenHeight / 812) * size;  
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const timelineModalStyles = StyleSheet.create({
    progressWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: -16
      },
});

export default timelineModalStyles;
