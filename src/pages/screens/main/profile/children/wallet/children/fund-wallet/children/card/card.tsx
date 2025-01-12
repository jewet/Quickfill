import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
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

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'card'>;

function Card({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'card'>>();
  const {amount} = route.params;

  // Redux state selectors
  const dispatch = useDispatch();
  const {cardName, cardNumber, expiryDate, cvv} = useSelector(
    (state: RootState) => state.profile,
  );

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
            placeholder=""
            value={cardName}
            secured={false}
            directory={null}
            keyboardType="default"
            action={null}
            onChange={text => dispatch(setCardName(text))}
          />
          <Input
            label="Card Number"
            placeholder=""
            value={cardNumber}
            secured={false}
            directory={null}
            keyboardType="numeric"
            action={null}
            onChange={text => dispatch(setCardNumber(text))}
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
                onChange={text => dispatch(setExpiryDate(text))}
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
                onChange={text => dispatch(setCvv(text))}
              />
            </View>
          </View>
          <View style={{width: '100%', marginTop: 10}}>
            <Button
              text="Next"
              action={() =>
                navigation.navigate('payment-result', {result: 'unsuccessful'})
              }
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
