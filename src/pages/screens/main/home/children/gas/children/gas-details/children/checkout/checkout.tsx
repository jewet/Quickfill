import {StackScreenProps} from '@react-navigation/stack';
import Reac from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import SelectedIcon from '../../../../../../../../../../assets/images/gas/selected.svg';
import UnSelectedIcon from '../../../../../../../../../../assets/images/gas/unselected.svg';
import DeliveryIcon from '../../../../../../../../../../assets/images/gas/delivery.svg';
import MapIcon from '../../../../../../../../../../assets/images/gas/tabler_map-pin.svg';
import CallIcon from '../../../../../../../../../../assets/images/gas/tabler_phone.svg';
import NoteIcon from '../../../../../../../../../../assets/images/gas/tabler_message.svg';
import ArrowRight from '../../../../../../../../../../assets/images/gas/tabler_chevron-right.svg';
import {RootStackParamList} from '../../../../../../../../../../utils/nav-routes/types';
import {profile_data} from '../../../../../../../../../../utils/sample-data/profile';
import accessoriesStyles from '../../../../../../../accessories/accessoriesStyles';
import favouritesStyles from '../../../../../../../profile/children/favourites/favouritesStyles';
import orderDetailsStyles from '../../../../../../../orders/children/order-details/orderDetailsStyles';
import Button from '../../../../../../../../../../components/Button/Button';
import GoBack from '../../../../../../../../../../assets/images/payment/tabler_arrow-right.svg';
import Dp from '../../../../../../../../../../assets/images/orders/profile_pic.svg';
import headerStyles from '../../../../../../../../../../components/Profile/HeaderStyles';
import electricityPaymentStyles from '../../../../../electricity/children/payment/paymentStyles';
import addressStyles from '../../../../../../../profile/children/address/addressStyles';
import checkoutStyles from './checkoutStyles';
import {primaryColor} from '../../../../../../../../onboarding/splash/splashstyles';
import electricityProviderStyles from '../../../../../electricity/children/electricity-provider/electricityProviderStyles';
import {payment_opt} from '../../../../../../../../../../utils/sample-data/payment';
import homeStyles from '../../../../../../home-styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../../../../utils/redux/store/store';
import {setIsSelected} from '../../../../../../../../../../utils/redux/slice/gas';
import fundWalletStyles from '../../../../../../../profile/children/wallet/children/fund-wallet/fundWalletStyles';
import {
  DetailsProps,
  quick_action_data,
  QuickActionProps,
} from '../../../../../../../../../../utils/sample-data/home';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'gas-checkout'>;

function GasCheckout({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route = useRoute<RouteProp<RootStackParamList, 'gas-checkout'>>();
  const {orderDetails, selectedCylinder, directory, dieselPrice, litres} =
    route.params;

  const dispatch = useDispatch();
  const {isSelected} = useSelector((state: RootState) => state.gas);
  const addressDetails = profile_data
    .filter(item => item.profile.type === 'Saved Addresses')
    .map(item => item.profile.location);
  const personalDetails = profile_data
    .find(item => item.profile.type === 'My Details')
    ?.profile.details?.find(
      (detail: {title?: string; phone_number?: string}) =>
        detail.title === 'Phone number',
    );

  const phoneNumber = personalDetails?.phone_number;

  const item_amt = litres
    ? Number(Number(dieselPrice))
    : Number(selectedCylinder?.amount);
  const delivery_fee = Number(orderDetails?.delivery_fee);
  const service_charge = Number(200);
  const total = item_amt + delivery_fee + service_charge;

  const navigateToPaymentResult = (paymentType: string, data: DetailsProps) => {
    switch (paymentType) {
      case 'transfer':
        navigation.replace('transfer', {
          amount: total,
          directory: 'gas-checkout',
          orderDetails: data,
          selectedCylinder: selectedCylinder,
          dieselPrice: dieselPrice,
          litres: litres,
        });
        break;
      case 'delivery':
        navigation.replace('gas-order-details', {
          orderDetails: data,
          selectedCylinder: selectedCylinder,
          dieselPrice: dieselPrice,
          litres: litres,
        });
        break;
      case 'wallet':
        navigation.replace('payment-result', {
          result: 'successful',
          directory: 'gas-checkout',
          orderDetails: data,
          selectedCylinder: selectedCylinder,
          dieselPrice: dieselPrice,
          litres: litres,
        });
        break;
      default:
        console.warn('Navigation route not defined for this item.');
        break;
    }
  };

  const handleContinue = (data: QuickActionProps) => {
    if (isSelected === null) {
      Alert.alert('No payment type selected');
      return;
    }
    const selectedPaymentType = payment_opt[isSelected].type;
    navigateToPaymentResult(selectedPaymentType, orderDetails);
  };

  const wallet = profile_data.find(item => item.profile.type === 'My Wallet');

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
          <Text style={headerStyles.title}>Checkout</Text>
          <Text
            style={[
              electricityPaymentStyles.topText,
              {color: '#919191', marginTop: -5},
            ]}>
            {directory?.toLowerCase() === 'gas'
              ? `${selectedCylinder?.kg}kg Gas `
              : `${litres} Litres `}
            Refill
          </Text>
        </View>

        <View></View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={favouritesStyles.scrollview}>
        <View
          style={[orderDetailsStyles.flexContainer, checkoutStyles.flexCont]}>
          <DeliveryIcon width={24} height={24} fill="none" />
          <View>
            <Text style={addressStyles.location}>Deliver ASAP</Text>
            <Text style={addressStyles.locationBottom}>Express delivery</Text>
          </View>
        </View>
        <View
          style={[orderDetailsStyles.flexContainer, checkoutStyles.flexCont]}>
          <MapIcon width={24} height={24} fill="none" />
          <View>
            <Text style={addressStyles.location}>{addressDetails}</Text>
          </View>
        </View>
        <View
          style={[orderDetailsStyles.flexContainer, checkoutStyles.flexCont]}>
          <CallIcon width={24} height={24} fill="none" />
          <View>
            <Text style={addressStyles.location}>{phoneNumber}</Text>
          </View>
        </View>
        <View
          style={[
            orderDetailsStyles.flexContainer,
            checkoutStyles.flexCont,
            {marginTop: 10, justifyContent: 'space-between'},
          ]}>
          <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
            <NoteIcon width={24} height={24} fill="none" />
            <TouchableOpacity
              onPress={() => navigation.navigate('delivery-instructions')}>
              <Text style={[addressStyles.location, {color: primaryColor}]}>
                Add extra delivery note e.g. estate pass
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('delivery-instructions')}>
            <ArrowRight width={24} height={24} fill="none" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            marginTop: 10,
            paddingTop: 10,
          }}>
          <Text style={[addressStyles.locationBottom, {paddingHorizontal: 16}]}>
            Delivery Rep’s information
          </Text>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              checkoutStyles.flexCont,
              {
                justifyContent: 'space-between',
                borderTopWidth: 0,
              },
            ]}>
            <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
              <Dp width={30} height={30} fill="none" />
              <View>
                <Text style={addressStyles.location}>
                  {orderDetails?.rider?.name}
                </Text>
                <Text style={addressStyles.locationBottom}>
                  {orderDetails?.rider?.phone_number}
                </Text>
              </View>
            </View> 
          </View>
        </View>
        <Text style={checkoutStyles.paymentText}>Payment</Text>
        <View
          style={[
            electricityProviderStyles.electricityDataWrapper,
            {
              backgroundColor: '#F7F6F2',
              borderRadius: 0,
              gap: 0,
            },
          ]}>
          {payment_opt.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={[
                electricityProviderStyles.electricityData,
                {
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  borderColor: '#FFFFFF',
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                },
              ]}
              onPress={() => dispatch(setIsSelected(index))}>
              <data.icon width={24} height={24} fill="none" />
              <View style={electricityProviderStyles.electricityTextWrapper}>
                <View style={electricityProviderStyles.electricityTextWrapper}>
                  {isSelected === index &&
                  data.type.toLowerCase() === 'wallet' ? (
                    <View>
                      <Text
                        style={[
                          electricityProviderStyles.electricityText,
                          {fontWeight: 600},
                        ]}>
                        Pay with {data.type}
                      </Text>
                      <Text style={fundWalletStyles.walbal}>
                        Wallet balance:{' '}
                        <Text style={fundWalletStyles.bold}>
                          ₦
                          {Intl.NumberFormat().format(
                            Number(wallet?.profile?.bal),
                          ) || 0}
                        </Text>
                      </Text>
                    </View>
                  ) : (
                    <Text
                      style={[
                        electricityProviderStyles.electricityText,
                        {fontWeight: 600},
                      ]}>
                      {data.type.toLowerCase() !== 'delivery'
                        ? 'Pay with '
                        : 'Pay on'}{' '}
                      {data.type}
                    </Text>
                  )}
                </View>
              </View>
              {isSelected === index ? (
                <SelectedIcon width={24} height={24} fill="none" />
              ) : (
                <UnSelectedIcon width={24} height={24} fill="none" />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View style={orderDetailsStyles.totalWrapper}>
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
              ₦{Intl.NumberFormat().format(Number(item_amt))}
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
              ₦{Intl.NumberFormat().format(Number(orderDetails?.delivery_fee))}
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
              Service charge
            </Text>
            <Text
              style={[
                homeStyles.title,
                {color: '#8E8E93', fontSize: 14, fontWeight: 600},
              ]}>
              ₦{Intl.NumberFormat().format(Number(service_charge))}
            </Text>
          </View>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {justifyContent: 'space-between', width: '100%', marginTop: 5},
            ]}>
            <Text style={homeStyles.details}>Amount paid</Text>
            <Text style={homeStyles.details}>
              ₦{Intl.NumberFormat().format(Number(total))}
            </Text>
          </View>
          <View style={{marginTop: 10, paddingHorizontal: 16, width: '100%'}}>
            <Button
              text="Complete order"
              action={() => handleContinue(quick_action_data[isSelected])}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default GasCheckout;
