import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

const onboardingStyles = StyleSheet.create({
  onboardingContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.05,
  },
  onboardingContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    width: '100%',
  },
  skipWrapper: {
    width: '100%',
    alignItems: 'flex-end'
  },
  boldText: {
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    fontSize: width * 0.055,
    lineHeight: width * 0.055 * 1.3,
    textAlign: 'center',
    marginTop: 20,
  },
  skipText: {
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '600',
    fontSize: width * 0.045,
  },
  lightText: {
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: width * 0.035 * 1.5,
    fontWeight: '400',
    fontSize: width * 0.035,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default onboardingStyles;
