import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Main from '../screens/main/nav';
import Gas from '../screens/main/home/children/gas/gas';
import Electricity from '../screens/main/home/children/electricity/electricity';
import ElectricityProvider from '../screens/main/home/children/electricity/children/electricity-provider/electricity-providers';
import OrderDetails from '../screens/main/orders/children/order-details/order-details';
import Chat from '../screens/main/orders/children/chat/chat';
import ProfileDetails from '../screens/main/orders/children/chat/children/profile-details';
import Items from '../screens/main/accessories/children/items/items';
import ItemsDetails from '../screens/main/accessories/children/items/child/item-details';
import Cart from '../screens/main/accessories/children/cart/cart';
import Favourites from '../screens/main/profile/children/favourites/favourites';
import UserPayment from '../screens/main/profile/children/user-payment/user-payment';
import Address from '../screens/main/profile/children/address/address';
import Contact from '../screens/main/profile/children/contact/contact';
import Details from '../screens/main/profile/children/details/details';
import UpdateForm from '../screens/main/profile/children/details/child/update-form/update-form';
import Referral from '../screens/main/profile/children/referral/referral';
import Help from '../screens/main/profile/children/help/help';
import Complaints from '../screens/main/profile/children/help/children/complaints/complaints';
import ItemSuggestion from '../screens/main/profile/children/help/children/complaints/child/item-suggestion/item-suggestion';

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
      <Stack.Screen
        name="items-page"
        options={{
          headerShown: false,
        }}
        component={Items}
      />
      <Stack.Screen
        name="item-details"
        options={{
          headerShown: false,
        }}
        component={ItemsDetails}
      />
      <Stack.Screen
        name="cart"
        options={{
          headerShown: false,
        }}
        component={Cart}
      />
      <Stack.Screen
        name="favourite"
        options={{
          headerShown: false,
        }}
        component={Favourites}
      />
      <Stack.Screen
        name="user-address"
        options={{
          headerShown: false,
        }}
        component={Address}
      />
      <Stack.Screen
        name="user-payment"
        options={{
          headerShown: false,
        }}
        component={UserPayment}
      />
      <Stack.Screen
        name="contact"
        options={{
          headerShown: false,
        }}
        component={Contact}
      />
      <Stack.Screen
        name="user-details"
        options={{
          headerShown: false,
        }}
        component={Details}
      />
      <Stack.Screen
        name="update-form"
        options={{
          headerShown: false,
        }}
        component={UpdateForm}
      />
      <Stack.Screen
        name="referral"
        options={{
          headerShown: false,
        }}
        component={Referral}
      />
      <Stack.Screen
        name="help"
        options={{
          headerShown: false,
        }}
        component={Help}
      />
      <Stack.Screen
        name="complaints"
        options={{
          headerShown: false,
        }}
        component={Complaints}
      />
      <Stack.Screen
        name="item-suggestion"
        options={{
          headerShown: false,
        }}
        component={ItemSuggestion}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
