import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ProfileIcon from '../../../../assets/images/bottom-nav-icons/active-tabler_profile.svg';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../utils/nav-routes/types';
import homeStyles from '../home/home-styles';
import accessoriesStyles from '../accessories/accessoriesStyles';
import Header from '../../../../components/Profile/Header';
import primaryBtnStyles from '../../../../components/Button/ButtonStyles';
import LinearGradient from 'react-native-linear-gradient';
import profileStyles from './profileStyles';
import Edit from '../../../../assets/images/profile/edit.svg';
import Referral from '../../../../assets/images/profile/referral.svg';
import ArrowRight from '../../../../assets/images/profile/tabler_chevron-right.svg';
import orderDetailsStyles from '../orders/children/order-details/orderDetailsStyles';
import {
  profile_data,
  ProfileProps,
} from '../../../../utils/sample-data/profile';

type Props = StackScreenProps<RootStackParamList, 'profile'>;

function Profile({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };

  const navigateToProfileSection = (
    profileName: string,
    navigation: any,
    data: ProfileProps,
  ) => {
    switch (profileName) {
      case 'Referral code':
        navigation.navigate('referral', {profileDetails: data});
        break;
      case 'My Wallet':
        navigation.navigate('user-wallet', {profileDetails: data});
        break;
      case 'My Details':
        navigation.navigate('user-details', {profileDetails: data});
        break;
      case 'My Favourites':
        navigation.navigate('favourite', {profileDetails: data});
        break;
      case 'Saved Addresses':
        navigation.navigate('user-address', {profileDetails: data});
        break;
      case 'Payment':
        navigation.navigate('user-payment', {profileDetails: data});
        break;
      case 'Help/feedback':
        navigation.navigate('help', {profileDetails: data});
        break;
      case 'Contact/support':
        navigation.navigate('contact', {profileDetails: data});
        break;
      default:
        console.warn('Navigation route not defined for this item.');
        break;
    }
  };

  const personalDetails = profile_data
    .find(item => item.profile.type === 'My Details');

  const linear_height = Platform.OS === 'ios' ? 110 : 'auto';
  const padding_horizontal = Platform.OS === 'ios' ? 20 : 10;

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        isFirstPage={true}
        title="Profile settings"
        directory=""
      />
      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        style={profileStyles.scrollview}>
        <View style={profileStyles.profileTop}>
          <LinearGradient
            colors={['#FFD366', '#FFB600']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={profileStyles.profileTopBtn}>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  height: linear_height,
                  paddingRight: padding_horizontal,
                },
              ]}>
              <View style={{display: 'flex', gap: 5}}>
                <Text style={profileStyles.name}>Samuel Ministar</Text>
                <Text style={profileStyles.username}>@ministar2134</Text>
                <Text style={profileStyles.bal}>
                  Main wallet: <Text style={profileStyles.amt}>₦96,484.09</Text>
                </Text>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate('user-details', {profileDetails: personalDetails})}>
                <Edit width={50} height={50} fill="none" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: 20,
            marginTop: 20,
          }}>
          {profile_data.slice(0, 1).map((data, index) => (
            <TouchableOpacity
              style={[
                orderDetailsStyles.flexContainer,
                profileStyles.referralWrapper,
              ]}
              key={index}
              onPress={() =>
                navigateToProfileSection(data.profile.type, navigation, data)
              }>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <Referral width={40} height={40} fill="none" />
                <TouchableOpacity
                  onPress={() =>
                    navigateToProfileSection(
                      data.profile.type,
                      navigation,
                      data,
                    )
                  }>
                  <Text style={profileStyles.referralCode}>
                    {data.profile.type}
                  </Text>
                  <Text style={profileStyles.referralText}>
                    Refer friends & earn!
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigateToProfileSection(data.profile.type, navigation, data)
                }>
                <ArrowRight width={24} height={24} fill="none" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginTop: 10,
              paddingBottom: 200,
            }}>
            {profile_data.slice(1, profile_data.length).map((data, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  orderDetailsStyles.flexContainer,
                  {justifyContent: 'space-between'},
                ]}
                onPress={() =>
                  navigateToProfileSection(data.profile.type, navigation, data)
                }>
                <TouchableOpacity
                  style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}
                  onPress={() =>
                    navigateToProfileSection(
                      data.profile.type,
                      navigation,
                      data,
                    )
                  }>
                  <TouchableOpacity
                    onPress={() =>
                      navigateToProfileSection(
                        data.profile.type,
                        navigation,
                        data,
                      )
                    }>
                    <data.icon width={40} height={40} fill="none" />
                  </TouchableOpacity>
                  <Text style={profileStyles.referralCode}>
                    {data.profile.type}
                  </Text>
                {data.profile.type.toLowerCase() === 'my details' && (
                  <View
                    style={{
                      backgroundColor: '#F04545',
                      borderRadius: 20,
                      paddingVertical: 8,
                      paddingHorizontal: 16,
                    }}>
                    <Text
                      style={{color: '#FFFFFF', fontWeight: 700, fontSize: 12}}>
                      Verify email
                    </Text>
                  </View>
                )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigateToProfileSection(
                      data.profile.type,
                      navigation,
                      data,
                    )
                  }>
                  <ArrowRight width={24} height={24} fill="none" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
