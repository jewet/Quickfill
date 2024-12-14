/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/navigation';
import Home from './src/pages/screens/main/home/home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <Navigation />

  )
}

export default App;
