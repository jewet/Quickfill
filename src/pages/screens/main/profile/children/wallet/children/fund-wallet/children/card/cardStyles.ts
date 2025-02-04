import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const cardStyles = StyleSheet.create({
  moreCont: {
    backgroundColor: '#F7F6F2',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    marginVertical: 20,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10
  },
  knowText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 5
  },
  learnText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#2C2C2C',
    textDecorationLine: 'underline',
  },
  des: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(10),
    fontWeight: '700',
    color: '#919191',
  },
});

export default cardStyles;
