import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import OrdersIcon from '../../../../assets/images/bottom-nav-icons/active-tabler_orders.svg';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../utils/nav-routes/types';
import homeStyles from '../home/home-styles';
import accessoriesStyles from '../accessories/accessoriesStyles';

type Props = StackScreenProps<RootStackParamList, 'orders'>;

function Orders({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          gap: 20,
        }}>
        <OrdersIcon width={60} height={55} fill="none" />
        <Text style={[homeStyles.details, {fontSize: 24, paddingTop: 10}]}>
          Orders yet to be implemented
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Orders;
