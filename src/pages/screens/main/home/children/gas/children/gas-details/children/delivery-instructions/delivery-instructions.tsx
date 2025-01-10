import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import PlusIcon from '../../../../../../../../../../assets/images/gas/tabler_plus.svg';
import MasterCard from '../../../../../../../../../../assets/images/gas/logos_mastercard.svg';
import SelectedIcon from '../../../../../../../../../../assets/images/gas/selected.svg';
import UnSelectedIcon from '../../../../../../../../../../assets/images/gas/unselected.svg';
import DeliveryIcon from '../../../../../../../../../../assets/images/gas/delivery.svg';
import MapIcon from '../../../../../../../../../../assets/images/gas/tabler_map-pin.svg';
import CallIcon from '../../../../../../../../../../assets/images/gas/tabler_phone.svg';
import NoteIcon from '../../../../../../../../../../assets/images/gas/tabler_message.svg';
import ArrowRight from '../../../../../../../../../../assets/images/gas/tabler_chevron-right.svg';
import {RootStackParamList} from '../../../../../../../../../../utils/nav-routes/types';
import {
  profile_data,
  ProfileProps,
} from '../../../../../../../../../../utils/sample-data/profile';
import accessoriesStyles from '../../../../../../../accessories/accessoriesStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../../../utils/status-bar-styles/status-bar-styles';
import Header from '../../../../../../../../../../components/Profile/Header';
import favouritesStyles from '../../../../../../../profile/children/favourites/favouritesStyles';
import orderDetailsStyles from '../../../../../../../orders/children/order-details/orderDetailsStyles';
import Button from '../../../../../../../../../../components/Button/Button';
import GoBack from '../../../../../../../../../../assets/images/payment/tabler_arrow-right.svg';
import headerStyles from '../../../../../../../../../../components/Profile/HeaderStyles';
import electricityPaymentStyles from '../../../../../electricity/children/payment/paymentStyles';
import addressStyles from '../../../../../../../profile/children/address/addressStyles';
import {primaryColor} from '../../../../../../../../onboarding/splash/splashstyles';
import electricityProviderStyles from '../../../../../electricity/children/electricity-provider/electricityProviderStyles';
import {payment_opt} from '../../../../../../../../../../utils/sample-data/payment';
import homeStyles from '../../../../../../home-styles';
import checkoutStyles from '../checkout/checkoutStyles';
import complaintsStyles from '../../../../../../../profile/children/help/children/complaints/complaintsStyles';
import inputStyles from '../../../../../../../../../../components/Input/InputStyles';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'delivery-instructions'>;

function DeliveryInstructions({navigation}: Props) {
  const route =
    useRoute<RouteProp<RootStackParamList, 'delivery-instructions'>>();

  const addressDetails = profile_data
    .filter(item => item.profile.type === 'Saved Addresses')
    .map(item => item.profile.location);
  const personalDetails = profile_data
    .find(item => item.profile.type === 'My Details')
    ?.profile.details?.find(
      (detail: {title?: string; phone_number?: string}) =>
        detail.title === 'Phone number',
    );

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={[
          headerStyles.headerWrapper,
          headerStyles.multipleContent,
          {alignItems: 'center'},
        ]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <GoBack width={24} height={24} fill="none" />
        </TouchableOpacity>
        <View>
          <Text style={headerStyles.title}>Delivery instructions</Text>
        </View>

        <View></View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[favouritesStyles.scrollview, {paddingHorizontal: 16}]}>
        <Text style={inputStyles.label}>Add delivery note</Text>
        <TextInput
          placeholder="Type message here.."
          style={[complaintsStyles.textArea, {marginTop: 10}]}
        />
        <Button text="Submit" action={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default DeliveryInstructions;
