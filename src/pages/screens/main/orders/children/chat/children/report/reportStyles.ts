import {Dimensions, Platform, StyleSheet} from 'react-native';
import {primaryColor} from '../../../../../../onboarding/splash/splashstyles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const reportStyles = StyleSheet.create({
  profileDetailsContainer: {
    backgroundColor: '#F6F6F6',
    display: 'flex',
    alignItems: 'center',
    width: screenWidth,
    flex: 1,
    position: 'relative',
  },
  scrollview: {
    width: '100%',
    paddingBottom: verticalScale(100),
    display: 'flex',
    gap: 10,
    marginTop: -20,
  },
  flexContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  ratingsWrapper: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#A8A8A3',
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  reasonCont: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    width: '100%',
    marginTop: 20,
  },
  uploadWrapper: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#919191',
    borderRadius: 20,
    marginTop: 10
  },
  upload: {
    backgroundColor: primaryColor,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5
  },
  uploadText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(10),
    fontWeight: '500',
    color: '#2C2C2C',
  },
  reasonWrapper: {
    borderWidth: 0.5,
    borderColor: primaryColor,
    borderRadius: 30,
    width: 'auto',
    padding: 10,
  },
  reasonSelected: {
    backgroundColor: primaryColor,
  },
  reasonText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: '#2C2C2C',
  },
  label: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#2C2C2C',
  },
  supportedText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(10),
    fontWeight: '400',
    color: '#919191',
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
    width: '100%',
    textAlignVertical: 'top',
  },
});

export default reportStyles;
