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

type Props = StackScreenProps<RootStackParamList, 'forgot-password'>;

function ForgotPassword({navigation}: Props) {
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
          firstText="Forgot Password?"
          secondText="Don't worry! It occurs. Please enter the email address linked with your account."
          enableBackArrow={true}
          hasEmail={false}
        />
        <View style={authStyles.inputCont}>
          <Input
            label="Email address"
            placeholder="E.g. johndoe@gmail.com"
            value=""
            secured={false}
            directory={null}
            keyboardType='default'
            // onChangeText={()=>void}
            action={null}
          />
          <Button text="Send Code" action={() => navigation.navigate('reset-password')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ForgotPassword;
