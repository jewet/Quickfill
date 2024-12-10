import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import accessoriesStyles from '../../../accessories/accessoriesStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../utils/status-bar-styles/status-bar-styles';
import Header from '../../../../../../components/Profile/Header';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProfileProps} from '../../../../../../utils/sample-data/profile';
import {ItemsProps} from '../../../../../../utils/sample-data/accessories';
import favouritesStyles from '../favourites/favouritesStyles';
// import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import TopImg from '../../../../../../assets/images/profile/big_logo.svg';
import ArrowRight from '../../../../../../assets/images/profile/tabler_chevron-right.svg';
// import addressStyles from '../address/addressStyles';
import contactStyles from '../contact/contactStyles';
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import addressStyles from '../address/addressStyles';

type Props = StackScreenProps<RootStackParamList, 'help'>;

function Help({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'help'>>();
  const {profileDetails}: {profileDetails?: ProfileProps} = route.params || {};

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        isFirstPage={false}
        title={profileDetails?.profile?.type}
        directory=''
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[favouritesStyles.scrollview]}>
        <View style={[contactStyles.topWrapper, {paddingVertical: 30}]}>
          <TopImg width={128} height={128} fill="none" />
          <Text
            style={[contactStyles.topText, {fontWeight: '700', marginTop: 0}]}>
            Version 2.0.02
          </Text>
        </View>
        <View>
          {profileDetails?.profile?.details?.map((data: any, index: number) => (
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#E5E5EA',
                  paddingVertical: 25,
                  paddingHorizontal: 16,
                },
              ]}
              key={index}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <View>
                  <Text style={addressStyles.location}>{data?.name}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('complaints')}>
                <ArrowRight width={24} height={24} fill="none" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Help;
