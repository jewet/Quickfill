import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import electricityStyles from '../../../electrictyStyles';
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Header from '../../../../../../../../../components/Electricity/Header/Header';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../../../../../../utils/nav-routes/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ElectricityTransactionProps} from '../../../../../../../../../utils/sample-data/electricity';
import historyDetailsStyles from './historyDetailsStyles';
import Clipboard from '@react-native-clipboard/clipboard';
import paymentResultStyles from '../../../../../../profile/children/wallet/children/fund-wallet/children/payment-result/paymentResultStyles';
import AlertModal from '../../../../../../../../../components/Alert/Alert';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../../../utils/redux/store/store';
import {setShowAlert} from '../../../../../../../../../utils/redux/slice/electricity';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for navigation props
type Props = StackScreenProps<
  RootStackParamList,
  'electricity-history-details'
>;

function HistoryDetails({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route =
    useRoute<RouteProp<RootStackParamList, 'electricity-history-details'>>();
  const {historyDetails}: {historyDetails?: ElectricityTransactionProps} =
    route.params || {};
  const dispatch = useDispatch();

  const {showAlert} = useSelector((state: RootState) => state.electricity);
  const copyToClipboard = (value: string, token: string) => {
    Clipboard.setString(value);
    dispatch(setShowAlert(true));
  };
  const total =
    Number(historyDetails?.vat) +
    Number(historyDetails?.service_charge) +
    Number(historyDetails?.utility_cost);
  return (
    <SafeAreaView style={[electricityStyles.electricityContainer]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        handleGoBack={() => navigation.goBack()}
        title=" Transaction details"
        historyIconColor="yellow"
        historyNav={() => navigation.navigate('electricity-history')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[electricityStyles.scrollview]}>
        <View style={historyDetailsStyles.historyWrapper}>
          <View style={{width: '100%'}}>
            <Text style={historyDetailsStyles.title}>TOKEN (stdToken)</Text>
            <TouchableOpacity
              style={[paymentResultStyles.unitTokenWrapper, {marginTop: '2%'}]}
              onPress={() =>
                copyToClipboard('1293  4843  4834  4930  9489', 'Token')
              }>
              <Text style={paymentResultStyles.tokenText}>
                {historyDetails?.token}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={historyDetailsStyles.title}>Customer Name</Text>
            <Text style={historyDetailsStyles.details}>
              {historyDetails?.customer_name}
            </Text>
          </View>
          <View>
            <Text style={historyDetailsStyles.title}>Address</Text>
            <Text style={historyDetailsStyles.details}>
              {historyDetails?.address}
            </Text>
          </View>
          <View>
            <Text style={historyDetailsStyles.title}>Meter No</Text>
            <Text style={historyDetailsStyles.details}>
              {historyDetails?.meter_no}
            </Text>
          </View>
          <View>
            <Text style={historyDetailsStyles.title}>Date & Time</Text>
            <Text style={historyDetailsStyles.details}>
              {historyDetails?.date} • {historyDetails?.date}
            </Text>
          </View>
          <View>
            <Text style={historyDetailsStyles.title}>Provider</Text>
            <Text style={historyDetailsStyles.details}>
              {historyDetails?.provider}
            </Text>
          </View>
          <View>
            <Text style={historyDetailsStyles.title}>Value</Text>
            <Text style={historyDetailsStyles.details}>
              {historyDetails?.value}
            </Text>
          </View>
          <View>
            <Text style={historyDetailsStyles.title}>Transaction Ref</Text>
            <Text style={historyDetailsStyles.details}>
              {historyDetails?.transaction_ref}
            </Text>
          </View>
          <View>
            <Text style={historyDetailsStyles.title}>Receipt Number</Text>
            <Text style={historyDetailsStyles.details}>
              {historyDetails?.receipt_no}
            </Text>
          </View>
          <View>
            <Text style={historyDetailsStyles.title}>Payment Types</Text>
            <Text style={historyDetailsStyles.details}>
              {historyDetails?.payment_type}
            </Text>
          </View>
          <View>
            <Text style={historyDetailsStyles.title}>Cost of Utility</Text>
            <Text style={historyDetailsStyles.details}>
              ₦
              {Intl.NumberFormat().format(Number(historyDetails?.utility_cost))}
            </Text>
          </View>
          <View
            style={[historyDetailsStyles.addressWrapper, {marginTop: '3%'}]}>
            <Text style={historyDetailsStyles.title}>VAT</Text>
            <Text style={historyDetailsStyles.details}>
              ₦{Intl.NumberFormat().format(Number(historyDetails?.vat))}
            </Text>
          </View>
          <View style={historyDetailsStyles.addressWrapper}>
            <Text style={historyDetailsStyles.title}>Service Charge</Text>
            <Text style={historyDetailsStyles.details}>
              ₦
              {Intl.NumberFormat().format(
                Number(historyDetails?.service_charge),
              )}
            </Text>
          </View>
          <View style={historyDetailsStyles.addressWrapper}>
            <Text style={historyDetailsStyles.title}>Total Paid</Text>
            <Text style={historyDetailsStyles.details}>
              ₦{Intl.NumberFormat().format(Number(total))}
            </Text>
          </View>

          <TouchableOpacity
            style={historyDetailsStyles.transparentBtn}
            onPress={() => navigation.goBack()}>
            <Text style={historyDetailsStyles.btn}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {showAlert && (
        <AlertModal
          topText="Copied!"
          bottomText="Token copied to clipboard."
          closeModal={() => dispatch(setShowAlert(false))}
        />
      )}
    </SafeAreaView>
  );
}

export default HistoryDetails;
