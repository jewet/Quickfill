import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
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
import {RootStackParamList} from '../../../../../../../../../../../../utils/nav-routes/types';
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
import {RootState} from '../../../../../../../../../../../../utils/redux/store/store';
import {useDispatch, useSelector} from 'react-redux';
import {
  setDeliveryCode,
  setShowAlert,
  setShowModal,
  setShowOrderDetails,
  setShowDeliveryInput,
  setShowDeliveryFeedback,
} from '../../../../../../../../../../../../utils/redux/slice/gas';
import paymentResultStyles from '../../../../../../../../../profile/children/wallet/children/fund-wallet/children/payment-result/paymentResultStyles';
import {moderateScale} from '../../../../../../../../../accessories/accessoriesStyles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Clipboard from '@react-native-clipboard/clipboard';
import AlertModal from '../../../../../../../../../../../../components/Alert/Alert';
import DeliveryFeedback from '../../../../../../../../../../../../components/Delivery/Feedback/Feedback';
import DeliveryInputModal from '../../../../../../../../../../../../components/Delivery/InputModal/InputModal';
import Toast from 'react-native-toast-message';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'gas-order-details'>;

function GasOrderDetails({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route = useRoute<RouteProp<RootStackParamList, 'gas-order-details'>>();
  const {orderDetails, selectedCylinder, dieselPrice, litres} = route.params;
  const dispatch = useDispatch();
  const {
    showOrderDetails,
    showModal,
    showAlert,
    deliveryCode,
    showDeliveryInput,
    showDeliveryFeedback,
  } = useSelector((state: RootState) => state.gas);

  const item_amt = dieselPrice
    ? Number(dieselPrice)
    : Number(selectedCylinder?.amount);
  const delivery_fee = Number(orderDetails?.delivery_fee);
  const service_charge = Number(200);
  const total = item_amt + delivery_fee + service_charge;

  const customerSupport = profile_data.find(
    item => item.profile.type === 'Contact/support',
  );
  const help = profile_data.find(item => item.profile.type === 'Help/feedback');
  const copyToClipboard = (value: string | number) => {
    Clipboard.setString(String(value)); // Ensure value is a string
    dispatch(setShowAlert(true));
  };
  // Show Toast and Input Modal after 1 second
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     Toast.show({
  //       type: 'success',
  //       text1: 'Dear Customer',
  //       text2: 'Your Order has arrived, copy your delivery code.',
  //     });
  //     dispatch(setShowDeliveryInput(true)); // Show Delivery Input Modal
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [dispatch]);
  useEffect(() => {
    // Show the toast message first
    Toast.show({
      type: 'success',
      text1: 'Dear Customer',
      text2: `Your Order has arrived, Proceed with delivery code (${orderDetails?.delivery_code}).`,
    });

    // Delay showing the DeliveryInputModal until the toast disappears
    const timer = setTimeout(() => {
      dispatch(setShowDeliveryInput(true)); // Show Delivery Input Modal
      dispatch(setShowAlert(false));
    }, 3000); // Adjust the delay to match your toast duration (e.g., 4 seconds)

    return () => clearTimeout(timer);
  }, [dispatch]);

  // Handle "Continue" button in Delivery Input Modal
  const handleDeliveryCodeSubmit = () => {
      dispatch(setShowDeliveryFeedback(true)); // Show Delivery Feedback Modal
      dispatch(setShowDeliveryInput(false)); // Hide Delivery Input Modal
  };
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
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            dispatch(setShowDeliveryInput(false));
          }}>
          <BackArrow width={26} height={26} fill="none" />
        </TouchableOpacity>
        <Text style={electricityStyles.topText}>
          Order {orderDetails?.order_no}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('help', {profileDetails: help})}>
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
                <Text style={[homeStyles.title, {color: '#A8A8A3'}]}>
                  Delivery status
                </Text>
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
                      <FullProgressBar width={90} height={8} />
                    ) : data?.itsTurn === true && data?.pending === true ? (
                      <HalfProgressBar width={90} height={8} />
                    ) : (
                      <BlankProgressBar width={90} height={8} />
                    )}
                  </View>
                ),
              )}
            </View>
            <View style={orderDetailsStyles.flexContainer}>
              <NoteIcon width={20} height={20} fill="none" />
              <Text
                style={[
                  homeStyles.title,
                  {fontSize: 12, fontWeight: 600, color: '#2C2C2C'},
                ]}>
                Your charge will be added to your wallet balance
              </Text>
            </View>
          </View>
          <View style={orderDetailsStyles.orderDetailsCont}>
            <View style={orderDetailsStyles.oderDetailsDeliveryStatus}>
              <View>
                <Text style={homeStyles.details}>Order details</Text>
                <Text style={[homeStyles.title, {color: '#A8A8A3'}]}>
                  1 vendor, 1 item
                </Text>
              </View>
              <TouchableOpacity
                style={orderDetailsStyles.viewTimeline}
                onPress={() =>
                  dispatch(setShowOrderDetails(!showOrderDetails))
                }>
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
                  {orderDetails?.name || 'No Vendor'}
                </Text>
                <View>
                  <View style={orderDetailsStyles.orderType}>
                    {litres ? (
                      <>
                        <Text style={homeStyles.details}>
                          {`${litres} Litres Refill` || 'No item'}
                        </Text>
                        <Text style={homeStyles.details}>
                          {' '}
                          ₦
                          {Intl.NumberFormat().format(Number(dieselPrice)) ||
                            'No price'}
                        </Text>
                      </>
                    ) : (
                      <>
                        <Text style={homeStyles.details}>
                          {`${selectedCylinder?.kg}kg Gas Refill` || 'No item'}
                        </Text>
                        <Text style={homeStyles.details}>
                          {' '}
                          ₦
                          {Intl.NumberFormat().format(
                            selectedCylinder?.amount,
                          ) || 'No price'}
                        </Text>
                      </>
                    )}
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
              <TouchableOpacity
                style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}
                onPress={() => navigation.navigate('delivery-instructions')}>
                <MsgIcon width={20} height={20} fill="none" />
                <Text
                  style={[
                    homeStyles.title,
                    {fontSize: 12, fontWeight: 600, color: '#A8A8A3'},
                  ]}>
                  Add extra delivery note e.g. estate pass
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('delivery-instructions')}>
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
                    paddingVertical: 10,
                  },
                ]}
                onPress={() => copyToClipboard(orderDetails?.delivery_code)}>
                <Text
                  style={[
                    homeStyles.title,
                    {
                      color: primaryColor,
                      fontSize: moderateScale(14),
                      fontWeight: 700,
                    },
                  ]}>
                  {orderDetails?.delivery_code}
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
                {justifyContent: 'space-between', width: '100%'},
              ]}>
              <Text
                style={[
                  homeStyles.title,
                  {color: '#8E8E93', fontSize: 14, fontWeight: 600},
                ]}>
                Service charge
              </Text>
              <Text
                style={[
                  homeStyles.title,
                  {color: '#8E8E93', fontSize: 14, fontWeight: 600},
                ]}>
                ₦{Intl.NumberFormat().format(Number(service_charge))}
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
            <TouchableOpacity
              style={paymentResultStyles.btnWrapper}
              onPress={() => navigation.replace('home')}>
              <Text style={paymentResultStyles.btnText}>Back to dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Toast />
      {showModal && (
        <TimelineModal
          action={() => dispatch(setShowModal(false))}
          navigateToContact={() =>
            navigation.navigate('contact', {profileDetails: customerSupport})
          }
          subTotal={item_amt}
          deliveryFee={delivery_fee}
          timeline_data={orderDetails?.delivery_timeline}
          navigateToDeliveryTracking={() => {
            dispatch(setShowModal(false));
            navigation.navigate('delivery', {orderDetails: orderDetails});
          }}
        />
      )}
      {showAlert && (
        <AlertModal
          topText="Copied!"
          bottomText="Delivery code copied to clipboard."
          closeModal={() => dispatch(setShowAlert(false))}
          ok={true}
        />
      )}
      {showDeliveryInput && (
        <DeliveryInputModal
          closeModal={handleDeliveryCodeSubmit}
          value={orderDetails?.delivery_code}
        />
      )}
      {showDeliveryFeedback && (
        <DeliveryFeedback
          closeModal={() => {
            dispatch(setShowDeliveryFeedback(false));
            dispatch(setShowDeliveryInput(false));
          }}
          orderDetails={orderDetails}
        />
      )}
    </SafeAreaView>
  );
}

export default GasOrderDetails;
