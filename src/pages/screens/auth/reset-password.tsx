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
import Modal from '../../../components/Auth/Modal/Modal';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'reset-password'>;

function ResetPassword({navigation}: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <SafeAreaView style={[authStyles.authContainer, {position: 'relative'}]}>
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
          enableBackArrow={true}
          hasEmail={false}
        />
        <View style={authStyles.inputCont}>
          <Input
            label="Passsword"
            placeholder="*********"
            value={password}
            secured={true}
            directory={null}
            keyboardType="default"
            action={null}
            onChange={text => setPassword(text)}
            validate="password"
          />
          <Input
            label="Confirm password"
            placeholder="*********"
            value={confirmPassword}
            secured={true}
            directory={'confirm'}
            keyboardType="default"
            action={null}
            onChange={text => setConfirmPassword(text)}
            validate="confirm-password"
            password={password}
          />
          <Button text="Reset password" action={() => setShowModal(true)} />
        </View>
      </ScrollView>
      {showModal && (
        <Modal
          topText="Confirmed"
          bottomText="Your password has been successfully changed"
          navigateTo={() => navigation.navigate('login')}
          btnText="Back to login"
        />
      )}
    </SafeAreaView>
  );
}

export default ResetPassword;
