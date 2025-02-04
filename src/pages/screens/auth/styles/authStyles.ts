import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const authStyles = StyleSheet.create({
  authContainer: {
    flex: 1,
    display: 'flex',
    width: width,
    paddingVertical: verticalScale(30),
    paddingHorizontal: scale(20),
    gap: 10,
    backgroundColor: '#FFFFFF'
  },
  scrollview: {
    backgroundColor: '#FFF'
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
  firstText: {
    fontSize: moderateScale(24),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(30),
    fontWeight: '600',
    color: '#2C2C2C',
    marginTop: 30,
    textAlign: 'center'
  },
  secondText: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(17.64),
    fontWeight: '400',
    color: '#2C2C2C',
    marginTop: verticalScale(2),
    textAlign: 'center'
  },
  inputCont: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20
  },
  orContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20
  },
  orLine: {
    borderBottomWidth: 1,
    borderColor: '#A8A8A3',
    width: '40%'
  },
  orText: {
    fontSize: moderateScale(14),
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: moderateScale(17.64),
    fontWeight: '600',
    color: '#2C2C2C',
    marginTop: verticalScale(2),
    textAlign: 'center',
  },
  googleSignIn: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C2C2C',
    width: '100%',
    height: 55,
    borderRadius: 100,
    marginTop: 10
  },
  question: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '100%'
  },
  otpInput: {
    width: 46,
    height: 40,
    textAlign: 'center',
    fontSize: 13.33,
    borderWidth: 1,
    borderRadius: 5.33,
    color: '#2C2C2C',
    fontWeight: 600,
    lineHeight: 16.8
  },
});

export default authStyles;
