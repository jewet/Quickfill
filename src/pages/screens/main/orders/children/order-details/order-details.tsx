import React from 'react';
import {
    ScrollView,
    StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import homeStyles from '../../../home/home-styles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {order_data, OrdersProps} from '../../../../../../utils/sample-data/orders';
import {getStatusColor} from '../../../../../../utils/sample-data/home';
import ArrowRight from '../../../../../../assets/images/home/yellow-right-arrow.svg';
import EmptyImg from '../../../../../../assets/images/orders/packing_7591789 1.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import orderStyles from '../../orderStyles';
import { backgroundStyle, isDarkMode } from '../../../../../../utils/status-bar-styles/status-bar-styles';
import electricityStyles from '../../../home/children/electricity/electrictyStyles';

function OrderDetails() {

  const filteredOrders = order_data.filter(
    data => data.status !== 'Completed' && data.status !== 'Cancelled',
  );
  const route = useRoute<RouteProp<RootStackParamList, 'order-details'>>();
  const {orderDetails}: {orderDetails?: OrdersProps} =
  route.params || {};
console.log('order', orderDetails);

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
      </ScrollView>
    </SafeAreaView>
  );
}

export default OrderDetails;
