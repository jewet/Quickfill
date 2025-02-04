import { Dimensions, StyleSheet } from "react-native";
import { primaryColor } from "../../../../onboarding/splash/splashstyles";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size; // 375 is the base width
const verticalScale = (size: number) => (screenHeight / 812) * size; // 812 is the base height
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const ChatStyles = StyleSheet.create({
  chatContainer: {
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
    paddingBottom: 50,
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
  hiddenCont: {
    marginVertical: 5,
    borderRadius: 10,
    padding: 20,
    display: 'flex',
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    right: 20,
    top: 50,
    zIndex: 111,
    gap: 10
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: primaryColor,
    borderRadius: 20,
    borderWidth: 0.5, 
    borderColor: '#D9D9D9'
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F5F4F2',
    borderRadius: 20,
    borderWidth: 0.5, 
    borderColor: '#D9D9D9'
  },
  messageText: {
    color: '#000000',
    fontSize: 16,
  },
  senderTimestamp: {
    fontSize: 12,
    color: '#5E5E5E',
    textAlign: 'right',
    marginTop: 5,
  },
  receiverTimestamp: {
    fontSize: 12,
    color: '#BFBFBF',
    textAlign: 'left',
    marginTop: 5,
  },
  infoOptText: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: 400
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

export default ChatStyles;
