import React from 'react';
import {
  BackHandler,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../../../accessories/accessoriesStyles';
import Header from '../../../../../../../../components/Profile/Header';
import favouritesStyles from '../../../favourites/favouritesStyles';
import Button from '../../../../../../../../components/Button/Button';
import SorryFace from '../../../../../../../../assets/images/profile/sorry-face.svg';
import {height} from '../../../../../home/children/diesel/dieselStyles';
import acctDeletedStyles from './acctDeletedStyles';
import {MMKV} from 'react-native-mmkv';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'acct-deleted'>;

function AcctDeleted({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  // Retrieve route parameters, specifically `profileDetails` and `target`
  const route = useRoute<RouteProp<RootStackParamList, 'acct-deleted'>>();
  //   const {profileDetails, target} = route.params;
  // Initialize MMKV storage
  const storage = new MMKV();
  // Function to close the app and reset login status
  const handleCloseApp = async () => {
    storage.set('isLoggedIn', false);
    BackHandler.exitApp();
    navigation.navigate('login');
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
        {/* <View style={acctDeletedStyles.sorryWrapper}> */}
        <View style={acctDeletedStyles.sorryBg}>
          <SorryFace width={95} height={89} />
          <Text style={acctDeletedStyles.sorryText}>
            We’re Sorry to See You Go
          </Text>
        </View>
        {/* </View> */}
        <View style={acctDeletedStyles.noteWrapper}>
          <Text style={acctDeletedStyles.note}>
            We’re sad to see you leave and hope to welcome you back soon. If you
            change your mind, simply log in within the next{' '}
            <Text style={acctDeletedStyles.boldText}>48 hours</Text> to cancel
            the deletion process. After that, your account{' '}
            <Text style={acctDeletedStyles.redText}>
              will be permanently deleted.
            </Text>
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
