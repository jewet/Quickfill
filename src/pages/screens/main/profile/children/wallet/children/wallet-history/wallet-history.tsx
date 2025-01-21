import React from 'react';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import Header from '../../../../../../../../components/Electricity/Header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import accessoriesStyles from '../../../../../accessories/accessoriesStyles';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../utils/status-bar-styles/status-bar-styles';
import walletStyles from '../../walletStyles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProfileProps} from '../../../../../../../../utils/sample-data/profile';
import orderDetailsStyles from '../../../../../orders/children/order-details/orderDetailsStyles';
import addressStyles from '../../../address/addressStyles';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'wallet-history'>;

function WalletHistory({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'wallet-history'>>();
  const {profileDetails}: {profileDetails?: ProfileProps} = route.params || {};
  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        handleGoBack={() => navigation.goBack()}
        title={`Wallet History`}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={walletStyles.scrollview}>
        <View
          style={{
            width: '100%',
            marginTop: 20,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
          }}>
          <Text style={[walletStyles.recentText, {marginTop: 10}]}>
            Transaction history
          </Text>
          {profileDetails?.profile?.details?.map((data: any, index: number) => (
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {
                  justifyContent: 'space-between',
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: '#E5E5EA',
                  paddingVertical: 20,
                  backgroundColor: '#FFFFFF',
                  paddingHorizontal: 16,
                },
              ]}
              key={index}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <data.icon width={24} height={24} fill="none" />
                <View>
                  <Text style={addressStyles.location}>
                    ₦{Intl.NumberFormat().format(data.amt)}
                  </Text>
                  <Text style={addressStyles.locationBottom}>{data.des}</Text>
                </View>
              </View>
              <Text style={addressStyles.rightText}>{data.date}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default WalletHistory;
