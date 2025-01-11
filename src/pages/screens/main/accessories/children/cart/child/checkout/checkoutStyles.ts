import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const checkoutStyles = StyleSheet.create({
  itemsCont: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderColor: '#A8A8A3',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    marginBottom: 20,
    paddingVertical: 10,
    height: 130,
  },
  ordersWrapper: {
    alignItems: 'flex-start',
    display: 'flex',
    gap: verticalScale(10),
  },
  accessoriesItems: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: verticalScale(15),
    paddingRight: verticalScale(30),
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#A8A8A3',
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '600',
    color: '#2C2C2C',
  },
  name: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '600',
    color: '#2C2C2C',
  },
  address: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '600',
    color: '#919191',
  },
});

export default checkoutStyles;
