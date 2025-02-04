import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../utils/nav-routes/types';
import AuthTop from '../../../components/Auth/AuthTop';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Auth/Modal/Modal';
import authStyles from './styles/authStyles';
import authTopStyles from '../../../components/Auth/AuthTopStyles';
import {primaryColor} from '../onboarding/splash/splashstyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../utils/redux/store/store';
import {
  setCountdown,
  setIsResendEnabled,
  setOtp,
  setShowModal,
} from '../../../utils/redux/slice/auth';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'otp-verification'>;

function Otpverification({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
   const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const dispatch = useDispatch();
  const {showModal, otp, countdown, isResendEnabled} = useSelector(
    (state: RootState) => state.auth,
  );
  // Format countdown as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // Start countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        dispatch(setCountdown(countdown - 1));
      }, 1000);
      return () => clearInterval(timer);
    } else {
      dispatch(setIsResendEnabled(true));
    }
  }, [countdown]);

  // Handle OTP input change
  const handleOtpChange = (text: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    dispatch(setOtp(updatedOtp));

    // Automatically focus the next input
    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace to focus previous input
  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOTP = () => {
    if (isResendEnabled) {
      dispatch(setCountdown(60));
      dispatch(setIsResendEnabled(false));
    }
  };

  return (
    <SafeAreaView style={authStyles.authContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={authStyles.scrollview}>
        <AuthTop
          firstText="OTP Verification"
          secondText="Enter the verification code we sent to your email address."
          enableBackArrow={true}
          hasEmail={false}
        />
        <View style={authStyles.inputCont}>
          <View style={authStyles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => (inputRefs.current[index] = ref)}
                style={[
                  authStyles.otpInput,
                  digit
                    ? {borderColor: '#FFC533', backgroundColor: 'white'}
                    : {borderColor: '#F7F6F2', backgroundColor: '#F7F6F2'},
                ]}
                value={digit}
                onChangeText={text => handleOtpChange(text, index)}
                onKeyPress={event => handleKeyPress(event, index)}
                maxLength={1}
                keyboardType="numeric"
              />
            ))}
          </View>
          <Button text="Verify" action={() => dispatch(setShowModal(true))} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '10%',
            }}>
            <Text style={authTopStyles.secondText}>
              Did not receive any code?{' '}
            </Text>
            {isResendEnabled ? (
              <TouchableOpacity onPress={handleResendOTP}>
                <Text style={{color: primaryColor}}>Resend OTP</Text>
              </TouchableOpacity>
            ) : (
              <Text style={{color: primaryColor}}>
                Resend in {formatTime(countdown)}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
      {showModal && (
        <Modal
          topText="Verified!"
          bottomText="Your otp verification was successful."
          navigateTo={() => {
            navigation.navigate('reset-password');
            dispatch(setShowModal(false));
          }}
          btnText="Proceed"
        />
      )}
    </SafeAreaView>
  );
}

export default Otpverification;
