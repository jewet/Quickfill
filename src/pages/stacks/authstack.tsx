import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/auth/login';
import SignUp from '../screens/auth/signup';
import ForgotPassword from '../screens/auth/forgot-password';
import ResetPassword from '../screens/auth/reset-password';
import Emailverification from '../screens/auth/email-verification';

function AuthStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
        component={SignUp}
      />
      <Stack.Screen
        name="forgot-password"
        options={{
          headerShown: false,
        }}
        component={ForgotPassword}
      />
      <Stack.Screen
        name="reset-password"
        options={{
          headerShown: false,
        }}
        component={ResetPassword}
      />
      <Stack.Screen
        name="email-verification"
        options={{
          headerShown: false,
        }}
        component={Emailverification}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
