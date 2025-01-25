import React from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../../../../../accessories/accessoriesStyles';
import Header from '../../../../../../../../../../components/Profile/Header';
import orderDetailsStyles from '../../../../../../../orders/children/order-details/orderDetailsStyles';
import Reload from '../../../../../../../../../../assets/images/payment/tabler_reload.svg';
import Copy from '../../../../../../../../../../assets/images/payment/copy.svg';
import paymentResultStyles from '../payment-result/paymentResultStyles';
import transferStyles from './transferStyles';
import Clipboard from '@react-native-clipboard/clipboard';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AlertModal from '../../../../../../../../../../components/Alert/Alert';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../../../../utils/redux/store/store';
import {setShowAlert} from '../../../../../../../../../../utils/redux/slice/profile';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'transfer'>;

function Transfer({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route = useRoute<RouteProp<RootStackParamList, 'transfer'>>();
  const {amount, directory, orderDetails, selectedCylinder, dieselPrice} =
    route.params;
  const dispatch = useDispatch();
  const {showAlert} = useSelector((state: RootState) => state.profile);

  const copyToClipboard = (value: string) => {
    Clipboard.setString(value);
    dispatch(setShowAlert(true));
    // Alert.alert('Copied!', `${value} copied to clipboard.`);
  };
  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        isFirstPage={false}
        title="Pay with transfer"
        directory="transfer"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={transferStyles.scrollview}>
        <View style={transferStyles.top}>
          <Text style={transferStyles.name}>Samuel Ministar</Text>
          <Text style={transferStyles.name}>
            Pay{' '}
            <Text style={transferStyles.amt}>
              NGN{Intl.NumberFormat().format(amount)}
            </Text>
          </Text>
        </View>
        <Text style={transferStyles.transfer}>
          Transfer NGN{Intl.NumberFormat().format(amount)}
        </Text>
        <View style={transferStyles.detailsWrapper}>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {justifyContent: 'space-between'},
            ]}>
            <View>
              <Text style={transferStyles.firstText}>First bank</Text>
              <Text style={transferStyles.secondText}>Bank name</Text>
            </View>
            <TouchableOpacity
              style={[
                orderDetailsStyles.flexContainer,
                transferStyles.reloadWrapper,
              ]}>
              <Reload width={20} height={20} fill="none" />
              <Text>Refresh</Text>
            </TouchableOpacity>
          </View>
          {directory !== 'electricity' && (
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {justifyContent: 'space-between'},
              ]}>
              <View>
                <Text style={transferStyles.firstText}>MohGas Limited NG</Text>
                <Text style={transferStyles.secondText}>Vendor</Text>
              </View>
              <TouchableOpacity
                onPress={() => copyToClipboard('MohGas Limited NG')}>
                <Copy width={24} height={24} fill="none" />
              </TouchableOpacity>
            </View>
          )}
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {justifyContent: 'space-between'},
            ]}>
            <View>
              <Text style={transferStyles.firstText}>
                {' '}
                NGN{Intl.NumberFormat().format(amount)}
              </Text>
              <Text style={transferStyles.secondText}>Amount </Text>
            </View>
            <TouchableOpacity
              onPress={() => copyToClipboard(amount.toString())}>
              <Copy width={24} height={24} fill="none" />
            </TouchableOpacity>
          </View>
          <Text style={transferStyles.bottomText}>
            Make payment to the account above to complete wallet funding request{' '}
          </Text>
        </View>
        <View style={{width: '100%', marginTop: 30}}>
          <TouchableOpacity
            style={paymentResultStyles.btnWrapper}
            onPress={() =>
              navigation.replace('payment-result', {
                result: 'successful',
                directory: directory,
                orderDetails,
                selectedCylinder,
                dieselPrice,
              })
            }>
            <Text style={paymentResultStyles.btnText}>I’ve sent the money</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              paymentResultStyles.btnWrapper,
              {backgroundColor: '#D9D9D9', borderColor: 'transparent'},
            ]}
            onPress={() => navigation.goBack()}>
            <Text style={[paymentResultStyles.btnText, {color: '#999999'}]}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {showAlert && (
        <AlertModal
          topText="Copied!"
          bottomText="Text copied to clipboard."
          closeModal={() => dispatch(setShowAlert(false))}
          ok={true}
        />
      )}
    </SafeAreaView>
  );
}

export default Transfer;
