import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const btnRadius = Platform.OS === 'ios' ? 30 : 20;

const walletStyles = StyleSheet.create({
  walletContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  linearBg: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 30,
    justifyContent: 'center',
  },
  iosWalletTop: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 30,
    justifyContent: 'center',
    backgroundColor: 'rgb(116, 114, 114)'
  },

  scrollview: {
    width: '100%',
    paddingBottom: verticalScale(100),
    backgroundColor: '#F6F6F6',
  },
  opt: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#FFFFFF',
  },
  referText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#F7F6F2',
  },
  recentText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(17),
    fontWeight: '700',
    color: '#5E5E5E',
    marginLeft: 16,
    marginBottom: 10
  },
});

export default walletStyles;
