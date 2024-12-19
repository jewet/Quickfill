import {Dimensions, Platform, StyleSheet} from 'react-native';
import {height} from '../../../../../home/children/diesel/dieselStyles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const deliveryStyles = StyleSheet.create({
  orderDetailsContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    width: screenWidth,
    flex: 1,
    height: height,
    position: 'relative',
  },
  deliveryCont: {
    display: 'flex',
    alignItems: 'center',
    width: screenWidth,
    height: height,
    position: 'absolute',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  scrollview: {
    width: '100%',
    paddingBottom: verticalScale(20),
    backgroundColor: '#FAFAFA',
    display: 'flex',
    height: '40%',
    borderRadius: 30,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    padding: 16,
    alignItems: 'center',
  },
  orderDetailsCont: {
    paddingVertical: scale(20),
    paddingHorizontal: scale(20),
    backgroundColor: '#FFFFFF',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
  },
  activeNav: {
    backgroundColor: '#FFC533',
    borderRadius: 30,
  },
  time: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  deliveryTo: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: '#D9D9D9',
  },
  deliverOrder: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  riderDetails: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  deliverGoods: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: '#D9D9D9',
  },
  name: {
    fontWeight: '600',
    color: '#2C2C2C',
  },
});

export default deliveryStyles;
