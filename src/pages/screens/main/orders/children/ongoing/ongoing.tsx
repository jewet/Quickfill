import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import homeStyles from '../../../home/home-styles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  order_data,
  OrdersProps,
} from '../../../../../../utils/sample-data/orders';
import {getStatusColor} from '../../../../../../utils/sample-data/home';
import ArrowRight from '../../../../../../assets/images/home/yellow-right-arrow.svg';
import EmptyImg from '../../../../../../assets/images/orders/packing_7591789 1.svg';

type OngoingOrdersProps = {
  navigation: StackScreenProps<RootStackParamList, 'orders'>['navigation'];
};

function OngoingOrders({navigation}: OngoingOrdersProps) {
  const filteredOrders = order_data.filter(
    data => data.status !== 'Completed' && data.status !== 'Cancelled',
  );

  const handleNavigation = (orderDetails: OrdersProps) => {
    navigation.navigate('order-details', {orderDetails: orderDetails});
  };

  return (
    <View style={{marginTop: 20}}>
      {filteredOrders.length !== 0 ? (
        <View>
          {filteredOrders.map((data, index) => (
            <View key={index} style={homeStyles.orderContainer}>
              <View style={homeStyles.orderContent}>
                <Text style={homeStyles.idText}>{data.id}</Text>
                <Text style={homeStyles.idText}>
                  Status:{' '}
                  <Text style={{color: getStatusColor(data.status)}}>
                    {data.status}
                  </Text>
                </Text>
              </View>
              <View style={homeStyles.orderContent}>
                <View style={{display: 'flex', gap: 5}}>
                  {data.order_type.map((type: string, idx: number) => (
                    <Text key={idx} style={homeStyles.orderType}>
                      {type}
                    </Text>
                  ))}
                </View>
                <Text style={homeStyles.orderAmt}>
                  ₦{Intl.NumberFormat().format(data.amount)}
                </Text>
              </View>
              <View style={homeStyles.orderContent}>
                <Text style={homeStyles.idText}>
                  {data.date} • {data.time}
                </Text>
                <TouchableOpacity
                  style={homeStyles.orderDetails}
                  onPress={() => handleNavigation(data)}>
                  <Text>Order details</Text>
                  <ArrowRight width={15} height={15} fill="none" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 450,
            gap: 10,
          }}>
          <Text style={[homeStyles.details, {color: '#8E8E93'}]}>
            Nothing here yet
          </Text>
          <Text style={[homeStyles.title, {fontWeight: 400}]}>
            Place an order and then check back
          </Text>
          <EmptyImg width={120} height={120} fill="none" />
        </View>
      )}
    </View>
  );
}

export default OngoingOrders;
