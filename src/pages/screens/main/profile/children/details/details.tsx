import React, {useState} from 'react';
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
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import ArrowRight from '../../../../../../assets/images/profile/black_tabler_chevron-right.svg';
import EditIcon from '../../../../../../assets/images/profile/tabler_edit.svg';
import DeleteIcon from '../../../../../../assets/images/profile/tabler_trash.svg';
import addressStyles from '../address/addressStyles';
import DeleteProfileModal from '../../../../../../components/Profile/Modal/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../utils/redux/store/store';
import {setShowModal} from '../../../../../../utils/redux/slice/profile';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'user-details'>;

function Details({navigation}: Props) {
  // Retrieve route parameters, specifically `profileDetails`
  const route = useRoute<RouteProp<RootStackParamList, 'user-details'>>();
  const {profileDetails}: {profileDetails?: ProfileProps} = route.params || {};
  const dispatch = useDispatch();
  const {showModal} = useSelector((state: RootState) => state.profile);

  // Function to navigate to the update form screen with the target data (name, username, birthday, email)
  const handleNavigation = (
    profileDetails: ProfileProps,
    target: 'name' | 'username' | 'birthday' | 'email' | 'phone number',
  ) => {
    navigation.navigate('update-form', {profileDetails, target});
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
        style={[favouritesStyles.scrollview, {paddingHorizontal: 16}]}>
        {/* Render list of user details dynamically */}
        <View style={{paddingBottom: 100}}>
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
              disabled={!!data.gender}
              onPress={() => {
                if (data.name) handleNavigation(profileDetails!, 'name');
                if (data.username)
                  handleNavigation(profileDetails!, 'username');
                if (data.email) handleNavigation(profileDetails!, 'email');
                if (data.phone_number)
                  handleNavigation(profileDetails!, 'phone number');
                if (data.dob) handleNavigation(profileDetails!, 'birthday');
              }}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <data.icon width={24} height={24} fill="none" />
                <View>
                  {/* Display user details dynamically */}
                  <Text style={addressStyles.location}>
                    {data.name ||
                      data.phone_number ||
                      data.username ||
                      data.email ||
                      data.gender ||
                      data.dob}
                  </Text>
                  <Text style={addressStyles.locationBottom}>{data.title}</Text>
                </View>
              </View>

              {/* Verification indicator for email */}
              {data.email && (
                <View
                  style={{
                    backgroundColor: '#DC5513',
                    borderRadius: 20,
                    paddingVertical: 3,
                    paddingHorizontal: 8,
                  }}>
                  <Text
                    style={{color: '#FFFFFF', fontWeight: 600, fontSize: 10}}>
                    Unverified
                  </Text>
                </View>
              )}

              {/* Editable or navigational icons */}
              {data.name && (
                <TouchableOpacity
                  onPress={() => handleNavigation(profileDetails!, 'name')}>
                  <EditIcon width={24} height={24} fill="none" />
                </TouchableOpacity>
              )}
              {data.username && (
                <TouchableOpacity
                  onPress={() => handleNavigation(profileDetails!, 'username')}>
                  <EditIcon width={24} height={24} fill="none" />
                </TouchableOpacity>
              )}
              {data.email && (
                <TouchableOpacity
                  onPress={() => handleNavigation(profileDetails!, 'email')}>
                  <ArrowRight width={24} height={24} fill="none" />
                </TouchableOpacity>
              )}
              {data.dob && (
                <TouchableOpacity
                  onPress={() => handleNavigation(profileDetails!, 'birthday')}>
                  <EditIcon width={24} height={24} fill="none" />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={{
              width: '100%',
              borderRadius: 30,
              height: 48,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              marginTop: 50,
              backgroundColor: '#DC5513',
            }}
            onPress={() => dispatch(setShowModal(true))}>
            <Text style={{color: '#FFFFFF'}}>Delete profile</Text>
            <DeleteIcon width={20} height={20} fill="none" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      {showModal && (
        <DeleteProfileModal
          navigateToConfirm={() => navigation.navigate('acct-deleted')}
          closeModal={() => dispatch(setShowModal(false))}
        />
      )}
    </SafeAreaView>
  );
}

export default Details;
