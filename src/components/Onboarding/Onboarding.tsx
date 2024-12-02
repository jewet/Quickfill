import React from 'react';
import {StatusBar, Text, useColorScheme, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import OnboardingPic from '../../assets/images/onboarding/onboarding-img-1.svg';
import onboardingStyles from './OnboardingStyles';
import Button from '../Button/Button';

interface Props {
  img: React.ReactNode;
  boldText: string;
  lightText: string;
  navigateTo: ()=>void;
  bgColor: string;
}
function Onboarding({img, boldText, lightText, navigateTo, bgColor}:Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  return (
    <SafeAreaView style={[onboardingStyles.onboardingContainer, {backgroundColor: bgColor}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={bgColor}
      />
      <View style={onboardingStyles.onboardingContent}>
        {img}
        <View>
        <Text style={onboardingStyles.boldText}>{boldText}</Text>
        <Text style={onboardingStyles.lightText}>
          {lightText}
        </Text>
        </View>
        <Button text='Get Started' action={navigateTo} />
      </View>
    </SafeAreaView>
  );
}

export default Onboarding;
