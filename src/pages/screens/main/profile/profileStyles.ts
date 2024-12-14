import { Dimensions, Platform, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size; 
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const btnHeight= Platform.OS === 'ios' ? 90 : 60
const btnRadius= Platform.OS === 'ios' ? 30 : 20
const btnMarginTop= Platform.OS === 'ios' ? -30 : 0
const btnMarginLeft= Platform.OS === 'ios' ? -10 : 0

const profileStyles = StyleSheet.create({
  orderContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  scrollview: {
    width: '100%',
    padding: scale(16),
    paddingBottom: verticalScale(100),
    backgroundColor: '#F6F6F6',
  },
  profileTop: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  referralWrapper: {
    justifyContent: 'space-between', 
    paddingHorizontal: 16, 
    height: 56,
    borderWidth: 0.5,
    borderColor: '#A8A8A3',
    borderRadius: 30
},
  profileTopBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: btnHeight,
    padding: 16,
    borderRadius: btnRadius,
    marginTop: 20,
    shadowColor: '#FFB600', 
    shadowOffset: {
        width: 0, 
        height: 14, 
    },
    shadowOpacity: 0.25, 
    shadowRadius: 28, 
    elevation: 10,
  },
  name: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  username: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#5E5E5E',
  },
  bal: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#5E5E5E',
  },
  amt: {
      color: '#2C2C2C',
      fontWeight: 700
    },
    referralCode: {
      fontFamily: 'Plus Jakarta Sans',
      fontSize: moderateScale(16),
      fontWeight: '600',
      color: '#2C2C2C',
    },
    referralText: {
      fontFamily: 'Plus Jakarta Sans',
      fontSize: moderateScale(10),
      fontWeight: '600',
      color: '#919191',
    },
});

export default profileStyles;
