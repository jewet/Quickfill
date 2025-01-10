import { Dimensions, Platform, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size; // 375 is the base width
const verticalScale = (size: number) => (screenHeight / 812) * size; // 812 is the base height
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const orderStyles = StyleSheet.create({
  orderContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  scrollview: {
    width: '100%',
    padding: scale(20),
    paddingBottom: verticalScale(100),
    backgroundColor: '#FAFAFA',
    display: 'flex',
  },
  ordersHeader: {
    paddingVertical: scale(20),
    backgroundColor: '#FFFFFF',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  progressBarWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10
  },
  orderNavWrapper: {
    width: '100%',
    paddingHorizontal: scale(2),
    marginTop: verticalScale(10),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    height: 48
  },
  orderNavCont: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: scale(10),
  },
  activeNav: {
    backgroundColor: '#FFC533',
    borderRadius: 30,

  },
  topText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(17.64),
    fontWeight: '700',
    color: '#2C2C2C',
  },
  ordersNav: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(17.64),
    fontWeight: '700',
    color: '#2C2C2C',
  },
});

export default orderStyles;
