import React from 'react';
import {
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
import Header from '../../../../../../../../../../components/Profile/Header';
import paymentResultStyles from './paymentResultStyles';
import SuccessImg from '../../../../../../../../../../assets/images/payment/successful.svg';
import UnsuccessfulImg from '../../../../../../../../../../assets/images/payment/unsuccessfull.svg';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'payment-result'>;

function PaymentResult({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'payment-result'>>();
  const {result} = route.params;

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        isFirstPage={false}
        title={`Payment ${
          result === 'successful' ? 'successful' : 'unsuccessful'
        }`}
        directory="payment"
      />
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
            <TouchableOpacity
              style={paymentResultStyles.btnWrapper}
              onPress={() => navigation.navigate('home')}>
              <Text style={paymentResultStyles.btnText}>Next</Text>
            </TouchableOpacity>
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
