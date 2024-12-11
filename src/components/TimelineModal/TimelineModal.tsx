import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CloseIcon from '../../assets/images/electricity/close_btn.svg';
import SelectedIcon from '../../assets/images/electricity/selected-bill.svg';
import UnSelectedIcon from '../../assets/images/electricity/unselected-bill.svg';
import electricityPaymentStyles from '../../pages/screens/main/home/children/electricity/children/payment/paymentStyles';
import electricityProviderStyles from '../../pages/screens/main/home/children/electricity/children/electricity-provider/electricityProviderStyles';
import {payment_type} from '../../utils/sample-data/payment';
import Button from '../Button/Button';
import PlusIcon from '../../assets/images/profile/tabler_plus.svg';
import orderDetailsStyles from '../../pages/screens/main/orders/children/order-details/orderDetailsStyles';
import LocationIcon from '../../assets/images/profile/tabler_location-pin.svg';
import addressStyles from '../../pages/screens/main/profile/children/address/addressStyles';
import HomeIcon from '../../assets/images/profile/tabler_home.svg';
import WorkIcon from '../../assets/images/profile/tabler_briefcase.svg';
import FullProgressDot from '../../assets/images/gas/full_progress_dot.svg';
import HalfProgressDot from '../../assets/images/gas/half_progress_dot.svg';
import BlankProgressDot from '../../assets/images/gas/blank_progress_dot.svg';
import FullProgressLine from '../../assets/images/gas/full_progress_line.svg';
import BlankProgressLine from '../../assets/images/gas/blank_progress_line.svg';
import homeStyles from '../../pages/screens/main/home/home-styles';
import timelineModalStyles from './TimelineModalStyles';

interface Props {
  action: () => void;
  navigateTo: () => void;
  navigateToContact: () => void;
  subTotal: number;
  deliveryFee: number;
  timeline_data: any;
}

function TimelineModal({
  action,
  navigateTo,
  navigateToContact,
  subTotal,
  deliveryFee,
  timeline_data,
}: Props) {
  const [isSelected, setIsSelected] = useState<number | null>();
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
            <View style={orderDetailsStyles.oderDetailsDeliveryStatus}>
              <View>
                <Text style={homeStyles.title}>Delivery status</Text>
                <Text style={homeStyles.details}>Waiting for vendor</Text>
              </View>
              <TouchableOpacity
                style={orderDetailsStyles.viewTimeline}>
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
        <ScrollView showsVerticalScrollIndicator={false} style={{height: 280}}>
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
