import React from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../../../../../accessories/accessoriesStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../../../utils/status-bar-styles/status-bar-styles';
import paymentResultStyles from './paymentResultStyles';
import SuccessImg from '../../../../../../../../../../assets/images/payment/successful.svg';
import UnsuccessfulImg from '../../../../../../../../../../assets/images/payment/unsuccessfull.svg';
import {profile_data} from '../../../../../../../../../../utils/sample-data/profile';
import Clipboard from '@react-native-clipboard/clipboard';
import Header from '../../../../../../../../../../components/Electricity/Header/Header';
import Button from '../../../../../../../../../../components/Button/Button';
import Navigation from '../../../../../../../../../../navigation';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'payment-result'>;

function PaymentResult({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'payment-result'>>();
  const {
    result,
    directory,
    orderDetails,
    selectedCylinder,
    dieselPrice,
    litres,
  } = route.params;

  const wallet = profile_data.find(item => item.profile.type === 'My Wallet');

  const copyToClipboard = (value: string, token: string) => {
    Clipboard.setString(value);
    Alert.alert('Copied!', `${token} copied to clipboard.`);
  };

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        handleGoBack={() => navigation.goBack()}
        title={`Payment ${
          result === 'successful' ? 'successful' : 'unsuccessful'
        }`}
        historyIconColor={directory === 'electricity' ? 'black' : ''}
      />
      {/* <Header
        goBackAction={() => navigation.goBack()}
        isFirstPage={false}
        title={`Payment ${
          result === 'successful' ? 'successful' : 'unsuccessful'
        }`}
        directory="payment"
        fromElectricity={true}
      /> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[paymentResultStyles.scrollview, {paddingHorizontal: 16}]}>
        {result === 'successful' ? (
          <View style={paymentResultStyles.paymentResultContainer}>
            <View>
              <Text style={paymentResultStyles.firstText}>Payment</Text>
              <Text style={paymentResultStyles.secondText}>Successful </Text>
            </View>
            <SuccessImg width={118} height={118} />
            <Text style={paymentResultStyles.thirdText}>
              More information on payment made, if needed.{' '}
            </Text>
            {directory === 'electricity' && (
              <>
                <Text style={paymentResultStyles.unitText}>
                  Unit recharge token
                </Text>
                <TouchableOpacity
                  style={paymentResultStyles.unitTokenWrapper}
                  onPress={() =>
                    copyToClipboard('1293  4843  4834  4930  9489', 'Token')
                  }>
                  <Text style={paymentResultStyles.tokenText}>
                    1293 4843 4834 4930 9489
                  </Text>
                </TouchableOpacity>
              </>
            )}
            {directory?.toLowerCase() === 'gas-checkout' ? (
              <>
                <Button
                  text="Next"
                  action={() =>
                    navigation.replace('gas-order-details', {
                      gasDetails: orderDetails,
                      selectedCylinder: selectedCylinder,
                      dieselPrice: dieselPrice,
                      litres: litres,
                      directory: directory,
                    })
                  }
                />

                <TouchableOpacity
                  style={paymentResultStyles.btnWrapper}
                  onPress={() => navigation.replace('home')}>
                  <Text style={paymentResultStyles.btnText}>
                    Go to dashboard
                  </Text>
                </TouchableOpacity>
              </>
            ) : directory?.toLowerCase() === 'electricity' ? (
              <TouchableOpacity
                style={paymentResultStyles.btnWrapper}
                onPress={() => navigation.replace('electricity-history')}>
                <Text style={paymentResultStyles.btnText}>Next</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={paymentResultStyles.btnWrapper}
                onPress={() => {
                  if (directory?.toLowerCase() !== 'cart') {
                    navigation.replace('user-wallet', {profileDetails: wallet});
                  } else {
                    // navigation.navigate('home')
                    navigation.replace('home');
                  }
                }}>
                <Text style={paymentResultStyles.btnText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <View style={paymentResultStyles.paymentResultContainer}>
            <View>
              <Text style={paymentResultStyles.firstText}>Payment</Text>
              <Text style={paymentResultStyles.secondText}>Unsuccessful </Text>
            </View>
            <UnsuccessfulImg width={118} height={118} />
            <Text style={paymentResultStyles.thirdText}>
              More information on payment made, if needed.{' '}
            </Text>
            <TouchableOpacity
              style={paymentResultStyles.btnWrapper}
              onPress={() => navigation.goBack()}>
              <Text style={paymentResultStyles.btnText}>
                Retry a difference payment method
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default PaymentResult;
