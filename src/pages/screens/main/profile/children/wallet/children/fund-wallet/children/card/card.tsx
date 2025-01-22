import React from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
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
import Lock from '../../../../../../../../../../assets/images/payment/lucide_lock.svg';
import transferStyles from '../transfer/transferStyles';
import Input from '../../../../../../../../../../components/Input/AuthInput';
import Button from '../../../../../../../../../../components/Button/Button';
import cardStyles from './cardStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../../../../utils/redux/store/store';
import {
  setCardName,
  setCardNumber,
  setCvv,
  setExpiryDate,
} from '../../../../../../../../../../utils/redux/slice/profile';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'card'>;

function Card({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route = useRoute<RouteProp<RootStackParamList, 'card'>>();
  const {amount, directory} = route.params;

  // Redux state selectors
  const dispatch = useDispatch();
  const {cardName, cardNumber, expiryDate, cvv} = useSelector(
    (state: RootState) => state.profile,
  );

  // Check if all required fields are filled
  const isFormValid =
    cardName.trim() !== '' &&
    cardNumber.replace(/\s/g, '').length === 19 &&
    expiryDate.length === 5 &&
    cvv.length === 3;
  console.log('direc: ', directory);

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        isFirstPage={false}
        title="Pay with card"
        directory="card"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={transferStyles.scrollview}>
        <View
          style={[
            transferStyles.top,
            {paddingVertical: 0, borderBottomWidth: 0},
          ]}>
          <Text style={transferStyles.name}>Samuel Ministar</Text>
          <Text style={transferStyles.name}>
            Pay{' '}
            <Text style={transferStyles.amt}>
              NGN{Intl.NumberFormat().format(amount)}
            </Text>
          </Text>
        </View>
        <View>
          <Input
            label="Name on Card"
            placeholder="Eg JOHN DOE"
            value={cardName}
            secured={false}
            directory={null}
            keyboardType="default"
            action={null}
            onChange={text => dispatch(setCardName(text))}
          />
          <Input
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            secured={false}
            directory={null}
            keyboardType="numeric"
            action={null}
            onChange={text => {
              let formattedText = text.replace(/\D/g, '');

              formattedText = formattedText.slice(0, 19);

              formattedText = formattedText.replace(/(\d{4})/g, '$1 ').trim();

              dispatch(setCardNumber(formattedText));
            }}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{width: '45%'}}>
              <Input
                label="Expiry Date"
                placeholder="MM/YY"
                value={expiryDate}
                secured={false}
                directory={null}
                keyboardType="numeric"
                action={null}
                onChange={text => {
                  let formattedText = text.replace(/\D/g, '');

                  if (formattedText.length >= 2) {
                    let month = formattedText.slice(0, 2);
                    if (parseInt(month, 10) > 12) {
                      month = '12';
                    }
                    formattedText = month + formattedText.slice(2);
                  }

                  if (formattedText.length > 2) {
                    formattedText =
                      formattedText.slice(0, 2) +
                      '/' +
                      formattedText.slice(2, 4);
                  }

                  formattedText = formattedText.slice(0, 5);

                  dispatch(setExpiryDate(formattedText));
                }}
              />
            </View>

            <View style={{width: '45%'}}>
              <Input
                label="CVV"
                placeholder="123"
                value={cvv}
                secured={false}
                directory={null}
                keyboardType="numeric"
                action={null}
                onChange={text => {
                  if (/^\d{0,3}$/.test(text)) {
                    dispatch(setCvv(text));
                  }
                }}
              />
            </View>
          </View>
          <View style={{width: '100%', marginTop: 10}}>
            <Button
              text="Next"
              action={() => {
                if (!isFormValid) {
                  Alert.alert(
                    'Please ensure that all fields are correctly filled.',
                  );
                } else {
                  navigation.replace('payment-result', {
                    result: 'successful',
                    directory: directory,
                  });
                }
              }}
            />
          </View>
        </View>
        <View style={cardStyles.moreCont}>
          <View>
            <Text style={cardStyles.knowText}>Did you know?</Text>
            <Text style={cardStyles.des}>
              Many credit cards don’t support crypto purchases. Debit cards
              usually work best.
            </Text>
          </View>
          <Text style={cardStyles.learnText}>Learn More</Text>
        </View>
        <View style={orderDetailsStyles.flexContainer}>
          <Lock width={14} height={14} />
          <Text style={cardStyles.des}>
            Privacy protected with 256-Bit SSL encryption
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Card;
