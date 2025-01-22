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
import {Provider} from 'react-redux';  
import { store } from './src/utils/redux/store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from "react-native-toast-message";


function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Provider store={store}>
            <Navigation />
            <Toast
              visibilityTime={3000}
            />
          </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>

  )
}

export default App;
