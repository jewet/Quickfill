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

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'card'>;

function Card({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'card'>>();
  const {amount} = route.params;

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
            value=""
            secured={false}
            directory={null}
            keyboardType="default"
            action={null}
          />
          <Input
            label="Card Number"
            placeholder=""
            value=""
            secured={false}
            directory={null}
            keyboardType="numeric"
            action={null}
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
                value=""
                secured={false}
                directory={null}
                keyboardType="numeric"
                action={null}
              />
            </View>
            <View style={{width: '45%'}}>
              <Input
                label="CVV"
                placeholder="123"
                value=""
                secured={false}
                directory={null}
                keyboardType="numeric"
                action={null}
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
