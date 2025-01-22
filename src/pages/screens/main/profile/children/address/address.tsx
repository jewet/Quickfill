import React from 'react';
import {ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import accessoriesStyles from '../../../accessories/accessoriesStyles';
import Header from '../../../../../../components/Profile/Header';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProfileProps} from '../../../../../../utils/sample-data/profile';
import favouritesStyles from '../favourites/favouritesStyles';
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import SelectedIcon from '../../../../../../assets/images/electricity/selected-bill.svg';
import LocationIcon from '../../../../../../assets/images/profile/tabler_location-pin.svg';
import HomeIcon from '../../../../../../assets/images/profile/tabler_home.svg';
import WorkIcon from '../../../../../../assets/images/profile/tabler_briefcase.svg';
import AddressIcon from '../../../../../../assets/images/profile/tabler_map-pin.svg';
import addressStyles from './addressStyles';
import Button from '../../../../../../components/Button/Button';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'user-address'>;

function Address({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  // Access route parameters to fetch profile details if passed
  const route = useRoute<RouteProp<RootStackParamList, 'user-address'>>();
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
        title="Addresses"
        directory=""
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[favouritesStyles.scrollview, {paddingHorizontal: 16}]}>
        {/* Section for current location */}
        <View
          style={[
            orderDetailsStyles.flexContainer,
            {
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderColor: '#E5E5EA',
              paddingBottom: 20,
            },
          ]}>
          <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
            <LocationIcon width={24} height={24} fill="none" />
            <View>
              <Text style={addressStyles.location}>Current location</Text>
              <Text style={addressStyles.locationBottom}>
                8-26 Ango Abdullahi St, e, Abuja..
              </Text>
            </View>
          </View>
          <SelectedIcon width={24} height={24} fill="none" />
        </View>

        <View style={{width: '100%', marginTop: 25, display: 'flex', gap: 30}}>
          <Text style={addressStyles.savedAddress}>Saved addresses</Text>

          {/* Home address option */}
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {justifyContent: 'space-between'},
            ]}>
            <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
              <HomeIcon width={24} height={24} fill="none" />
              <Text style={addressStyles.leftText}>Home</Text>
            </View>
            <Text style={addressStyles.rightText}>Add address</Text>
          </View>

          {/* Work address option */}
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {justifyContent: 'space-between'},
            ]}>
            <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
              <WorkIcon width={24} height={24} fill="none" />
              <Text style={addressStyles.leftText}>Work</Text>
            </View>
            <Text style={addressStyles.rightText}>Add address</Text>
          </View>

          {/* Custom saved address */}
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {justifyContent: 'space-between'},
            ]}>
            <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
              <AddressIcon width={24} height={24} fill="none" />
              <Text style={addressStyles.leftText}>
                off Ajesa St, Wuse, Abuja 930001, Fede...
              </Text>
            </View>
            <Text style={addressStyles.rightText}>Add address</Text>
          </View>
        </View>

        {/* Button to add new addresses */}
        <View style={{marginTop: 80}}>
          <Button
            text="Add new address"
            action={() => console.log('pressed')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Address;
