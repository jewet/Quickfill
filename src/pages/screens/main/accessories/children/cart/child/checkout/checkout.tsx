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
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../../accessoriesStyles';
import Header from '../../../../../../../../components/Accessories/Header';
import cartStyles from '../../cartStyles';
import orderDetailsStyles from '../../../../../orders/children/order-details/orderDetailsStyles';
import homeStyles from '../../../../../home/home-styles';
import Button from '../../../../../../../../components/Button/Button';
import {RouteProp, useRoute} from '@react-navigation/native';
import {profile_data} from '../../../../../../../../utils/sample-data/profile';
import historyDetailsStyles from '../../../../../home/children/electricity/children/electricity-history/history-details/historyDetailsStyles';
import DeliveryIcon from '../../../../../../../../assets/images/accessories/tabler_truck-delivery.svg';
import MapPin from '../../../../../../../../assets/images/accessories/tabler_map-pin.svg';
import checkoutStyles from './checkoutStyles';
import {cart_data} from '../../../../../../../../utils/sample-data/accessories';
import itemsStyles from '../../../items/itemsStyles';
import {primaryColor} from '../../../../../../onboarding/splash/splashstyles';
import SelectedIcon from '../../../../../../../../assets/images/electricity/selected-bill.svg';
import UnSelectedIcon from '../../../../../../../../assets/images/electricity/unselected-bill.svg';
import electricityProviderStyles from '../../../../../home/children/electricity/children/electricity-provider/electricityProviderStyles';
import fundWalletStyles from '../../../../../profile/children/wallet/children/fund-wallet/fundWalletStyles';
import {payment_type} from '../../../../../../../../utils/sample-data/payment';
import {RootState} from '../../../../../../../../utils/redux/store/store';
import {useDispatch, useSelector} from 'react-redux';
import {setIsSelected} from '../../../../../../../../utils/redux/slice/accessories';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'checkout'>;

function Checkout({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route = useRoute<RouteProp<RootStackParamList, 'checkout'>>();
  const {itemCounts, totalAmount} = route.params || {};
  const dispatch = useDispatch();
  const {isSelected} = useSelector((state: RootState) => state.accessories);

  const navigateToPaymentResult = (paymentType: string) => {
    switch (paymentType) {
      case 'transfer':
        navigation.replace('transfer', {
          amount: totalAmount,
          directory: 'cart',
        });
        break;
      case 'card':
        navigation.replace('card', {amount: totalAmount, directory: 'cart'});
        break;
      case 'wallet':
        navigation.replace('payment-result', {
          result: 'successful',
          directory: 'cart',
        });
        break;
      case 'flutterwave':
        navigation.replace('payment-result', {
          result: 'unsuccessful',
          directory: 'cart',
        });
        break;
      default:
        console.warn('Navigation route not defined for this item.');
        break;
    }
  };

  const personalDetails = profile_data.find(
    item => item.profile.type === 'My Details',
  )?.profile.details;

  const findUsername = personalDetails?.find(
    (detail: {title?: string; name?: string}) => detail.title === 'Name',
  );
  const findPhoneNumber = personalDetails?.find(
    (detail: {title?: string; phone_number?: string}) =>
      detail.title === 'Phone number',
  );

  const wallet = profile_data.find(item => item.profile.type === 'My Wallet');

  const details = [
    {
      info: {
        title: 'Delivery Rep’s information',
        icon: DeliveryIcon,
        name: 'Johnson Chinedu',
        phone_number: '09123456789',
        vendor: 'Gas hub center, Kubwa Abuja.',
      },
    },
    {
      info: {
        title: 'Delivery address',
        icon: MapPin,
        name: findUsername?.name,
        phone_number: findPhoneNumber?.phone_number,
      },
    },
  ];
  const overallTotal = totalAmount + 1500 + 200;

  const handleContinue = () => {
    if (isSelected === null) {
      Alert.alert('No payment type selected');
      return;
    }
    const selectedPaymentType = payment_type[isSelected].type;
    navigateToPaymentResult(selectedPaymentType);
  };
  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        title="Complete check out"
        directory="complete-checkout"
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={[cartStyles.scrollview, {paddingHorizontal: 0}]}>
        <View
          style={[historyDetailsStyles.historyWrapper, {paddingBottom: 20}]}>
          {details.map((data, index) => (
            <View key={index} style={historyDetailsStyles.historyCont}>
              <View style={orderDetailsStyles.flexContainer}>
                <data.info.icon width={24} height={24} />
                <Text style={checkoutStyles.title}>{data.info.title}</Text>
              </View>
              <Text style={checkoutStyles.name}>{data.info.name}</Text>
              <Text style={checkoutStyles.name}>{data.info.phone_number}</Text>
              <Text style={checkoutStyles.address}>
                {data.info.vendor ||
                  '8-26 Ango Abdullahi St, Gwarinpa, 900108, FCT'}
              </Text>
            </View>
          ))}
        </View>
        <View style={historyDetailsStyles.historyCont}>
          <Text style={[itemsStyles.titleText, {fontSize: 17}]}>
            Your orders
          </Text>
          <View
            style={{width: '100%', marginTop: 10, display: 'flex', gap: 20}}>
            {cart_data.map((data, index) => (
              <View key={index} style={orderDetailsStyles.flexContainer}>
                <data.img width={78} height={80} />
                <View style={checkoutStyles.ordersWrapper}>
                  <Text style={[itemsStyles.titleText]}>{data.item.name}</Text>
                  <View
                    style={[
                      orderDetailsStyles.flexContainer,
                      {justifyContent: 'space-between', width: '85%'},
                    ]}>
                    <Text style={[itemsStyles.titleText]}>
                      ₦{Intl.NumberFormat().format(Number(data.item.price))}
                    </Text>
                    <Text style={[itemsStyles.titleText, {fontSize: 14}]}>
                      <Text style={{color: primaryColor}}>Qty: </Text>
                      {itemCounts[index]}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View
          style={[
            historyDetailsStyles.historyCont,
            {
              backgroundColor: 'transparent',
              borderColor: 'none',
              borderBottomWidth: 0,
              borderTopWidth: 0,
              paddingHorizontal: 0,
            },
          ]}>
          <Text
            style={[
              itemsStyles.titleText,
              {fontSize: 17, color: '#5E5E5E', paddingHorizontal: 16},
            ]}>
            Payment
          </Text>
          <View
            style={[
              electricityProviderStyles.electricityDataWrapper,
              {
                backgroundColor: '#F7F6F2',
                borderRadius: 0,
                paddingHorizontal: 0,
                gap: 0,
                borderBottomWidth: 1,
                borderColor: '#FFFFFF',
                paddingBottom: 0,
              },
            ]}>
            {payment_type.map((data, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  electricityProviderStyles.electricityData,
                  {
                    borderTopWidth: 1,
                    borderColor: '#FFFFFF',
                    paddingHorizontal: 16,
                  },
                ]}
                onPress={() => dispatch(setIsSelected(index))}>
                <data.icon width={24} height={24} fill="none" />
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
                      Pay with {data.type}
                    </Text>
                  )}
                </View>
                {isSelected === index ? (
                  <SelectedIcon width={24} height={24} fill="none" />
                ) : (
                  <UnSelectedIcon width={24} height={24} fill="none" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={[
            orderDetailsStyles.totalWrapper,
            {paddingBottom: 50, marginTop: '10%'},
          ]}>
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
              ₦{Intl.NumberFormat().format(totalAmount)}
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
              ₦{Intl.NumberFormat().format(1500)}
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
              ₦{Intl.NumberFormat().format(200)}
            </Text>
          </View>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {justifyContent: 'space-between', width: '100%', marginTop: 5},
            ]}>
            <Text style={homeStyles.details}>Total amount due</Text>
            <Text style={homeStyles.details}>
              ₦{Intl.NumberFormat().format(Number(overallTotal))}
            </Text>
          </View>
          {/* Complete order button */}
          <Button text="Complete order" action={handleContinue} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Checkout;
