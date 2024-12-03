import React from 'react';
import Onboarding from '../../../components/Onboarding/Onboarding';
import OnboardingPic from '../../../../assets/images/onboarding/onboarding-img-1.svg';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../utils/nav-routes/types';
import AuthTop from '../../../components/Auth/AuthTop';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../../components/Input/AuthInput';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import authStyles from './styles/authStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../utils/status-bar-styles/status-bar-styles';
import Button from '../../../components/Button/Button';
import GoogleIcon from '../../../assets/images/auth/google_ic.svg';

type Props = StackScreenProps<RootStackParamList, 'reset-password'>;

function ResetPassword({navigation}: Props) {
  return (
    <SafeAreaView style={authStyles.authContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#FFFFFFF'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={authStyles.scrollview}>
        <AuthTop
          firstText="Create new password"
          secondText="Set up a strong password to protect your account."
        />
        <View style={authStyles.inputCont}>
          <Input
            label="New Passsword"
            placeholder="*********"
            value=""
            secured={true}
            directory={null}
          />
          <Input
            label="Confirm password"
            placeholder="*********"
            value=""
            secured={true}
            directory={'confirm'}
          />
          <Button text="Reset password" action={() => navigation.navigate('login')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ResetPassword;
