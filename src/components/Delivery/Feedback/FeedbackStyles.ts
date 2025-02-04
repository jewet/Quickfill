import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;  
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const feedbackStyles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    gap: 5,
  },
  btnsWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(17.64),
    fontWeight: '600',
    color: '#2C2C2C',
    marginTop: 20,
  },
});

export default feedbackStyles;
