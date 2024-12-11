import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackArrow from '../../../../../../../../../../../../assets/images/auth/tabler_arrow-right.svg';
import orderDetailsStyles from './orderDetailsStyles';
import NoteIcon from '../../../../../../../../../../../../assets/images/orders/tabler_info-circle.svg';
import MapIcon from '../../../../../../../../../../../../assets/images/orders/tabler_map-pin.svg';
import MsgIcon from '../../../../../../../../../../../../assets/images/orders/tabler_message.svg';
import ArrowRightIcon from '../../../../../../../../../../../../assets/images/orders/tabler_chevron-right.svg';
import ArrowUp from '../../../../../../../../../../../../assets/images/orders/arrow-up.svg';
import ArrowDown from '../../../../../../../../../../../../assets/images/orders/arrow0down.svg';
import PasswordIcon from '../../../../../../../../../../../../assets/images/orders/tabler_lock-password.svg';
import OnlineIcon from '../../../../../../../../../../../../assets/images/orders/on_line.svg';
import OfflineIcon from '../../../../../../../../../../../../assets/images/orders/offline.svg';
import ChatIcon from '../../../../../../../../../../../../assets/images/orders/msg.svg';
import CallIcon from '../../../../../../../../../../../../assets/images/orders/call.svg';
import TransitIcon from '../../../../../../../../../../../../assets/images/orders/rider.svg';
import {RootStackParamList} from '../../../../../../../../../../../../utils/nav-routes/types';
import {OrdersProps} from '../../../../../../../../../../../../utils/sample-data/orders';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../../../../../utils/status-bar-styles/status-bar-styles';
import orderStyles from '../../../../../../../../../orders/orderStyles';
import electricityStyles from '../../../../../../../electricity/electrictyStyles';
import electricityPaymentStyles from '../../../../../../../electricity/children/payment/paymentStyles';
import homeStyles from '../../../../../../../../home-styles';
import {primaryColor} from '../../../../../../../../../../onboarding/splash/splashstyles';
import TimelineModal from '../../../../../../../../../../../../components/TimelineModal/TimelineModal';
import {profile_data} from '../../../../../../../../../../../../utils/sample-data/profile';
import FullProgressBar from '../../../../../../../../../../../../assets/images/orders/full_progress_bar.svg';
import HalfProgressBar from '../../../../../../../../../../../../assets/images/orders/half_progress_bar.svg';
import BlankProgressBar from '../../../../../../../../../../../../assets/images/orders/blank_progress_bar.svg';

type Props = StackScreenProps<RootStackParamList, 'gas-order-details'>;

function GasOrderDetails({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'gas-order-details'>>();
  const {gasDetails, selectedCylinder} = route.params;
  const [showOrderDetails, setShowOrderDetails] = useState<boolean>(false);

  const item_amt = Number(selectedCylinder?.amount);
  const delivery_fee = Number(gasDetails?.delivery_fee);
  const total = item_amt + delivery_fee;

  const profileDetails = profile_data.filter(
    item => item.profile.type === 'Contact/support',
  );
  console.log('support: ', profileDetails);

  const handleNavigation = (
    orderDetails: OrdersProps,
    target: 'rider' | 'vendor',
  ) => {
    navigation.navigate('chat', {orderDetails, target});
  };
  const [showModal, setShowModal] = useState<boolean>(false);

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
        <Text style={electricityStyles.topText}>
          Order {gasDetails?.order_no}
        </Text>
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
                onPress={() => setShowModal(true)}>
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
              {gasDetails?.delivery_timeline?.map(
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
                <Text style={homeStyles.title}>1 vendor, 1 item</Text>
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
                  {gasDetails?.name || 'No Vendor'}
                </Text>
                <View>
                  <View style={orderDetailsStyles.orderType}>
                    <Text style={homeStyles.details}>
                      {`${selectedCylinder?.kg}kg Gas Refill` || 'No item'}
                    </Text>
                    <Text style={homeStyles.details}>
                      {' '}
                      ₦
                      {Intl.NumberFormat().format(selectedCylinder?.amount) ||
                        'No price'}
                    </Text>
                  </View>
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
                  Add extra delivery note e.g. estate pass
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
                    backgroundColor: '#F7F6F2',
                    paddingHorizontal: 15,
                    borderRadius: 30,
                    paddingVertical: 5,
                  },
                ]}>
                <Text
                  style={[
                    homeStyles.title,
                    {color: primaryColor, fontSize: 12, fontWeight: 600},
                  ]}>
                  {gasDetails?.delivery_code}
                </Text>
              </TouchableOpacity>
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
                ₦{Intl.NumberFormat().format(item_amt)}
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
                ₦{Intl.NumberFormat().format(delivery_fee)}
              </Text>
            </View>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {justifyContent: 'space-between', width: '100%', marginTop: 5},
              ]}>
              <Text style={homeStyles.details}>Amount paid</Text>
              <Text style={homeStyles.details}>
                ₦{Intl.NumberFormat().format(total)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {showModal && (
        <TimelineModal
          action={() => setShowModal(false)}
          navigateTo={() => {
            setShowModal(false);
            navigation.goBack();
          }}
          navigateToContact={() =>
            navigation.navigate('contact', {profileDetails})
          }
          subTotal={item_amt}
          deliveryFee={delivery_fee}
          timeline_data={gasDetails?.delivery_timeline}
        />
      )}
    </SafeAreaView>
  );
}

export default GasOrderDetails;
