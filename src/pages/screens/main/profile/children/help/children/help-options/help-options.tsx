import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
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
import {height} from '../../../../../home/children/diesel/dieselStyles';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'help-options'>;

function HelpOptions({navigation}: Props) {
  // Retrieve route parameters, specifically `profileDetails` and `target`
  const route = useRoute<RouteProp<RootStackParamList, 'help-options'>>();
  const {profileDetails, target} = route.params;

  // Determine the header title based on the target parameter
  const headerTitle =
    target === 'faq'
      ? 'FAQ’s'
      : target === 'user-policy'
      ? 'User Policy'
      : target === 'rating'
      ? 'Ratings'
      : 'Share';

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        isFirstPage={false}
        title={headerTitle}
        directory="" 
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          favouritesStyles.scrollview,
          {paddingHorizontal: 16, height: height}, 
        ]}>
        {/* Content goes here */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HelpOptions;
