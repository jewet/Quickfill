import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../../../../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import SuccessImg from '../../../assets/images/auth/Done Check.svg';
import CloseIcon from '../../../../../../../../assets/images/electricity/close_btn.svg';
import {payment_type} from '../../../../../../../../utils/sample-data/payment';
import SelectedIcon from '../../../../../../../../assets/images/electricity/selected-bill.svg';
import UnSelectedIcon from '../../../../../../../../assets/images/electricity/unselected-bill.svg';
import electricityProviderStyles from '../../../../../home/children/electricity/children/electricity-provider/electricityProviderStyles';
import electricityPaymentStyles from '../../../../../home/children/electricity/children/payment/paymentStyles';
import {TextInput} from 'react-native-gesture-handler';
import orderDetailsStyles from '../../../../../orders/children/order-details/orderDetailsStyles';
import fundWalletStyles from './fundWalletStyles';

interface Props {
  action: () => void;
  navigation: any;
}

function FundWallet({action, navigation}: Props) {
  const [isSelected, setIsSelected] = useState<number | null>();
  const [amount, setAmount] = useState<string>('');

  //defined navigation links
  const navigateToPaymentResult = (paymentType: string) => {
    switch (paymentType) {
      case 'transfer':
        navigation.navigate('transfer', {amount: 20000});
        break;
      case 'card':
        navigation.navigate('card', {amount: 20000});
        break;
      case 'wallet':
        navigation.navigate('payment-result', {result: 'successful'});
        break;
      case 'flutterwave':
        navigation.navigate('payment-result', {result: 'unsuccessful'});
        break;
      default:
        console.warn('Navigation route not defined for this item.');
        break;
    }
  };

  const handleContinue = () => {
    if (isSelected === null) {
      console.warn('No payment type selected');
      return;
    }
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      console.warn('Please enter a valid amount');
      return;
    }
    const selectedPaymentType = payment_type[isSelected].type;
    navigateToPaymentResult(selectedPaymentType);
  };
  return (
    <SafeAreaView style={electricityPaymentStyles.modalContainer}>
      <View style={electricityPaymentStyles.modalBg}></View>
      <View style={electricityPaymentStyles.modalCont}>
        <View style={electricityPaymentStyles.paymentTopWrapper}>
          <View style={electricityPaymentStyles.paymentTop}>
            <TouchableOpacity>
              <Text
                style={[electricityPaymentStyles.topText, {color: '#919191'}]}>
                Help
              </Text>
            </TouchableOpacity>
            <Text style={electricityPaymentStyles.topText}>Fund wallet</Text>
            <TouchableOpacity onPress={action}>
              <CloseIcon
                width={80}
                height={80}
                fill="none"
                style={{marginRight: -20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: '100%', paddingHorizontal: 16}}>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              fundWalletStyles.fundWalletContainer,
            ]}>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {width: 'auto', alignItems: 'center'},
              ]}>
              <View style={fundWalletStyles.nairaWrapper}>
                <Text style={fundWalletStyles.naira}>₦</Text>
              </View>
              <TextInput
                placeholder="Enter amount"
                style={fundWalletStyles.input}
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
              />
            </View>
            <View style={fundWalletStyles.nairaWrapper}>
              <Text style={fundWalletStyles.naira}>.00</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            electricityProviderStyles.electricityDataWrapper,
            {
              backgroundColor: '#F7F6F2',
              borderRadius: 0,
              paddingHorizontal: 20,
            },
          ]}>
          {payment_type.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={electricityProviderStyles.electricityData}
              onPress={() => setIsSelected(index)}>
              <data.icon width={24} height={24} fill="none" />
              <View style={electricityProviderStyles.electricityTextWrapper}>
                <Text
                  style={[
                    electricityProviderStyles.electricityText,
                    {fontWeight: 600},
                  ]}>
                  Pay with {data.type}
                </Text>
              </View>
              {isSelected === index ? (
                <SelectedIcon width={24} height={24} fill="none" />
              ) : (
                <UnSelectedIcon width={24} height={24} fill="none" />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <Button text="Continue" action={handleContinue} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default FundWallet;
