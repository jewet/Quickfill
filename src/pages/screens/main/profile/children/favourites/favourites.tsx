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
import accessoriesStyles from '../../../accessories/accessoriesStyles';
import Header from '../../../../../../components/Profile/Header';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProfileProps} from '../../../../../../utils/sample-data/profile';
import favouritesStyles from './favouritesStyles';
import orderStyles from '../../../orders/orderStyles';
import Accessories from './children/accessories/accessories';
import Vendors from './children/vendors/vendors';
import {
  items_data,
  ItemsProps,
} from '../../../../../../utils/sample-data/accessories';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../utils/redux/store/store';
import {setActiveNav} from '../../../../../../utils/redux/slice/profile';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'favourite'>;

function Favourites({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  // Retrieve route parameters, specifically `profileDetails`
  const route = useRoute<RouteProp<RootStackParamList, 'favourite'>>();
  const {profileDetails}: {profileDetails?: ProfileProps} = route.params || {};

  // Navigation items
  const fav_nav = [{nav: 'Accessories'}, {nav: 'Vendors'}];

  const dispatch = useDispatch();
  const {activeNav} = useSelector((state: RootState) => state.profile);

  // Function to handle navigation to item details
  const handleNavigation = (itemDetails: ItemsProps) => {
    navigation.navigate('item-details', {itemDetails});
  };

  // Function to display the active component based on `activeNav`
  const displayActiveComponent = () => {
    if (activeNav === 0)
      return (
        <Accessories
          profile_data={profileDetails}
          data={items_data}
          navigation={handleNavigation}
        />
      );
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
        directory=""
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={favouritesStyles.scrollview}>
        <View style={{width: '100%', paddingHorizontal: 16}}>
          <View style={orderStyles.orderNavWrapper}>
            {fav_nav.map((data, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  orderStyles.orderNavCont,
                  index === activeNav && orderStyles.activeNav,
                ]}
                onPress={() => dispatch(setActiveNav(index))}>
                <Text>{data.nav}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <Text>{displayActiveComponent()}</Text>
        {/* Render the active component based on the current tab */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Favourites;
