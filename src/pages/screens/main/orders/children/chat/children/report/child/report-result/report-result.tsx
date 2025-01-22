import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import accessoriesStyles from '../../../../../../../accessories/accessoriesStyles';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import favouritesStyles from '../../../../../../../profile/children/favourites/favouritesStyles';
import {RootStackParamList} from '../../../../../../../../../../utils/nav-routes/types';
import Header from '../../../../../../../../../../components/Profile/Header';
import paymentResultStyles from '../../../../../../../profile/children/wallet/children/fund-wallet/children/payment-result/paymentResultStyles';
import SuccessImg from '../../../../../../../../../../assets/images/payment/successful.svg';
import UnsuccessfulImg from '../../../../../../../../../../assets/images/payment/unsuccessfull.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'report-result'>;

function ReportResult({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route = useRoute<RouteProp<RootStackParamList, 'report-result'>>();
  const {orderDetails, result, target} = route.params;

  console.log('Order details-report-result: ', orderDetails);

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        isFirstPage={false}
        title={`Report ${target}`}
        directory=""
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[paymentResultStyles.scrollview, {paddingHorizontal: 16}]}>
        {result === 'successful' ? (
          <View style={paymentResultStyles.paymentResultContainer}>
            <SuccessImg width={118} height={118} />
            <Text style={[paymentResultStyles.thirdText, {width: '90%'}]}>
              Your report has been submitted successfully. Our team will review
              it and take appropriate action.
            </Text>
            <TouchableOpacity
              style={paymentResultStyles.btnWrapper}
              onPress={() =>
                navigation.navigate('chat', {
                  orderDetails: orderDetails,
                  target: target,
                })
              }>
              <Text style={paymentResultStyles.btnText}>Done</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={paymentResultStyles.paymentResultContainer}>
            <View>
              <Text style={paymentResultStyles.firstText}>Unseccessful</Text>
              <Text style={paymentResultStyles.secondText}>
                Unable to report {target}{' '}
              </Text>
            </View>
            <UnsuccessfulImg width={118} height={118} />
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

export default ReportResult;
