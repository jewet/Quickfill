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

interface Props {
  action: () => void;
  navigateTo: () => void;
  navigateToAddress: () => void;
}

function AddressModal({action, navigateTo, navigateToAddress}: Props) {
  const [isSelected, setIsSelected] = useState<number | null>();
  return (
    <SafeAreaView style={electricityPaymentStyles.modalContainer}>
      <View style={electricityPaymentStyles.modalBg}></View>
      <View style={[electricityPaymentStyles.modalCont, {height: '60%'}]}>
        <View style={electricityPaymentStyles.paymentTopWrapper}>
          <View style={electricityPaymentStyles.paymentTop}>
            <Text
              style={[
                electricityPaymentStyles.topText,
                {marginTop: 20, marginBottom: 20, fontWeight: 700},
              ]}>
              Saved addresses
            </Text>
            <TouchableOpacity onPress={action}>
              <CloseIcon
                width={80}
                height={80}
                fill="none"
                style={{marginRight: -20, marginTop: -20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%'}}>
          <TouchableOpacity
            style={[
              orderDetailsStyles.flexContainer,
              {
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                paddingHorizontal: 16,
                marginBottom: 20,
              },
            ]}
            onPress={navigateToAddress}>
            <TouchableOpacity>
              <PlusIcon width={24} height={24} fill="none" />
            </TouchableOpacity>
            <Text
              style={{
                color: '#FFB600',
                fontWeight: 700,
                fontSize: 14,
              }}>
              Add new address
            </Text>
          </TouchableOpacity>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: '#E5E5EA',
                paddingBottom: 20,
                paddingHorizontal: 16,
              },
            ]}>
            <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
              <LocationIcon width={24} height={24} fill="none" />
              <View>
                <Text style={addressStyles.location}>Current location</Text>
                <Text style={addressStyles.locationBottom}>
                  8-26 Ango Abdullahi St, e, Abuja..
                </Text>
              </View>
            </View>
            <SelectedIcon width={24} height={24} fill="none" />
          </View>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 20,
                borderBottomWidth: 1,
                borderColor: '#E5E5EA',
              },
            ]}>
            <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
              <HomeIcon width={24} height={24} fill="none" />
              <Text style={addressStyles.leftText}>Home</Text>
            </View>
            <Text style={addressStyles.rightText} onPress={navigateToAddress}>
              Add address
            </Text>
          </View>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 20,
                borderBottomWidth: 1,
                borderColor: '#E5E5EA',
              },
            ]}>
            <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
              <WorkIcon width={24} height={24} fill="none" />
              <Text style={addressStyles.leftText}>Work</Text>
            </View>
            <Text style={addressStyles.rightText} onPress={navigateToAddress}>
              Add address
            </Text>
          </View>
        </View>
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <Button text="Save changes" action={action} />
        </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default AddressModal;
