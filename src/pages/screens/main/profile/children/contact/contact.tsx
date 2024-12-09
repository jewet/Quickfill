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
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import TopImg from '../../../../../../assets/images/profile/top_img.svg';
import ArrowRight from '../../../../../../assets/images/profile/tabler_chevron-right.svg';
import addressStyles from '../address/addressStyles';
import contactStyles from './contactStyles';

type Props = StackScreenProps<RootStackParamList, 'contact'>;

function Contact({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'contact'>>();
  const {profileDetails}: {profileDetails?: ProfileProps} = route.params || {};

  const handleNavigation = (itemDetails: ItemsProps) => {
    navigation.navigate('item-details', {itemDetails});
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
        title="Contact support"
        directory=''
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[favouritesStyles.scrollview, {paddingHorizontal: 16}]}>
        <View style={contactStyles.topWrapper}>
          <TopImg width={128} height={128} fill="none" />
          <Text style={contactStyles.topText}>Got a problem? Let’s fix it</Text>
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
                },
              ]}
              key={index}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <data.icon width={40} height={40} fill="none" />
                <View>
                  <Text style={addressStyles.location}>{data.title}</Text>
                  <Text style={addressStyles.locationBottom}>{data.more}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <ArrowRight width={24} height={24} fill="none" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Contact;
