import React from 'react';
import {
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
import SuccessImg from '../../../../../../../../assets/images/payment/successful.svg';
import UnsuccessfulImg from '../../../../../../../../assets/images/payment/unsuccessfull.svg';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../../../accessories/accessoriesStyles';
import paymentResultStyles from '../../../wallet/children/fund-wallet/children/payment-result/paymentResultStyles';
import Header from '../../../../../../../../components/Profile/Header';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'default-card'>;

function DefaultCard({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route = useRoute<RouteProp<RootStackParamList, 'default-card'>>();
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
        title={`Default ${
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
              <Text style={paymentResultStyles.firstText}>
                Default card set
              </Text>
              <Text style={paymentResultStyles.secondText}>Successful </Text>
            </View>
            <SuccessImg width={118} height={118} />
            <Text style={paymentResultStyles.thirdText}>
              This card information has been succesfully set as default{' '}
            </Text>
            <TouchableOpacity
              style={paymentResultStyles.btnWrapper}
              onPress={() => navigation.goBack()}>
              <Text style={paymentResultStyles.btnText}>Done</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={paymentResultStyles.paymentResultContainer}>
            <View>
              <Text style={paymentResultStyles.firstText}>
                Default card set
              </Text>
              <Text style={paymentResultStyles.secondText}>Unsuccessful </Text>
            </View>
            <UnsuccessfulImg width={118} height={118} />
            <Text style={paymentResultStyles.thirdText}>
              This card information has been succesfully set as default{' '}
            </Text>
            <TouchableOpacity
              style={paymentResultStyles.btnWrapper}
              onPress={() => navigation.goBack()}>
              <Text style={paymentResultStyles.btnText}>Retry</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DefaultCard;
