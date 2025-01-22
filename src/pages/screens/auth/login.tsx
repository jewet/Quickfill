import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../utils/nav-routes/types';
import AuthTop from '../../../components/Auth/AuthTop';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StatusBar, Text, TouchableOpacity, useColorScheme, View} from 'react-native';
import authStyles from './styles/authStyles';
import Button from '../../../components/Button/Button';
import GoogleIcon from '../../../assets/images/auth/google_ic.svg';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../utils/redux/store/store';
import {setEmail, setPassword} from '../../../utils/redux/slice/auth';
import Toast from 'react-native-toast-message';
import Input from '../../../components/Input/AuthInput';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = StackScreenProps<RootStackParamList, 'login'>;

function Login({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
   const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const dispatch = useDispatch();
  const {email, password} = useSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Email',
        text2: 'Please enter a valid email address.',
      });
      return;
    }

    if (!passwordRegex.test(password)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Password',
        text2:
        'Use 8+ characters, with a number, letter, & symbol.',
      });
      return;
    }

    navigation.navigate('home');
  };

  return (
    <SafeAreaView style={authStyles.authContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={authStyles.scrollview}>
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
            keyboardType="email-address"
            validate="email"
            onChange={text => dispatch(setEmail(text))}
          />
          <Input
            label="Password"
            placeholder="*********"
            value={password}
            secured
            directory="login-password"
            keyboardType="default"
            validate="password"
            action={()=>navigation.navigate('forgot-password')}
            onChange={text => dispatch(setPassword(text))}
          />
          <View style={{marginTop: 10, width: '100%'}}>
            <Button text="Login" action={handleLogin} />
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
              <Text style={[authStyles.orText, {color: '#FFC533'}]}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
}

export default Login;
