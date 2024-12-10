import { Dimensions, StyleSheet, Platform } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size; 
const verticalScale = (size: number) => (screenHeight / 812) * size; 
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const quick_action_margin_top = Platform.OS === 'ios' ? -60 : -5
const details_content_margin_bottom = Platform.OS === 'ios' ? -25 : 5

const homeStyles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
  },
  scrollview: {
    width: '100%',
    position: 'relative'
  },
  homeTop: {
    display: 'flex',
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(16),
    backgroundColor: '#FFC533',
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    width: '100%',
    justifyContent: 'space-between',
    gap: verticalScale(15),
  },
  detailsContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: details_content_margin_bottom
  },
  balanceContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: moderateScale(12),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(15.12),
    fontWeight: '500',
    color: '#919191',
  },
  details: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(17.64),
    fontWeight: '600',
    color: 'black',
    marginTop: verticalScale(2),
  },
  mainContent: {
    display: 'flex',
    alignItems: 'center',
    marginTop: quick_action_margin_top
  },
  quickActionCont: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingVertical: scale(20),
    paddingHorizontal: scale(7),
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    gap: scale(15),
    paddingVertical: verticalScale(20),
    marginTop: -12
  },
  actionContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: scale(5),
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(8),
    padding: scale(10),
    width: '45%',
    shadowColor: '#CCC',
    shadowOffset: {
      width: 0,
      height: verticalScale(14),
    },
    shadowOpacity: 0.25,
    shadowRadius: scale(28),
    elevation: 10,
  },
  quickActionText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(18),
    fontWeight: '700',
    color: '#5E5E5E',
    marginTop: verticalScale(10),
  },
  actionText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(15),
    lineHeight: moderateScale(18),
    fontWeight: '700',
    paddingTop: verticalScale(5),
    color: '#2C2C2C',
  },
  recentOrdersTop: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: scale(20),
    justifyContent: 'space-between',
  },
  viewText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#000000',
    borderBottomWidth: 2,
    borderBottomColor: '#FFB600',
  },
  orderContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    display: 'flex',
    gap: scale(10),
  },
  orderContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderDetails: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F7F6F2',
    alignItems: 'center',
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(8),
    borderRadius: moderateScale(30),
    gap: scale(2),
  },
  idText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(15.12),
    fontWeight: '400',
    color: '#A8A8A3',
  },
  orderAmt: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(20.16),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  orderType: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(17.64),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  vendorContent: {
    backgroundColor: '#FFFFFF',
    margin: scale(10),
    position: 'relative',
    padding: scale(20),
    borderRadius: moderateScale(10),
    display: 'flex',
    alignItems: 'center',
    shadowColor: '#CCC',
    shadowOffset: {
      width: 0,
      height: verticalScale(14),
    },
    shadowOpacity: 0.25,
    shadowRadius: scale(28),
    elevation: 10,
    height: 180
  },
  bookmarkWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: scale(10),
    top: 0,
  },
  vendorName: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(17.64),
    fontWeight: '700',
    paddingTop: verticalScale(5),
    color: '#2C2C2C',
    marginTop: verticalScale(10),
  },
  noOfOrders: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(11),
    lineHeight: moderateScale(13.68),
    fontWeight: '600',
    paddingTop: verticalScale(5),
    color: '#A8A8A3',
    marginTop: verticalScale(3),
  },
  plusWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: scale(10),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: verticalScale(14),
    },
    shadowOpacity: 0.25,
    shadowRadius: scale(28),
    elevation: 10,
  },
});

export default homeStyles;
