import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import OnboardingStack from '../pages/stacks/onboardingstack';
import MainStack from '../pages/stacks/mainstack';
import Splash from '../pages/screens/onboarding/splash/splash';

function Navigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="first-onboarding" component={OnboardingStack} />
        <Stack.Screen name="home" component={MainStack} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation