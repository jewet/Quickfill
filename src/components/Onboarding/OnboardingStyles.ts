import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

const onboardingStyles = StyleSheet.create({
  onboardingContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.05, // 5% of screen width
    paddingVertical: height * 0.05, // 5% of screen height
  },
  onboardingContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    // paddingHorizontal: '10%', // Add space for text responsiveness
    width: '100%',
  },
  boldText: {
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: 30,
    fontWeight: '700',
    fontSize: width * 0.06, // Dynamic font size based on width
    textAlign: 'center',
    marginTop: 20,
  },
  lightText: {
    fontFamily: 'Plus Jakarta Sans',
    lineHeight: 20.16,
    fontWeight: '400',
    fontSize: width * 0.040, // Dynamic font size
    textAlign: 'center',
    marginTop: 10,
  },
});

export default onboardingStyles;
