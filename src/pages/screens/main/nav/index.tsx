import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from '../home/home';
import HomeIcon from '../../../../assets/images/bottom-nav-icons/tabler_home.svg';
import ActiveHomeIcon from '../../../../assets/images/bottom-nav-icons/active-tabler_home.svg';
import AccessoriesIcon from '../../../../assets/images/bottom-nav-icons/tabler_accessories.svg';
import ActiveAccessoriesIcon from '../../../../assets/images/bottom-nav-icons/active-tabler_accessories.svg';
import OrderIcon from '../../../../assets/images/bottom-nav-icons/tabler_orders.svg';
import ActiveOrderIcon from '../../../../assets/images/bottom-nav-icons/active-tabler_orders.svg';
import ProfileIcon from '../../../../assets/images/bottom-nav-icons/tabler_profile.svg';
import ActiveProfileIcon from '../../../../assets/images/bottom-nav-icons/active-tabler_profile.svg';
import Accessories from '../accessories/accessories';
import Orders from '../orders/orders';
import Profile from '../profile/profile';

function Main() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {
          backgroundColor: '#fff',
          height: '10%',
          flexDirection: 'column',
        },
        tabBarIcon: ({focused}) => {
          let IconComponent;
          let containerStyle = focused ? styles.activeTab : styles.inactiveTab;

          if (route.name === 'home') {
            IconComponent = focused ? (
              <ActiveHomeIcon width={24} height={24} fill="none" />
            ) : (
              <HomeIcon width={24} height={24} fill="none" />
            );
          } else if (route.name === 'accessories') {
            IconComponent = focused ? (
              <ActiveAccessoriesIcon width={24} height={24} fill="none" />
            ) : (
              <AccessoriesIcon width={24} height={24} fill="none" />
            );
          } else if (route.name === 'orders') {
            IconComponent = focused ? (
              <ActiveOrderIcon width={24} height={24} fill="none" />
            ) : (
              <OrderIcon width={24} height={24} fill="none" />
            );
          } else if (route.name === 'profile') {
            IconComponent = focused ? (
              <ActiveProfileIcon width={24} height={24} fill="none" />
            ) : (
              <ProfileIcon width={24} height={24} fill="none" />
            );
          }

          return <View style={containerStyle}>{IconComponent}</View>;
        },
        tabBarActiveTintColor: '#000000',
      })}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="accessories"
        component={Accessories}
        options={{tabBarLabel: 'Accessories'}}
      />
      <Tab.Screen
        name="orders"
        component={Orders}
        options={{tabBarLabel: 'Orders'}}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: '#FFB600',
    borderRadius: 60,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveTab: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
