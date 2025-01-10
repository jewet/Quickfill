import {Dimensions, StyleSheet} from 'react-native';

// Get screen dimensions
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

// Scaling utility
const scale = (size: number) => (screenWidth / 375) * size; // 375 is the base width
const verticalScale = (size: number) => (screenHeight / 812) * size; // 812 is the base height
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const inputStyles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    gap: 5,
  },
  homeTop: {
    display: 'flex',
    paddingVertical: verticalScale(30),
    paddingHorizontal: scale(10),
    borderBottomLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30),
    width: '100%',
    justifyContent: 'space-between',
    gap: verticalScale(20),
  },
  label: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(17.64),
    fontWeight: '600',
    color: '#2C2C2C',
    marginTop: 20,
  },
  dialCode: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '600',
    color: '#2C2C2C',
  },
  errorText: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(17.64),
    fontWeight: '600',
    color: 'red',
  },
  input: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(17.64),
    fontWeight: '400',
    color: '#2C2C2C',
    marginTop: verticalScale(2),
    borderWidth: 1,
    borderColor: '#A8A8A3',
    borderRadius: 24,
    width: '100%',
    padding: 10,
    paddingHorizontal: 15,
    height: 48,
    backgroundColor: '#FFFFFF',
  },
  passwordInput: {
    width: '100%',
    borderRadius: 24,
    paddingHorizontal: 15,
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  securedInput: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(17.64),
    fontWeight: '400',
    color: '#2C2C2C',
    width: '80%',
  },
  securedInputWrapper: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#A8A8A3',
    borderRadius: 24,
    height: 48,
  },
  phoneInputWrapper: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#A8A8A3',
    borderRadius: 24,
    height: 48,
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center'
  },
  phoneInput: {
    width: '60%',
    paddingRight: 10,
    height: '100%',
  },
  forgotPassword: {
    display: 'flex',
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: moderateScale(12),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(15.12),
    fontWeight: '400',
    color: '#FFB600',
    marginTop: 5,
  },
  dateText: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(17.64),
    fontWeight: '400',
    color: '#2C2C2C',
  },
  dateWrapper: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#A8A8A3',
    borderRadius: 24,
    height: 48,
    marginTop: 10,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFE29B',
    height: '100%',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    gap: 2
  },
  flag: {
    fontSize: 18,
    marginRight: 5,
  },
});

export default inputStyles;
