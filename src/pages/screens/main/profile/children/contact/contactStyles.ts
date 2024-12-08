import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const btnRadius = Platform.OS === 'ios' ? 30 : 20;

const contactStyles = StyleSheet.create({
  topWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 40,
    borderBottomWidth: 1,
    borderColor: '#A8A8A3',
    width: '100%',
  },
  topText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: '#5E5E5E',
    marginTop: 20,
  },
});

export default contactStyles;
