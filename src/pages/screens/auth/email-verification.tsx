import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
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

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'email-verification'>;

function Emailverification({navigation}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const [countdown, setCountdown] = useState(60);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  // Format countdown as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0'); // Ensures two digits (e.g., "01")
    const secs = (seconds % 60).toString().padStart(2, '0'); // Ensures two digits (e.g., "09")
    return `${mins}:${secs}`;
  };

  // Start countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsResendEnabled(true);
    }
  }, [countdown]);

  // Handle OTP input change
  const handleOtpChange = (text: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

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

  // Resend OTP
  const handleResendOTP = () => {
    if (isResendEnabled) {
      setCountdown(60);
      setIsResendEnabled(false);
      // Call function to resend OTP (API request or mock logic)
      console.log('Resending OTP...');
    }
  };

  return (
    <SafeAreaView style={authStyles.authContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={authStyles.scrollview}>
        <AuthTop
          firstText="Verify Your Email."
          secondText="Enter the verification code we sent to"
          enableBackArrow={true}
          hasEmail={true}
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
          <Button text="Verify" action={() => setShowModal(true)} />
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
          bottomText="Your email verification was successful."
          navigateTo={() => {
            navigation.navigate('login');
            setShowModal(false);
          }}
          btnText="Login"
        />
      )}
    </SafeAreaView>
  );
}

export default Emailverification;
