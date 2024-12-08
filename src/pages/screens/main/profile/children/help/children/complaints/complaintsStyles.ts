import {Dimensions, Platform, StyleSheet} from 'react-native';
import {primaryColor} from '../../../../../../onboarding/splash/splashstyles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const btnRadius = Platform.OS === 'ios' ? 30 : 20;
const btnHeight= Platform.OS === 'ios' ? 90 : 60

const complaintsStyles = StyleSheet.create({
  complaintsContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  scrollview: {
    width: '100%',
    paddingBottom: verticalScale(100),
    backgroundColor: '#F6F6F6',
    paddingTop: 30,
  },
  firstText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: primaryColor,
    marginBottom: 3,
  },
  secondText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  greenText: {
    color: '#2BBD6F',
  },
  textArea: {
    backgroundColor: '#F7F6F2',
    borderWidth: 1,
    borderColor: '#919191',
    borderRadius: 30,
    marginTop: 30,
    height: 178,
    display: 'flex',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    padding: 16,
    width: '100%'
  },
  btn: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: btnHeight,
    width: '100%',
    padding: 16,
    borderRadius: 30,
    backgroundColor: '#C7C7CC'
    // backgroundColor: primaryColor
  },
  btnText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: '#F7F6F2',
  },
});

export default complaintsStyles;
