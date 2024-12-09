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
import ArrowRight from '../../../../../../assets/images/profile/black_tabler_chevron-right.svg';
import EditIcon from '../../../../../../assets/images/profile/tabler_edit.svg';
import addressStyles from '../address/addressStyles';
import contactStyles from '../contact/contactStyles';

type Props = StackScreenProps<RootStackParamList, 'user-details'>;

function Details({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'user-details'>>();
  const {profileDetails}: {profileDetails?: ProfileProps} = route.params || {};

  const handleNavigation = (profileDetails: ProfileProps, target: 'name' | 'username' | 'birthday') => {
    navigation.navigate('update-form', { profileDetails, target });
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
        directory=''
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[favouritesStyles.scrollview, {paddingHorizontal: 16}]}>
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
                <data.icon width={24} height={24} fill="none" />
                <View>
                  <Text style={addressStyles.location}>{data.name || data.phone_number || data.username || data.email || data.gender || data.dob }</Text>
                  <Text style={addressStyles.locationBottom}>{data.title}</Text>
                </View>
              </View>
              {data.name && (
              <TouchableOpacity onPress={()=>handleNavigation(profileDetails!, 'name')}>
                <EditIcon width={24} height={24} fill="none" />
              </TouchableOpacity>
              )}
              {data.username && (
              <TouchableOpacity onPress={()=>handleNavigation(profileDetails!, 'username')}>
                <EditIcon width={24} height={24} fill="none" />
              </TouchableOpacity>
              )}
              {data.email && (
              <TouchableOpacity>
                <ArrowRight width={24} height={24} fill="none" />
              </TouchableOpacity>
              )}
              {data.dob && (
              <TouchableOpacity onPress={()=>handleNavigation(profileDetails!, 'birthday')}>
                <EditIcon width={24} height={24} fill="none" />
              </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Details;
