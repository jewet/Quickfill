import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import OnboardingStack from '../pages/stacks/onboardingstack';
import MainStack from '../pages/stacks/mainstack';
import Splash from '../pages/screens/onboarding/splash/splash';
import AuthStack from '../pages/stacks/authstack';
import {MMKV} from 'react-native-mmkv';
import {ActivityIndicator} from 'react-native';

function Navigation() {
  const Stack = createStackNavigator();
  const storage = new MMKV();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  useEffect(() => {
    const checkLoginStatus = () => {
      const status = storage.getBoolean('isLoggedIn'); // Retrieve login status
      setIsLoggedIn(status ?? false); // Default to false if undefined
    };

    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show a loader while checking
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="second-onboarding" component={OnboardingStack} />
          <Stack.Screen name="login" component={AuthStack} />
          <Stack.Screen name="home" component={MainStack} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="login" component={AuthStack} />
          <Stack.Screen name="home" component={MainStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Navigation;
