import React, {useEffect, useState} from 'react';
import {
    BackHandler,
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../../../accessories/accessoriesStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../utils/status-bar-styles/status-bar-styles';
import Header from '../../../../../../../../components/Profile/Header';
import favouritesStyles from '../../../favourites/favouritesStyles';
import Button from '../../../../../../../../components/Button/Button';
import Input from '../../../../../../../../components/Input/AuthInput';
import inputStyles from '../../../../../../../../components/Input/InputStyles';
import SorryBg from '../../../../../../../../assets/images/profile/sorry-bg.svg';
import {primaryColor} from '../../../../../../onboarding/splash/splashstyles';
import {height} from '../../../../../home/children/diesel/dieselStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDown from '../../../../../../../../assets/images/gas/tabler_chevron-down.svg';
import historyDetailsStyles from '../../../../../home/children/electricity/children/electricity-history/history-details/historyDetailsStyles';
import authTopStyles from '../../../../../../../../components/Auth/AuthTopStyles';
import acctDeletedStyles from './acctDeletedStyles';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'acct-deleted'>;

function AcctDeleted({navigation}: Props) {
  // Retrieve route parameters, specifically `profileDetails` and `target`
  const route = useRoute<RouteProp<RootStackParamList, 'acct-deleted'>>();
  //   const {profileDetails, target} = route.params;
  // Function to close the app and reset login status
  const handleCloseApp = async () => {
    // await AsyncStorage.setItem('isLoggedIn', 'false'); // Set login status to false
    BackHandler.exitApp(); // Close the app
  };
  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        isFirstPage={false}
        title="Account deleted successfully"
        directory=""
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          favouritesStyles.scrollview,
          {paddingHorizontal: 16, height: height},
        ]}>
        <View style={acctDeletedStyles.sorryWrapper}>
          <SorryBg width={'100%'} height={96} />
          <Text style={acctDeletedStyles.sorryText}>
            We’re Sorry to See You Go
          </Text>
        </View>
        <View style={acctDeletedStyles.noteWrapper}>
          <Text style={acctDeletedStyles.note}>
            We’re sad to see you leave and hope to welcome you back soon. If you
            change your mind, simply log in within the next{' '}
            <Text style={acctDeletedStyles.boldText}>48 hours</Text> to cancel the deletion process. After that,
            your account <Text style={acctDeletedStyles.redText}>will be permanently deleted.</Text>
          </Text>
        </View>
        <View
            style={{
              marginTop: '30%',
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            <Button text="Close app" action={handleCloseApp} />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AcctDeleted;
