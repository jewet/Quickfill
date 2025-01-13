import {Dimensions, StyleSheet} from 'react-native';
import Splash from './splash';
import {moderateScale, verticalScale} from '../../main/accessories/accessoriesStyles';

export const primaryColor = '#FFD366';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const splashStyles = StyleSheet.create({
  splashContainer: {
    backgroundColor: primaryColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: width,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: '30%'
  },
  indicatorWrapper: {
    height: height,
    width: width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor,
  },
  text: {
    fontSize: moderateScale(16),
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    color: '#000000',
    marginTop: 5,
    textAlign: 'center'
  },
  nextContainer: {
    marginTop: '70%',
    backgroundColor: '#2C2C2C',
    borderRadius: 25,
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(20)
  }
});

export default splashStyles;
