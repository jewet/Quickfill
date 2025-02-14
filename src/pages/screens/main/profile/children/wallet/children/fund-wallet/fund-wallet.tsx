import React from 'react';
import {Text, TouchableOpacity, useColorScheme, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../../../../../../components/Button/Button';
import CloseIcon from '../../../../../../../../assets/images/electricity/close_btn.svg';
import {payment_type} from '../../../../../../../../utils/sample-data/payment';
import SelectedIcon from '../../../../../../../../assets/images/electricity/selected-bill.svg';
import UnSelectedIcon from '../../../../../../../../assets/images/electricity/unselected-bill.svg';
import electricityProviderStyles from '../../../../../home/children/electricity/children/electricity-provider/electricityProviderStyles';
import electricityPaymentStyles from '../../../../../home/children/electricity/children/payment/paymentStyles';
import {TextInput} from 'react-native-gesture-handler';
import orderDetailsStyles from '../../../../../orders/children/order-details/orderDetailsStyles';
import fundWalletStyles from './fundWalletStyles';
import {profile_data} from '../../../../../../../../utils/sample-data/profile';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../../utils/redux/store/store';
import {
  setAmount,
  setIsSelected,
  setShowAlert,
} from '../../../../../../../../utils/redux/slice/profile';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AlertModal from '../../../../../../../../components/Alert/Alert';
import Toast from 'react-native-toast-message';

interface Props {
  action: () => void;
  navigation: any;
}

function FundWallet({action, navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const dispatch = useDispatch();
  const {amount, isSelected, showAlert} = useSelector(
    (state: RootState) => state.profile,
  );

  //defined navigation links
  const navigateToPaymentResult = (paymentType: string) => {
    switch (paymentType) {
      case 'transfer':
        navigation.navigate('transfer', {amount: amount});
        break;
      case 'card':
        navigation.navigate('card', {amount: amount});
        break;
      // case 'wallet':
      //   navigation.replace('payment-result', {result: 'successful'});
      //   break;
      case 'flutterwave':
        navigation.navigate('payment-result', {result: 'unsuccessful'});
        break;
      default:
        console.warn('Navigation route not defined for this item.');
        break;
    }
  };

  const handleAmountChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    dispatch(setAmount(numericValue));
  };

  const formattedAmount = amount
    ? Intl.NumberFormat().format(Number(amount))
    : '';

  const handleContinue = () => {
    if (isSelected === null) {
      // dispatch(setShowAlert(true))
      Toast.show({
        type: 'error',
        text1: 'Empty payment type',
        text2: 'No payment type selected',
      });
      return;
    }
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      Toast.show({
        type: 'error',
        text1: 'Invalid amount',
        text2: 'Please enter a valid amount',
      });
      // dispatch(setShowAlert(true))
      return;
    }
    const selectedPaymentType = payment_type[isSelected].type;
    navigateToPaymentResult(selectedPaymentType);
    action();
  };
  const wallet = profile_data.find(item => item.profile.type === 'My Wallet');
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
                value={formattedAmount}
                onChangeText={handleAmountChange}
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
            <View key={index}>
              {data.type.toLowerCase() !== 'wallet' && (
                <TouchableOpacity
                  style={electricityProviderStyles.electricityData}
                  onPress={() => dispatch(setIsSelected(index))}>
                  <data.icon width={24} height={24} fill="none" />
                  <View
                    style={electricityProviderStyles.electricityTextWrapper}>
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
              )}
            </View>
          ))}
        </View>
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <Button text="Continue" action={handleContinue} />
        </View>
      </View>
      <Toast />
      {showAlert && (
        <AlertModal
          topText="Notice"
          bottomText="Please enter a valid amount"
          closeModal={() => dispatch(setShowAlert(false))}
        />
      )}
    </SafeAreaView>
  );
}

export default FundWallet;
