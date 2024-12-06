import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Main from '../screens/main/nav';
import Gas from '../screens/main/home/children/gas/gas';
import Electricity from '../screens/main/home/children/electricity/electricity';
import ElectricityProvider from '../screens/main/home/children/electricity/children/electricity-provider/electricity-providers';
import OrderDetails from '../screens/main/orders/children/order-details/order-details';
import Chat from '../screens/main/orders/children/chat/chat';
import ProfileDetails from '../screens/main/orders/children/chat/children/profile-details';

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
      <Stack.Screen
        name="electricity"
        options={{
          headerShown: false,
        }}
        component={Electricity}
      />
      <Stack.Screen
        name="electricity-provider"
        options={{
          headerShown: false,
        }}
        component={ElectricityProvider}
      />
      <Stack.Screen
        name="order-details"
        options={{
          headerShown: false,
        }}
        component={OrderDetails}
      />
      <Stack.Screen
        name="chat"
        options={{
          headerShown: false,
        }}
        component={Chat}
      />
      <Stack.Screen
        name="profile-details"
        options={{
          headerShown: false,
        }}
        component={ProfileDetails}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
