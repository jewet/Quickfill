import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../utils/nav-routes/types';
import AuthTop from '../../../components/Auth/AuthTop';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../../components/Input/AuthInput';
import {ScrollView, StatusBar, View} from 'react-native';
import authStyles from './styles/authStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../utils/status-bar-styles/status-bar-styles';
import Button from '../../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../utils/redux/store/store';
import {setEmail} from '../../../utils/redux/slice/auth';
import Toast from 'react-native-toast-message';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'forgot-password'>;

function ForgotPassword({navigation}: Props) {
  // Redux state selectors
  const dispatch = useDispatch();
  const {email} = useSelector((state: RootState) => state.auth);
  // Validation function
  const handleContinue = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Email',
        text2: 'Please enter a valid email address.',
      });
      return;
    }

    navigation.navigate('otp-verification');
  };
  return (
    <SafeAreaView style={authStyles.authContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
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
            value={email}
            secured={false}
            directory={null}
            keyboardType="default"
            validate="email"
            action={() => console.log('Action triggered')}
            onChange={text => dispatch(setEmail(text))}
          />
          <Button
            text="Send Code"
            action={()=>navigation.navigate('otp-verification')}
          />
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
}

export default ForgotPassword;
