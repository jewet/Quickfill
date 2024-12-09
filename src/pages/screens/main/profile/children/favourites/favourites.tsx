import React, { useState } from 'react';
import {ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
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
import {profile_data, ProfileProps} from '../../../../../../utils/sample-data/profile';
import favouritesStyles from './favouritesStyles';
import orderStyles from '../../../orders/orderStyles';
import Accessories from './children/accessories/accessories';
import Vendors from './children/vendors/vendors';
import { items_data, ItemsProps } from '../../../../../../utils/sample-data/accessories';

type Props = StackScreenProps<RootStackParamList, 'favourite'>;

function Favourites({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'favourite'>>();
  const {profileDetails}: {profileDetails?: ProfileProps} = route.params || {};
  const fav_nav = [
    {nav: 'Accessories'},
    {nav: 'Vendors'}
  ]
  const [activeNav, setActiveNav] = useState<number>(0);
  
  const handleNavigation = (itemDetails: ItemsProps) => {
    navigation.navigate('item-details', { itemDetails });
  };

  const displayActiveComponent = () => {
    if (activeNav === 0) return <Accessories profile_data={profileDetails} data={items_data} navigation={handleNavigation} />;
    if (activeNav === 1) return <Vendors profile_data={profileDetails} />;
    return null;
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
      <ScrollView showsVerticalScrollIndicator={false} style={favouritesStyles.scrollview}>
      <View style={{width: '100%', paddingHorizontal: 16}}>
      <View style={orderStyles.orderNavWrapper}>
          {fav_nav.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={[
                orderStyles.orderNavCont,
                index === activeNav && orderStyles.activeNav,
              ]}
              onPress={() => setActiveNav(index)}>
              <Text>{data.nav}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Text>{displayActiveComponent()}</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Favourites;
