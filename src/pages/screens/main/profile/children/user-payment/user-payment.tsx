import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../accessories/accessoriesStyles';
import Header from '../../../../../../components/Profile/Header';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProfileProps} from '../../../../../../utils/sample-data/profile';
import favouritesStyles from '../favourites/favouritesStyles';
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import PlusIcon from '../../../../../../assets/images/profile/tabler_plus.svg';
import MasterCard from '../../../../../../assets/images/profile/logos_mastercard.svg';
import SelectedIcon from '../../../../../../assets/images/electricity/selected-bill.svg';
import Button from '../../../../../../components/Button/Button';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type Props = StackScreenProps<RootStackParamList, 'user-payment'>;

function UserPayment({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route = useRoute<RouteProp<RootStackParamList, 'user-payment'>>();
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
        directory=""
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={favouritesStyles.scrollview}>
        <Text
          style={{
            marginLeft: 16,
            color: '#5E5E5E',
            fontWeight: '700',
            fontSize: 17,
          }}>
          Payment methods
        </Text>
        <TouchableOpacity
          style={[
            orderDetailsStyles.flexContainer,
            {
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderBottomWidth: 0.5,
              borderColor: '#FFB600',
              padding: 16,
              marginTop: 20,
            },
          ]}>
          <TouchableOpacity>
            <PlusIcon width={24} height={24} fill="none" />
          </TouchableOpacity>
          <Text style={{color: '#FFB600', fontWeight: '700', fontSize: 14}}>
            Add bank card
          </Text>
        </TouchableOpacity>
        <View
          style={[
            orderDetailsStyles.flexContainer,
            {
              marginTop: 20,
              justifyContent: 'space-between',
              paddingHorizontal: 16,
            },
          ]}>
          <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
            <TouchableOpacity>
              <MasterCard width={21} height={16} fill="none" />
            </TouchableOpacity>
            <Text style={{color: '#2C2C2C', fontWeight: '600', fontSize: 14}}>
              **** 4729
            </Text>
          </View>
          <SelectedIcon width={24} height={24} fill="none" />
        </View>
        <View style={{marginTop: 120, paddingHorizontal: 16}}>
          <Button
            text="Save as default payment"
            action={() =>
              navigation.navigate('default-card', {result: 'successful'})
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserPayment;
