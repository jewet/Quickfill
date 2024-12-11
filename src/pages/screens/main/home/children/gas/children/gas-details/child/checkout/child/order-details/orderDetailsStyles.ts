import { Dimensions, Platform, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size; // 375 is the base width
const verticalScale = (size: number) => (screenHeight / 812) * size; // 812 is the base height
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const orderDetailsStyles = StyleSheet.create({
  orderDetailsContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    width: screenWidth,
    flex: 1,
  },
  scrollview: {
    width: '100%',
    paddingBottom: verticalScale(100),
    backgroundColor: '#FAFAFA',
    display: 'flex',
    gap: 10,
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
  oderDetailsDeliveryStatus: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flexContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10, 
  },
  viewTimeline: {
    padding: scale(10),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F6F2',
    borderRadius: 16
  },
  orderType: {
    padding: scale(10),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    width: '90%',
    alignSelf: 'flex-end',
  },
  orderNavCont: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: scale(10),
  },
  totalWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: scale(20),
    paddingHorizontal: scale(20),
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    borderBottomWidth: 0,
    paddingBottom: 100,
    gap: 10,
    borderColor: '#5E5E5E'
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
});

export default orderDetailsStyles;
