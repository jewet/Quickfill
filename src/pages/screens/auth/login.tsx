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
import {isDarkMode} from '../../../utils/status-bar-styles/status-bar-styles';
import Button from '../../../components/Button/Button';
import GoogleIcon from '../../../assets/images/auth/google_ic.svg';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../utils/redux/store/store';
import {setEmail, setPassword} from '../../../utils/redux/slice/auth';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'login'>;

function Login({navigation}: Props) {
  // Redux state selectors
  const dispatch = useDispatch();
  const {email, password} = useSelector((state: RootState) => state.auth);

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
          firstText="Welcome to Quikrefil"
          secondText="Log in to access your account and continue enjoying our services."
          enableBackArrow={false}
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
            action={() => console.log('Action triggered')}
            validate="email"
            onChange={text => dispatch(setEmail(text))}
          />
          <Input
            label="Passsword"
            placeholder="*********"
            value={password}
            secured={true}
            directory={'login-password'}
            keyboardType="default"
            action={() => navigation.navigate('forgot-password')}
            onChange={text => dispatch(setPassword(text))}
            validate="password"
          />
          <View style={{marginTop: 10, width: '100%'}}>
            <Button text="Login" action={() => navigation.navigate('home')} />
          </View>
          <View style={authStyles.orContainer}>
            <View style={authStyles.orLine}></View>
            <Text style={authStyles.orText}>Or</Text>
            <View style={authStyles.orLine}></View>
          </View>
          <TouchableOpacity style={authStyles.googleSignIn}>
            <GoogleIcon width={21} height={21} fill="none" />
            <Text style={[authStyles.orText, {color: '#FFFFFF'}]}>
              Sign in with Google
            </Text>
          </TouchableOpacity>
          <View style={authStyles.question}>
            <Text style={authStyles.orText}>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
              <Text style={[authStyles.orText, {color: '#FFC533'}]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
