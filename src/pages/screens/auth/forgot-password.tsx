import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../utils/nav-routes/types';
import AuthTop from '../../../components/Auth/AuthTop';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../../components/Input/AuthInput';
import {ScrollView, StatusBar, View} from 'react-native';
import authStyles from './styles/authStyles';
import {isDarkMode} from '../../../utils/status-bar-styles/status-bar-styles';
import Button from '../../../components/Button/Button';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'forgot-password'>;

function ForgotPassword({navigation}: Props) {
  const [email, setEmail] = useState('');
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
            value={email}
            secured={false}
            directory={null}
            keyboardType="default"
            validate="email"
            action={() => console.log('Action triggered')}
            onChange={text => setEmail(text)}
          />
          <Button
            text="Send Code"
            action={() => navigation.navigate('otp-verification')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ForgotPassword;
