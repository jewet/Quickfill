import React, {useEffect, useRef} from 'react';
import {
  Animated,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
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
  last: boolean;
}

function Onboarding({img, boldText, lightText, navigateTo, bgColor}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };

  const imgOpacity = useRef(new Animated.Value(0)).current;
  const imgTranslateY = useRef(new Animated.Value(50)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(imgOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(imgTranslateY, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 800,
          delay: 300,
          useNativeDriver: true,
        }),
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 800,
          delay: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [imgOpacity, imgTranslateY, textOpacity, textTranslateY]);

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
        <Animated.View
          style={{
            opacity: imgOpacity,
            transform: [{translateY: imgTranslateY}],
          }}>
          {img}
        </Animated.View>
        <Animated.View
          style={{
            opacity: textOpacity,
            transform: [{translateY: textTranslateY}],
          }}>
          <View style={onboardingStyles.textContainer}>
            <Text style={onboardingStyles.boldText}>{boldText}</Text>
            <Text style={onboardingStyles.lightText}>{lightText}</Text>
          </View>
        </Animated.View>
        <Button text="Get Started" action={navigateTo} />
      </View>
    </SafeAreaView>
  );
}

export default Onboarding;
