import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
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
          height: 80,
          flexDirection: 'column',
          paddingTop: '1%'
        },
        tabBarIcon: ({focused}) => {
          let IconComponent;
          let containerStyle = focused ? styles.activeTab : styles.inactiveTab;

          if (route.name === 'home') {
            IconComponent = focused ? (
              <View
                style={containerStyle}>
                <ActiveHomeIcon width={24} height={24} fill="none" />
              </View>
            ) : (
              <View
              style={containerStyle}>
              <HomeIcon width={24} height={24} fill="none" />
            </View>
            );
          } else if (route.name === 'accessories') {
            IconComponent = focused ? (
              <View
              style={containerStyle}>
              <ActiveAccessoriesIcon width={24} height={24} fill="none" />
            </View>
            ) : (
              <View
              style={containerStyle}>
              <AccessoriesIcon width={24} height={24} fill="none" />
            </View>
            );
          } else if (route.name === 'orders') {
            IconComponent = focused ? (
              <View
                style={containerStyle}>
                <ActiveOrderIcon width={24} height={24} fill="none" />
              </View>
            ) : (
              <View
              style={containerStyle}>
              <OrderIcon width={24} height={24} fill="none" />
            </View>
            );
          } else if (route.name === 'profile') {
            IconComponent = focused ? (
              <View
              style={containerStyle}>
              <ActiveProfileIcon width={24} height={24} fill="none" />
            </View>
            ) : (
              <View
              style={containerStyle}>
              <ProfileIcon width={24} height={24} fill="none" />
            </View>
            );
          }

          return (
            <View style={styles.tabItem}>
              {IconComponent}
              <View>
                <Text
                  style={focused ? styles.activeLabel : styles.inactiveLabel}>
                  {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
                </Text>
              </View>
            </View>
          );
        },
        tabBarActiveTintColor: '#000000',
      })}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="accessories"
        component={Accessories}
        options={{tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="orders"
        component={Orders}
        options={{tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{tabBarShowLabel: false}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center', // Ensures vertical stacking
    justifyContent: 'center',
    width: '250%',
    marginTop: '60%',
  },
  // tabLabelWrapper: {
  //   marginTop: 4, // Adds spacing between icon and text
  // },
  // activeTab: {
  //   backgroundColor: primaryColor,
  //   borderRadius: 60,
  //   paddingVertical: 8,
  //   paddingHorizontal: 16,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  inactiveTab: {
    paddingVertical: 3,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  activeTab: {
    backgroundColor: '#FFB600',
    paddingVertical: 3,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  activeLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  inactiveLabel: {
    fontSize: 12,
    color: '#888',
  },
  tabBarStyle: {
    backgroundColor: '#fff',
    height: '10%',
    display: 'none',
  },
});

export default Main;