import React, { useEffect, useRef } from 'react';
import { Animated, StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import splashStyles, { primaryColor } from './splashstyles';
import LogoPic from '../../../../assets/images/splash/logo-pic.svg';
import LogoText from '../../../../assets/images/splash/logo-text.svg';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../utils/nav-routes/types';

type Props = StackScreenProps<RootStackParamList, 'splash'>;

function Splash({ navigation }: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };

  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoTranslateY = useRef(new Animated.Value(50)).current; 
  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(50)).current; 

  useEffect(() => {
    // Start animations
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(logoTranslateY, {
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

    // Navigate to Home after 3 seconds
    const timeout = setTimeout(() => {
      navigation.replace('second-onboarding');
    }, 1500);

    return () => clearTimeout(timeout); // Clean up timeout on unmount
  }, [logoOpacity, logoTranslateY, textOpacity, textTranslateY, navigation]);

  return (
    <SafeAreaView style={[backgroundStyle, { flex: 1, backgroundColor: primaryColor }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={primaryColor}
      />
      <View style={splashStyles.splashContainer}>
        <View style={splashStyles.logoContainer}>
          <Animated.View
            style={{
              opacity: logoOpacity,
              transform: [{ translateY: logoTranslateY }],
            }}>
            <LogoPic width={68} height={99} fill="none" />
          </Animated.View>
          <Animated.View
            style={{
              opacity: textOpacity,
              transform: [{ translateY: textTranslateY }],
            }}>
            <LogoText width={144} height={32} fill="none" />
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Splash;
