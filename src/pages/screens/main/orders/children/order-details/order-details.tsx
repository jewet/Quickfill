import React, {useState} from 'react';
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
import {OrdersProps} from '../../../../../../utils/sample-data/orders';
import {SafeAreaView} from 'react-native-safe-area-context';
import orderStyles from '../../orderStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../utils/status-bar-styles/status-bar-styles';
import electricityStyles from '../../../home/children/electricity/electrictyStyles';
import electricityPaymentStyles from '../../../home/children/electricity/children/payment/paymentStyles';
import BackArrow from '../../../../../../assets/images/auth/tabler_arrow-right.svg';
import orderDetailsStyles from './orderDetailsStyles';
import NoteIcon from '../../../../../../assets/images/orders/tabler_info-circle.svg';
import MapIcon from '../../../../../../assets/images/orders/tabler_map-pin.svg';
import MsgIcon from '../../../../../../assets/images/orders/tabler_message.svg';
import ArrowRightIcon from '../../../../../../assets/images/orders/tabler_chevron-right.svg';
import ArrowUp from '../../../../../../assets/images/orders/arrow-up.svg';
import ArrowDown from '../../../../../../assets/images/orders/arrow0down.svg';
import PasswordIcon from '../../../../../../assets/images/orders/tabler_lock-password.svg';
import OnlineIcon from '../../../../../../assets/images/orders/on_line.svg';
import OfflineIcon from '../../../../../../assets/images/orders/offline.svg';
import ChatIcon from '../../../../../../assets/images/orders/msg.svg';
import CallIcon from '../../../../../../assets/images/orders/call.svg';
import Deliver from '../../../../../../assets/images/profile/Deliver.svg';
import TransitIcon from '../../../../../../assets/images/orders/rider.svg';
import {primaryColor} from '../../../../onboarding/splash/splashstyles';
import TimelineModal from '../../../../../../components/TimelineModal/TimelineModal';
import FullProgressBar from '../../../../../../assets/images/orders/full_progress_bar.svg';
import HalfProgressBar from '../../../../../../assets/images/orders/half_progress_bar.svg';
import BlankProgressBar from '../../../../../../assets/images/orders/blank_progress_bar.svg';
import {profile_data} from '../../../../../../utils/sample-data/profile';
import {RootState} from '../../../../../../utils/redux/store/store';
import {useDispatch, useSelector} from 'react-redux';
import {setShowModal} from '../../../../../../utils/redux/slice/orders';

type Props = StackScreenProps<RootStackParamList, 'order-details'>;

function OrderDetails({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'order-details'>>();
  const {orderDetails}: {orderDetails?: OrdersProps} = route.params || {};
  const [showOrderDetails, setShowOrderDetails] = useState<boolean>(false);
  const RiderPic = orderDetails?.rider?.pic;

  const calculateSubtotal = () => {
    return orderDetails?.order_type.reduce(
      (total: number, item: any) => total + (item.price || 0),
      0,
    );
  };

  const subtotal = calculateSubtotal();

  const handleNavigation = (
    orderDetails: OrdersProps,
    target: 'rider' | 'vendor',
  ) => {
    navigation.navigate('chat', {orderDetails, target});
  };
  const dispatch = useDispatch();
  const {showModal} = useSelector((state: RootState) => state.orders);
  const customerSupport = profile_data.find(
    item => item.profile.type === 'Contact/support',
  );

  return (
    <SafeAreaView style={orderDetailsStyles.orderDetailsContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={[
          orderStyles.ordersHeader,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          },
        ]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow width={26} height={26} fill="none" />
        </TouchableOpacity>
        <Text style={electricityStyles.topText}>Order details</Text>
        <TouchableOpacity>
          <Text style={[electricityPaymentStyles.topText, {color: '#919191'}]}>
            Help
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={orderDetailsStyles.scrollview}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            backgroundColor: '#FAFAFA',
            display: 'flex',
            gap: 10,
            marginTop: 20,
          }}>
          <View style={orderDetailsStyles.orderDetailsCont}>
            <View style={orderDetailsStyles.oderDetailsDeliveryStatus}>
              <View>
                <Text style={homeStyles.title}>Delivery status</Text>
                <Text style={homeStyles.details}>Delivery in 20-30mins</Text>
              </View>
              <TouchableOpacity
                style={orderDetailsStyles.viewTimeline}
                onPress={() => dispatch(setShowModal(true))}>
                <Text
                  style={[
                    homeStyles.title,
                    {color: '#FFB600', fontSize: 12, fontWeight: 600},
                  ]}>
                  View timeline
                </Text>
              </TouchableOpacity>
            </View>
            <View style={orderStyles.progressBarWrapper}>
              {orderDetails?.delivery_timeline?.map(
                (data: any, index: number) => (
                  <View key={index}>
                    {data?.itsTurn === true && data?.pending === false ? (
                      <FullProgressBar />
                    ) : data?.itsTurn === true && data?.pending === true ? (
                      <HalfProgressBar />
                    ) : (
                      <BlankProgressBar />
                    )}
                  </View>
                ),
              )}
            </View>
            <View style={orderDetailsStyles.flexContainer}>
              <NoteIcon width={20} height={20} fill="none" />
              <Text style={[homeStyles.title, {fontSize: 12, fontWeight: 600}]}>
                Your change will be added to your wallet balance
              </Text>
            </View>
          </View>
          <View style={orderDetailsStyles.orderDetailsCont}>
            <View style={orderDetailsStyles.oderDetailsDeliveryStatus}>
              <View>
                <Text style={homeStyles.details}>Order details</Text>
                <Text style={homeStyles.title}>
                  1 vendor, {orderDetails?.order_type.length} item
                  {orderDetails?.order_type.length > 1 && 's'}
                </Text>
              </View>
              <TouchableOpacity
                style={orderDetailsStyles.viewTimeline}
                onPress={() => setShowOrderDetails(!showOrderDetails)}>
                {showOrderDetails ? (
                  <ArrowUp width={10} height={10} fill="none" />
                ) : (
                  <ArrowDown width={10} height={10} fill="none" />
                )}
              </TouchableOpacity>
            </View>
            {showOrderDetails && (
              <View>
                <Text style={homeStyles.details}>
                  {orderDetails?.vendor?.name || 'No Vendor'}
                </Text>
                <View>
                  {orderDetails?.order_type?.map((data: any, index: number) => (
                    <View key={index} style={orderDetailsStyles.orderType}>
                      <Text style={homeStyles.details}>
                        {data?.item || 'No item'}
                      </Text>
                      <Text style={homeStyles.details}>
                        {' '}
                        ₦{Intl.NumberFormat().format(data?.price) || 'No price'}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
          <View style={orderDetailsStyles.orderDetailsCont}>
            <View style={orderDetailsStyles.flexContainer}>
              <MapIcon width={20} height={20} fill="none" />
              <Text
                style={[
                  homeStyles.title,
                  {color: '#2C2C2C', fontSize: 12, fontWeight: 600},
                ]}>
                8-26 Ango Abdullahi St, Gwarinpa, 900108,FCT
              </Text>
            </View>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {justifyContent: 'space-between', marginTop: 10},
              ]}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <MsgIcon width={20} height={20} fill="none" />
                <Text
                  style={[homeStyles.title, {fontSize: 12, fontWeight: 600}]}>
                  8-26 Ango Abdullahi St, Gwarinpa, 900108,FCT
                </Text>
              </View>
              <TouchableOpacity>
                <ArrowRightIcon width={20} height={20} fill="none" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={orderDetailsStyles.orderDetailsCont}>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {justifyContent: 'space-between'},
              ]}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <PasswordIcon width={20} height={20} fill="none" />
                <Text
                  style={[
                    homeStyles.title,
                    {color: '#2C2C2C', fontSize: 12, fontWeight: 600},
                  ]}>
                  Delivery confirmation code:
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  orderDetailsStyles.viewTimeline,
                  {
                    backgroundColor: primaryColor,
                    paddingHorizontal: 15,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                  },
                ]}>
                <Text
                  style={[
                    homeStyles.title,
                    {color: '#2C2C2C', fontSize: 16, fontWeight: 600},
                  ]}>
                  {orderDetails?.delivery?.code}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={orderDetailsStyles.orderDetailsCont}>
            <Text
              style={[
                homeStyles.details,
                {color: '#2C2C2C', fontWeight: 400, fontSize: 12},
              ]}>
              Vendor details
            </Text>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {justifyContent: 'space-between', width: '100%'},
              ]}>
              <View>
                <Text style={homeStyles.details}>
                  {orderDetails?.vendor?.name}
                </Text>
                <View
                  style={[
                    orderDetailsStyles.flexContainer,
                    {gap: 1, marginTop: 5, width: 'auto'},
                  ]}>
                  <Text style={homeStyles.title}>
                    Status -{orderDetails?.vendor?.status}
                  </Text>
                  {orderDetails?.vendor?.status.toLowerCase() === 'online' ? (
                    <OnlineIcon width={7} height={7} fill="none" />
                  ) : (
                    <OfflineIcon width={7} height={7} fill="none" />
                  )}
                </View>
              </View>
              <View
                style={[
                  orderDetailsStyles.flexContainer,
                  {gap: 15, width: 'auto'},
                ]}>
                <TouchableOpacity>
                  <CallIcon width={48} height={48} fill="none" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleNavigation(orderDetails!, 'vendor')}>
                  <ChatIcon width={48} height={48} fill="none" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={orderDetailsStyles.orderDetailsCont}>
            <Text
              style={[
                homeStyles.details,
                {color: '#2C2C2C', fontWeight: 400, fontSize: 12},
              ]}>
              Rider information
            </Text>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {justifyContent: 'space-between', width: '100%'},
              ]}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <RiderPic width={48} height={48} fill="none" />
                <View>
                  <Text style={homeStyles.details}>
                    {orderDetails?.rider?.name}
                  </Text>
                  <View
                    style={[
                      orderDetailsStyles.flexContainer,
                      {gap: 2, marginTop: 5, width: 'auto'},
                    ]}>
                    <Text style={homeStyles.title}>
                      Status -{orderDetails?.rider?.status}
                    </Text>
                    <TransitIcon width={15} height={15} fill="none" />
                  </View>
                </View>
              </View>
              <View
                style={[
                  orderDetailsStyles.flexContainer,
                  {gap: 15, width: 'auto'},
                ]}>
                <TouchableOpacity>
                  <CallIcon width={48} height={48} fill="none" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleNavigation(orderDetails!, 'rider')}>
                  <ChatIcon width={48} height={48} fill="none" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={orderDetailsStyles.totalWrapper}>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {justifyContent: 'space-between', width: '100%'},
              ]}>
              <Text
                style={[
                  homeStyles.title,
                  {color: '#8E8E93', fontSize: 14, fontWeight: 600},
                ]}>
                Subtotal
              </Text>
              <Text
                style={[
                  homeStyles.title,
                  {color: '#8E8E93', fontSize: 14, fontWeight: 600},
                ]}>
                ₦{Intl.NumberFormat().format(subtotal)}
              </Text>
            </View>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {justifyContent: 'space-between', width: '100%'},
              ]}>
              <Text
                style={[
                  homeStyles.title,
                  {color: '#8E8E93', fontSize: 14, fontWeight: 600},
                ]}>
                Delivery fee
              </Text>
              <Text
                style={[
                  homeStyles.title,
                  {color: '#8E8E93', fontSize: 14, fontWeight: 600},
                ]}>
                ₦{Intl.NumberFormat().format(orderDetails?.delivery?.fee)}
              </Text>
            </View>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {justifyContent: 'space-between', width: '100%', marginTop: 5},
              ]}>
              <Text style={homeStyles.details}>Amount paid</Text>
              <Text style={homeStyles.details}>
                ₦{Intl.NumberFormat().format(Number(orderDetails?.amount))}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {showModal && (
        <TimelineModal
          action={() => dispatch(setShowModal(false))}
          navigateToDeliveryTracking={() => {
            dispatch(setShowModal(false));
            navigation.navigate('delivery', {orderDetails});
          }}
          navigateToContact={() =>
            navigation.navigate('contact', {profileDetails: customerSupport})
          }
          subTotal={subtotal}
          deliveryFee={orderDetails?.delivery?.fee}
          timeline_data={orderDetails?.delivery_timeline}
        />
      )}
    </SafeAreaView>
  );
}

export default OrderDetails;
