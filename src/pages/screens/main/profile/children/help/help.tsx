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
import favouritesStyles from '../favourites/favouritesStyles';
import TopImg from '../../../../../../assets/images/profile/big_logo.svg';
import ArrowRight from '../../../../../../assets/images/profile/tabler_chevron-right.svg';
import contactStyles from '../contact/contactStyles';
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import addressStyles from '../address/addressStyles';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'help'>;

function Help({navigation}: Props) {
  // Retrieve route parameters, specifically `profileDetails`
  const route = useRoute<RouteProp<RootStackParamList, 'help'>>();
  const {profileDetails}: {profileDetails?: ProfileProps} = route.params || {};

  // Function to navigate to specific help sections
  const navigateToHelpSection = (
    target: string,
    navigation: any,
    data: ProfileProps,
  ) => {
    switch (target) {
      case 'FAQ’s':
        navigation.navigate('help-options', {
          profileDetails: data,
          target: 'faq',
        });
        break;
      case 'User policy':
        navigation.navigate('help-options', {
          profileDetails: data,
          target: 'user-policy',
        });
        break;
      case 'Rate us on the store':
        navigation.navigate('help-options', {
          profileDetails: data,
          target: 'rating',
        });
        break;
      case 'Share this app with friends':
        navigation.navigate('help-options', {
          profileDetails: data,
          target: 'share',
        });
        break;
      default:
        console.warn('Navigation route not defined for this item.');
        break;
    }
  };

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

      {/* Main content scrollable area */}
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

        {/* List of help options */}
        <View>
          {profileDetails?.profile?.details?.map((data: any, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                data.name === 'Complaints & feedback'
                  ? navigation.navigate('complaints')
                  : navigateToHelpSection(data?.name, navigation, data)
              }
              style={[
                orderDetailsStyles.flexContainer,
                {
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#E5E5EA',
                  paddingVertical: 25,
                  paddingHorizontal: 16,
                },
              ]}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <View>
                  <Text style={addressStyles.location}>{data?.name}</Text>
                </View>
              </View>

              {/* Navigation to specific help sections based on the item's name */}
              <TouchableOpacity
                onPress={() =>
                  data.name === 'Complaints & feedback'
                    ? navigation.navigate('complaints')
                    : navigateToHelpSection(data?.name, navigation, data)
                }>
                <ArrowRight width={24} height={24} fill="none" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Help;
