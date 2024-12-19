import {Dimensions, Platform, StyleSheet} from 'react-native';
import { primaryColor } from '../../../../../onboarding/splash/splashstyles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const profileDetailsStyles = StyleSheet.create({
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
  reviewCont: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#A8A8A3',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 20,
    gap: 5
  },
  ratingsCont: {
    width: '90%',
    paddingVertical: 15,
    gap: 30,
    marginLeft: 30,
  },
  achievementWrapper: {
    paddingHorizontal: verticalScale(6),
  },
  achievementCont: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    margin: 20,
    marginHorizontal: 10,
  },
  ratingsText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(28),
    lineHeight: moderateScale(30),
    fontWeight: '400',
    color: '#2C2C2C',
  },
  name: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  time: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: '#A8A8A3',
  },
  review: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: '#000000',
  },
  achievementText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: '#2C2C2C',
    textAlign: 'center',
  },
  seeMore: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: primaryColor,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    width: '100%',
    padding: scale(20),
  },
  chatList: {
    paddingBottom: 50,
  },
  messageContainer: {
    marginVertical: 5,
    maxWidth: '70%',
    borderRadius: 10,
    padding: 10,
    display: 'flex',
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F5F4F2',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
  },
  messageText: {
    color: '#000000',
    fontSize: 16,
  },
  senderTimestamp: {
    fontSize: 12,
    color: '#BFBFBF',
    textAlign: 'right',
    marginTop: 5,
  },
  receiverTimestamp: {
    fontSize: 12,
    color: '#BFBFBF',
    textAlign: 'left',
    marginTop: 5,
  },
  inputContainer: {
    width: '100%',
    // paddingHorizontal: scale(20),
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#0084ff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default profileDetailsStyles;
