import React from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../utils/redux/store/store';
import {
  setConfirmPassword,
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
  setPhoneNumber,
} from '../../../utils/redux/slice/auth';
import Toast from 'react-native-toast-message';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'signup'>;

function SignUp({navigation}: Props) {
  // Redux state selectors
  const dispatch = useDispatch();
  const {firstName, lastName, email, phoneNumber, password, confirmPassword} =
    useSelector((state: RootState) => state.auth);
  // Validation function
  const handleSignUp = () => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{6,12}$/;
    if (firstName.length! < 2) {
      Toast.show({
        type: 'error',
        text1: 'Incorrect First Name',
        text2: 'Name must be at least 2 characters',
      });
      return;
    }
    if (lastName.length! <2) {
      Toast.show({
        type: 'error',
        text1: 'Incorrect Last Name',
        text2: 'Name must be at least 2 characters',
      });
      return;
    }
    if (!emailRegex.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Email',
        text2: 'Please enter a valid email address.',
      });
      return;
    }
    if (!phoneRegex.test(phoneNumber)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid phone number length',
      });
      return;
    }

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

    navigation.navigate('email-verification');
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
          firstText="Get started with Quickrefil!"
          secondText="Sign up for free and r what we have to offer."
          enableBackArrow={false}
          hasEmail={false}
        />
        <View style={authStyles.inputCont}>
          <Input
            label="First name"
            placeholder="E.g. John"
            value={firstName}
            secured={false}
            directory={null}
            keyboardType="default"
            action={null}
            validate="firstNname"
            onChange={text => dispatch(setFirstName(text))}
          />
          <Input
            label="Last name"
            placeholder="E.g. Doe"
            value={lastName}
            secured={false}
            directory={null}
            keyboardType="default"
            action={null}
            validate="lastName"
            onChange={text => dispatch(setLastName(text))}
          />
          <Input
            label="Email address"
            placeholder="E.g. johndoe@gmail.com"
            value={email}
            secured={false}
            directory={null}
            keyboardType="default"
            action={() => console.log('Action triggered')}
            validate="email"
            onChange={text => dispatch(setEmail(text))}
          />
          <Input
            label="Phone number"
            placeholder=""
            value={phoneNumber}
            secured={false}
            directory={null}
            keyboardType="default"
            action={() => console.log('Action triggered')}
            validate="phone"
            onChange={text => dispatch(setPhoneNumber(text))}
          />
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
            text="Sign Up"
            action={handleSignUp}
          />
          <View style={authStyles.orContainer}>
            <View style={authStyles.orLine}></View>
            <Text style={authStyles.orText}>Or</Text>
            <View style={authStyles.orLine}></View>
          </View>
          <TouchableOpacity style={authStyles.googleSignIn}>
            <GoogleIcon width={21} height={21} fill="none" />
            <Text style={[authStyles.orText, {color: '#FFFFFF'}]}>
              Sign up with Google
            </Text>
          </TouchableOpacity>
          <View style={authStyles.question}>
            <Text style={authStyles.orText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={[authStyles.orText, {color: '#FFC533'}]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
         <Toast />
    </SafeAreaView>
  );
}

export default SignUp;
