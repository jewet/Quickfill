import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const scale = (size: number) => (screenWidth / 375) * size;
const verticalScale = (size: number) => (screenHeight / 812) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const electricityHistoryStyles = StyleSheet.create({
  historyWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    width: '100%',
    marginTop: verticalScale(10),
  },
  historyCont: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 5,
    width: '100%',
    marginTop: verticalScale(10),
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#A8A8A3',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  addressWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  status: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: '#2C2C2C',
  },
  completed: {
    fontWeight: '600',
    color: '#2BBD6F',
  },
  address: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#2C2C2C',
  },
  notFound: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#2C2C2C',
    textAlign: 'center',
  },
  name: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: '#919191',
  },
  date: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: moderateScale(10),
    fontWeight: '500',
    color: '#919191',
  },
});

export default electricityHistoryStyles;
