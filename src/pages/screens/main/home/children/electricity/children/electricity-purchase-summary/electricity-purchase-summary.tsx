import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../utils/status-bar-styles/status-bar-styles';
import electricityStyles from '../../electrictyStyles';
import Header from '../../../../../../../../components/Electricity/Header/Header';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import electricityPurchaseStyles from './electricityPurchaseSummaryStyles';
import Button from '../../../../../../../../components/Button/Button';
import paymentResultStyles from '../../../../../profile/children/wallet/children/fund-wallet/children/payment-result/paymentResultStyles';
import ElectricityPayment from '../payment/payment';
import { profile_data } from '../../../../../../../../utils/sample-data/profile';

// Type definition for navigation props
type Props = StackScreenProps<
  RootStackParamList,
  'electricity-purchase-summary'
>;

function ElectricityPurchaseSummary({navigation}: Props) {
  const route =
    useRoute<RouteProp<RootStackParamList, 'electricity-purchase-summary'>>();
  const {selectedProvider, amount, meterNumber, meterName, address} =
    route.params;
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);

  const navigateToPaymentResult = (paymentType: string) => {
    switch (paymentType) {
      case 'transfer':
        navigation.navigate('transfer', {amount: Number(amount), directory: 'electricity'});
        break; 
      case 'card':
        navigation.navigate('card', {amount: Number(amount), directory: 'electricity'});
        break;
      case 'wallet':
        navigation.navigate('payment-result', {result: 'successful', directory: 'electricity'});
        break;
      case 'flutterwave':
        navigation.navigate('payment-result', {result: 'successful', directory: 'electricity'});
        break;
      default:
        console.warn('Navigation route not defined for this item.');
        break;
    }
  };
    const wallet = profile_data.find(item => item.profile.type === 'My Wallet');
  
  return (
    <SafeAreaView
      style={[electricityStyles.electricityContainer, {position: 'relative'}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header handleGoBack={() => navigation.goBack()} title="Order Summary" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={electricityStyles.scrollview}>
        <View style={electricityPurchaseStyles.detailsWrapper}>
          <Text style={electricityPurchaseStyles.label}>Label</Text>
          <Text style={electricityPurchaseStyles.details}>
            {selectedProvider
              ? selectedProvider.electricity
              : 'No provider selected'}
          </Text>
        </View>
        <View style={electricityPurchaseStyles.detailsWrapper}>
          <Text style={electricityPurchaseStyles.label}>Amount (NGN)</Text>
          <Text style={electricityPurchaseStyles.details}>
          ₦{Intl.NumberFormat().format(Number(amount))}.00
          </Text>
        </View>
        <View style={electricityPurchaseStyles.detailsWrapper}>
          <Text style={electricityPurchaseStyles.label}>Meter number</Text>
          <Text style={electricityPurchaseStyles.details}>{meterNumber}</Text>
        </View>
        <View style={electricityPurchaseStyles.detailsWrapper}>
          <Text style={electricityPurchaseStyles.label}>Meter address</Text>
          <Text style={electricityPurchaseStyles.details}>{address}</Text>
        </View>
        <View style={electricityPurchaseStyles.detailsWrapper}>
          <Text style={electricityPurchaseStyles.label}>Meter name</Text>
          <Text style={electricityPurchaseStyles.details}>{meterName}</Text>
        </View>
        <View style={electricityPurchaseStyles.btnWrapper}>
          <TouchableOpacity
            style={[
              paymentResultStyles.btnWrapper,
              {backgroundColor: '#D9D9D9', borderColor: 'transparent', height: 55},
            ]}
            onPress={() => navigation.goBack()}>
            <Text style={[paymentResultStyles.btnText, {color: '#DC5513'}]}>
              Cancel
            </Text>
          </TouchableOpacity>
          <Button
            text="Process payment"
            action={() => setShowPaymentModal(true)}
          />
        </View>
      </ScrollView>

      {/* Payment Modal */}
      {showPaymentModal && (
        <ElectricityPayment
          action={() => setShowPaymentModal(false)}
          navigateTo={navigateToPaymentResult}
          wallet_bal={Number(wallet?.profile?.bal)}
        />
      )}
    </SafeAreaView>
  );
}

export default ElectricityPurchaseSummary;
