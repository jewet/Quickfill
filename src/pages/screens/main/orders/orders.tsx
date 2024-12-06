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
import electricityStyles from '../home/children/electricity/electrictyStyles';
import orderStyles from './orderStyles';
import {orders_nav} from '../../../../utils/sample-data/orders';
import OngoingOrders from './children/ongoing/ongoing';
import CompletedOrders from './children/completed/completed';

type Props = StackScreenProps<RootStackParamList, 'orders'>;

function Orders({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [activeNav, setActiveNav] = useState<number>(0);
  


  const displayActiveComponent = () => {
    if (activeNav === 0) return <OngoingOrders navigation={navigation} />;
    if (activeNav === 1) return <CompletedOrders navigation={navigation} />;
    return null;
  };
  return (
    <SafeAreaView style={orderStyles.orderContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={orderStyles.ordersHeader}>
        <Text style={electricityStyles.topText}>Your orders</Text>
      </View>

      <ScrollView style={orderStyles.scrollview} showsVerticalScrollIndicator={false}>
        <View style={orderStyles.orderNavWrapper}>
          {orders_nav.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={[
                orderStyles.orderNavCont,
                index === activeNav && orderStyles.activeNav,
              ]}
              onPress={() => setActiveNav(index)}>
              <Text>{data.nav}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {displayActiveComponent()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Orders;
