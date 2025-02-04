import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Linking,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {OrdersProps} from '../../../../../../../../utils/sample-data/orders';
import deliveryStyles from './deliveryStyles';
import Maps from '../../../../../../../../assets/images/orders/delivery-map.svg';
import Fav from '../../../../../../../../assets/images/profile/Favourite.svg';
import ProgressBar from '../../../../../../../../assets/images/profile/progress-bar.svg';
import DeliveryIcon from '../../../../../../../../assets/images/profile/Deliver.svg';
import GoBack from '../../../../../../../../assets/images/payment/tabler_arrow-right.svg';
import {height, width} from '../../../../../home/children/diesel/dieselStyles';
import orderDetailsStyles from '../../orderDetailsStyles';
import ChatIcon from '../../../../../../../../assets/images/orders/msg.svg';
import CallIcon from '../../../../../../../../assets/images/orders/call.svg';
import Dp from '../../../../../../../../assets/images/orders/profile_pic.svg';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../../utils/redux/store/store';
import {setShowAlert} from '../../../../../../../../utils/redux/slice/orders';
import AlertModal from '../../../../../../../../components/Alert/Alert';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type Props = StackScreenProps<RootStackParamList, 'delivery'>;

function Delivery({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route = useRoute<RouteProp<RootStackParamList, 'delivery'>>();
  const {orderDetails}: {orderDetails?: OrdersProps} = route.params || {};
  const dispatch = useDispatch();
  const {showAlert} = useSelector((state: RootState) => state.orders);

  const handleCall = async () => {
    const phoneNumber = orderDetails?.rider?.phone_number || '+2348069684739';
    const url = `tel:${phoneNumber}`;
    try {
      await Linking.openURL(url);
    } catch (error) {
      dispatch(setShowAlert(true));
    }
  };
  return (
    <SafeAreaView style={deliveryStyles.orderDetailsContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Maps width={width} height={height} style={{position: 'absolute'}} />
      <View style={deliveryStyles.deliveryCont}>
        <View
          style={[
            orderDetailsStyles.flexContainer,
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 16,
            },
          ]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <GoBack width={24} height={24} fill="none" />
          </TouchableOpacity>
          <Fav width={44} height={44} fill="none" />
        </View>
        <View style={deliveryStyles.scrollview}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{width: '100%'}}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={deliveryStyles.time}>10 minutes left</Text>
              <Text style={deliveryStyles.deliveryTo}>
                Delivery to{' '}
                <Text style={deliveryStyles.name}>Ministar Samuel</Text>
              </Text>
              <ProgressBar width={'100%'} height={20} style={{marginTop: 20}} />
              <View
                style={[
                  orderDetailsStyles.flexContainer,
                  {justifyContent: 'center', width: '60%', marginTop: 20},
                ]}>
                <DeliveryIcon width={56} height={56} fill="none" />
                <View>
                  <Text style={deliveryStyles.deliverOrder}>
                    Delivered your order
                  </Text>
                  <Text style={deliveryStyles.deliverGoods}>
                    We will deliver your goods to you in the shortest possible
                    time.
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={[
                  orderDetailsStyles.flexContainer,
                  {
                    justifyContent: 'flex-end',
                    gap: 20,
                    marginTop: 20,
                  },
                ]}
                onPress={() =>
                  navigation.navigate('profile-details', {
                    orderDetails: orderDetails,
                    target: 'Delivery Rep',
                  })
                }>
                <Dp width={40} height={40} />
                <View>
                  <Text style={deliveryStyles.riderDetails}>
                    {orderDetails?.rider?.name}
                  </Text>
                  <Text style={deliveryStyles.riderDetails}>
                    {orderDetails?.rider?.phone_number}
                  </Text>
                </View>
                <View
                  style={[
                    orderDetailsStyles.flexContainer,
                    {width: 'auto', gap: 20},
                  ]}>
                  <TouchableOpacity onPress={handleCall}>
                    <CallIcon width={48} height={48} fill="none" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('chat', {
                        orderDetails,
                        target: 'Delivery Rep',
                      })
                    }>
                    <ChatIcon width={48} height={48} fill="none" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
      {showAlert && (
        <AlertModal
          topText="Error"
          bottomText="Unable to perform this action."
          closeModal={() => dispatch(setShowAlert(false))}
        />
      )}
    </SafeAreaView>
  );
}

export default Delivery;
