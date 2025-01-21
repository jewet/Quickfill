import React from 'react';
import {StatusBar, Text, TouchableOpacity, useColorScheme, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import onboardingStyles from './OnboardingStyles';
import Button from '../Button/Button';

interface Props {
  img: React.ReactNode;
  boldText: string;
  lightText: string;
  navigateTo: () => void;
  bgColor: string;
  last: boolean,
}

function Onboarding({img, boldText, lightText, navigateTo, bgColor, last}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };

  return (
    <SafeAreaView
      style={[
        onboardingStyles.onboardingContainer,
        {backgroundColor: bgColor},
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={onboardingStyles.onboardingContent}>
        {/* {last !== true && (
          <View style={onboardingStyles.skipWrapper}>
            <TouchableOpacity onPress={navigateTo}>
              <Text style={onboardingStyles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>
        )} */}
        {img}
        <View style={onboardingStyles.textContainer}>
          <Text style={onboardingStyles.boldText}>{boldText}</Text>
          <Text style={onboardingStyles.lightText}>{lightText}</Text>
        </View>
        <Button text="Get Started" action={navigateTo} />
      </View>
    </SafeAreaView>
  );
}

export default Onboarding;
