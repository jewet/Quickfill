import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CloseIcon from '../../assets/images/electricity/close_btn.svg';
import TrackIcon from '../../assets/images/orders/tabler_navigation.svg';
import electricityPaymentStyles from '../../pages/screens/main/home/children/electricity/children/payment/paymentStyles';
import orderDetailsStyles from '../../pages/screens/main/orders/children/order-details/orderDetailsStyles';
import addressStyles from '../../pages/screens/main/profile/children/address/addressStyles';
import FullProgressDot from '../../assets/images/gas/full_progress_dot.svg';
import HalfProgressDot from '../../assets/images/gas/half_progress_dot.svg';
import BlankProgressDot from '../../assets/images/gas/blank_progress_dot.svg';
import FullProgressLine from '../../assets/images/gas/full_progress_line.svg';
import BlankProgressLine from '../../assets/images/gas/blank_progress_line.svg';
import homeStyles from '../../pages/screens/main/home/home-styles';
import timelineModalStyles from './TimelineModalStyles';

interface Props {
  action: () => void;
  navigateToDeliveryTracking: () => void;
  navigateToContact: () => void;
  subTotal: number;
  deliveryFee: number;
  timeline_data: any;
}

function TimelineModal({
  action,
  navigateToDeliveryTracking,
  navigateToContact,
  subTotal,
  deliveryFee,
  timeline_data,
}: Props) {
  return (
    <SafeAreaView style={electricityPaymentStyles.modalContainer}>
      <View style={electricityPaymentStyles.modalBg}></View>
      <View style={[electricityPaymentStyles.modalCont, {paddingBottom: 50}]}>
        <View style={electricityPaymentStyles.paymentTopWrapper}>
          <TouchableOpacity
            onPress={action}
            style={{display: 'flex', alignItems: 'flex-end'}}>
            <CloseIcon
              width={80}
              height={80}
              fill="none"
              style={{marginRight: -20, marginTop: -20}}
            />
          </TouchableOpacity>
          <View>
            <View
              style={[
                orderDetailsStyles.oderDetailsDeliveryStatus,
                {
                  borderBottomWidth: 1,
                  paddingBottom: 20,
                  borderBottomColor: '#A8A8A3',
                },
              ]}>
              <View>
                <Text style={homeStyles.title}>Order status</Text>
                <Text style={homeStyles.details}>Waiting for Rider</Text>
              </View>
              <TouchableOpacity
                style={orderDetailsStyles.viewTimeline}
                onPress={navigateToContact}>
                <Text
                  style={[
                    homeStyles.title,
                    {color: '#FFB600', fontSize: 12, fontWeight: 600},
                  ]}>
                  Contact support
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: 300, width: '100%'}}>
          <View style={{width: '100%', paddingHorizontal: 16}}>
            <TouchableOpacity
              onPress={navigateToDeliveryTracking}
              style={timelineModalStyles.trackWrapper}>
              <TrackIcon width={18} height={18} />
              <Text style={timelineModalStyles.trackText}>Track order</Text>
            </TouchableOpacity>
          </View>
          {timeline_data?.map((data: any, index: number) => (
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {justifyContent: 'space-between', paddingHorizontal: 16},
              ]}
              key={index}>
              <View style={[orderDetailsStyles.flexContainer, {width: '65%'}]}>
                <View>
                  {data?.itsTurn === true && data?.pending === false ? (
                    <View style={timelineModalStyles.progressWrapper}>
                      <FullProgressDot width={24} height={24} fill="none" />
                      <FullProgressLine width={56} fill="none" />
                    </View>
                  ) : data?.itsTurn === true && data?.pending === true ? (
                    <View style={timelineModalStyles.progressWrapper}>
                      <HalfProgressDot width={24} height={24} fill="none" />
                      <BlankProgressLine width={56} fill="none" />
                    </View>
                  ) : (
                    <View style={timelineModalStyles.progressWrapper}>
                      <BlankProgressDot width={24} height={24} fill="none" />
                      <BlankProgressLine width={56} fill="none" />
                    </View>
                  )}
                </View>
                <View>
                  <Text style={addressStyles.location}>{data?.status}</Text>
                  <Text style={addressStyles.locationBottom}>{data?.des}</Text>
                </View>
              </View>
              <Text style={addressStyles.rightText}>
                {data?.pending === true ? 'Pending' : 'Done'}
              </Text>
            </View>
          ))}
        </ScrollView>
        <View style={[orderDetailsStyles.totalWrapper, {paddingBottom: 0}]}>
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
              ₦{Intl.NumberFormat().format(subTotal)}
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
              ₦{Intl.NumberFormat().format(deliveryFee)}
            </Text>
          </View>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {justifyContent: 'space-between', width: '100%', marginTop: 5},
            ]}>
            <Text style={homeStyles.details}>Amount paid</Text>
            <Text style={homeStyles.details}>
              ₦{Intl.NumberFormat().format(Number(subTotal + deliveryFee))}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TimelineModal;
