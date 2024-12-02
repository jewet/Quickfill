import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {createAnimatedPropAdapter} from 'react-native-reanimated';
import Splash from '../screens/onboarding/splash/splash';
import FirstOnboarding from '../screens/onboarding/onboarding-screens/first-onboarding';
import SecondOnboarding from '../screens/onboarding/onboarding-screens/second-onboarding';
import ThirdOnboarding from '../screens/onboarding/onboarding-screens/third-onboarding';
import FouthOnboarding from '../screens/onboarding/onboarding-screens/fourth-onboarding';
import FifthOnboarding from '../screens/onboarding/onboarding-screens/fifth-onboarding';
import SixthOnboarding from '../screens/onboarding/onboarding-screens/sixth-onboarding';

function OnboardingStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="first-onboarding">
      {/* <Stack.Screen
        name="splash"
        options={{
          headerShown: false,
        }}
        component={Splash}
      /> */}
      <Stack.Screen
        name="first-onboarding"
        options={{
          headerShown: false,
        }}
        component={FirstOnboarding}
      />
      <Stack.Screen
        name="second-onboarding"
        options={{
          headerShown: false,
        }}
        component={SecondOnboarding}
      />
      <Stack.Screen
        name="third-onboarding"
        options={{
          headerShown: false,
        }}
        component={ThirdOnboarding}
      />
      <Stack.Screen
        name="fourth-onboarding"
        options={{
          headerShown: false,
        }}
        component={FouthOnboarding}
      />
      <Stack.Screen
        name="fifth-onboarding"
        options={{
          headerShown: false,
        }}
        component={FifthOnboarding}
      />
      <Stack.Screen
        name="sixth-onboarding"
        options={{
          headerShown: false,
        }}
        component={SixthOnboarding}
      />
    </Stack.Navigator>
  );
}

export default OnboardingStack;
