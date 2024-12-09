import {Dimensions, Platform, StyleSheet} from 'react-native';
import { primaryColor } from '../../../../../../../../onboarding/splash/splashstyles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const btnRadius = Platform.OS === 'ios' ? 30 : 20;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const transferStyles = StyleSheet.create({
    transferContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    gap: 20
  },
  nairaWrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#5E5E5E',
    justifyContent: 'center',
    padding: 10,
    height: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#F2F2F7',
  },
  top: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    paddingVertical: 20,
    alignSelf: 'flex-end',
    borderBottomWidth: 1,
    borderColor: '#E5E5EA',
    paddingBottom: 30
  },
  scrollview: {
    width: '100%',
    paddingBottom: verticalScale(100),
    paddingHorizontal: verticalScale(16),
    backgroundColor: '#F6F6F6',
    paddingTop: 30
  },
  detailsWrapper: {
    backgroundColor: '#FBF6E5',
    borderRadius: 20,
    padding: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 20
  },
  transfer: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: '#2C2C2C',
    textAlign: 'center',
    marginVertical: 20
  },
  name: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: '#2C2C2C',
    textAlign: 'right'
  },
  amt: {
    color: primaryColor,
  },
  reloadWrapper: {
    width: 'auto',
    backgroundColor: '#F7F6F2',
    borderRadius: 20,
    padding: 10,
  },
  reload: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#919191',
  },
  firstText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  secondText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: '#919191',
  },
  bottomText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(10),
    fontWeight: '500',
    color: '#999999',
    textAlign: 'center',
    width: 254
  },
  btnWrapper: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: primaryColor,
    borderRadius: 30,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  btnText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#2C2C2C',
    textAlign: 'center'
  },
});

export default transferStyles;
