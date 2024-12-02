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
import Home from '../screens/main/home/home';
import Main from '../screens/main/nav';
import Gas from '../screens/main/home/children/gas/gas';

function MainStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
        component={Main}
      />
      <Stack.Screen
        name="gas"
        options={{
          headerShown: false,
        }}
        component={Gas}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
