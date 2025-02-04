import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size; // 375 is the base width
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const electricityPurchaseStyles = StyleSheet.create({
  detailsWrapper: {
    marginTop: 10,
    display: 'flex',
    gap: 5,
  },
  label: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(17.64),
    fontWeight: '600',
    color: '#919191',
  },
  details: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(17.64),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  btnWrapper: {
    marginTop: '10%'
  }
});

export default electricityPurchaseStyles;
