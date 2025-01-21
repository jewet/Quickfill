import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../utils/nav-routes/types';
import AuthTop from '../../../components/Auth/AuthTop';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../../components/Input/AuthInput';
import {ScrollView, StatusBar, View} from 'react-native';
import authStyles from './styles/authStyles';
import {backgroundStyle, isDarkMode} from '../../../utils/status-bar-styles/status-bar-styles';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Auth/Modal/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../utils/redux/store/store';
import {
  setConfirmPassword,
  setPassword,
  setShowModal,
} from '../../../utils/redux/slice/auth';
import Toast from 'react-native-toast-message';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'reset-password'>;

function ResetPassword({navigation}: Props) {
  // Redux state selectors
  const dispatch = useDispatch();
  const {showModal, password, confirmPassword} = useSelector(
    (state: RootState) => state.auth,
  );
  // Validation function
    const handleContinue = () => {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
      if (!passwordRegex.test(password)) {
        Toast.show({
          type: 'error',
          text1: 'Invalid Password',
          text2:
            'Password must be at least 8 characters, include a number, letter & special character',
        });
        return;
      }
      if (confirmPassword !== password) {
        Toast.show({
          type: 'error',
          text1: 'Invalid confirm Password',
          text2: 'Passwords do not match',
        });
        return;
      }
  
      dispatch(setShowModal(true))
    };
  return (
    <SafeAreaView style={[authStyles.authContainer, {position: 'relative'}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
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
            onChange={text => dispatch(setPassword(text))}
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
            onChange={text => dispatch(setConfirmPassword(text))}
            validate="confirm-password"
            password={password}
          />
          <Button
            text="Reset password"
            action={handleContinue}
          />
        </View>
      </ScrollView>
      <Toast />
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
