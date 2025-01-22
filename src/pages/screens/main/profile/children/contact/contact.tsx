import React from 'react';
import {
  Alert,
  Linking,
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
import favouritesStyles from '../favourites/favouritesStyles';
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import TopImg from '../../../../../../assets/images/profile/top_img.svg';
import ArrowRight from '../../../../../../assets/images/profile/tabler_chevron-right.svg';
import addressStyles from '../address/addressStyles';
import contactStyles from './contactStyles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'contact'>;

function Contact({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  // Retrieve route parameters, specifically `profileDetails`
  const route = useRoute<RouteProp<RootStackParamList, 'contact'>>();
  const {profileDetails}: {profileDetails?: ProfileProps} = route.params || {};

  // Function to handle actions
  const handleContactOption = async (option: string) => {
    try {
      if (option === 'Email Us') {
        const email = 'support@example.com';
        const subject = 'Support Request';
        const body = 'Please describe your issue here.';
        const url = `mailto:${email}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`;
        await Linking.openURL(url);
      } else if (option === 'Chat on Whatsapp') {
        const phoneNumber = '+2348069684739';
        const message = 'Hello, I need assistance.';
        const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
          message,
        )}`;
        await Linking.openURL(url);
      } else if (option === 'Call us') {
        const phoneNumber = '+2348069684739';
        const url = `tel:${phoneNumber}`;
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Invalid option.');
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to perform this action.');
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
        title="Contact support"
        directory=""
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[favouritesStyles.scrollview, {paddingHorizontal: 16}]}>
        <View style={contactStyles.topWrapper}>
          <TopImg width={128} height={128} fill="none" />
          <Text style={contactStyles.topText}>Got a problem? Let’s fix it</Text>
        </View>

        {/* Render list of contact support options dynamically */}
        <View style={{width: '100%', paddingBottom: 150}}>
          {profileDetails?.profile?.details?.map((data: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={[
                orderDetailsStyles.flexContainer,
                {
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#E5E5EA',
                  paddingVertical: 25,
                },
              ]}
              onPress={() => handleContactOption(data.title)}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <data.icon width={40} height={40} fill="none" />
                <View>
                  <Text style={addressStyles.location}>{data.title}</Text>
                  <Text style={addressStyles.locationBottom}>{data.more}</Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => handleContactOption(data.title)}>
                <ArrowRight width={24} height={24} fill="none" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Contact;
