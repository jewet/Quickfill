import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CloseIcon from '../../../assets/images/electricity/close_btn.svg';
import NoteIcon from '../../../assets/images/gas/note.svg';
import electricityPaymentStyles from '../../../pages/screens/main/home/children/electricity/children/payment/paymentStyles';
import Button from '../../Button/Button';
import gasStyles from '../../../pages/screens/main/home/children/gas/gasStyles';
import homeStyles from '../../../pages/screens/main/home/home-styles';
import authStyles from '../../../pages/screens/auth/styles/authStyles';
import authTopStyles from '../../Auth/AuthTopStyles';
import {primaryColor} from '../../../pages/screens/onboarding/splash/splashstyles';

interface Props {
  navigateToConfirm: () => void;
  closeModal: () => void;
}

function DeleteProfileModal({navigateToConfirm, closeModal}: Props) {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const [countdown, setCountdown] = useState(60);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

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
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsResendEnabled(true);
    }
  }, [countdown]);

  const handleResendOTP = () => {
    if (isResendEnabled) {
      setCountdown(60);
      setIsResendEnabled(false);
    }
  };

  const handleOtpChange = (text: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  return (
    <SafeAreaView style={electricityPaymentStyles.modalContainer}>
      <View style={electricityPaymentStyles.modalBg}></View>
      {!showConfirm ? (
        <View style={[electricityPaymentStyles.modalCont, {height: '50%'}]}>
          <ScrollView>
            <View style={electricityPaymentStyles.paymentTopWrapper}>
              <View style={{display: 'flex', alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={closeModal}>
                  <CloseIcon
                    width={80}
                    height={80}
                    fill="none"
                    style={{marginRight: -20, marginTop: -20}}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={[
                  electricityPaymentStyles.topText,
                  {fontWeight: 700, textAlign: 'left'},
                ]}>
                Are you sure you want to permanently delete your profile?
              </Text>
              <View style={gasStyles.noteWrapper}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Text style={[homeStyles.orderType, {fontWeight: 700}]}>
                    Note{' '}
                  </Text>
                  <NoteIcon width={20} height={20} fill="none" />
                </View>
                <Text style={[homeStyles.idText, {marginTop: 5}]}>
                  Delivery is not included in the prices. The approximate
                  delivery cost will be shown on the next page.
                </Text>
              </View>
            </View>
            <View style={{width: '100%', paddingHorizontal: 16}}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  borderRadius: 30,
                  height: 48,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 30,
                  backgroundColor: '#DC5513',
                }}
                onPress={() => setShowConfirm(true)}>
                <Text style={{color: '#FFFFFF'}}>Delete </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      ) : (
        <View style={[electricityPaymentStyles.modalCont, {height: '55%'}]}>
          <View style={electricityPaymentStyles.paymentTopWrapper}>
            <View style={{display: 'flex', alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={closeModal}>
                <CloseIcon
                  width={80}
                  height={80}
                  fill="none"
                  style={{marginRight: -20, marginTop: -20}}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={[
                electricityPaymentStyles.topText,
                {fontWeight: 700, textAlign: 'left'},
              ]}>
              Confirm the OTP sent to your email to proceed.
            </Text>
          </View>
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
            <Button text="Confirm OTP" action={navigateToConfirm} />

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
        </View>
      )}
    </SafeAreaView>
  );
}

export default DeleteProfileModal;
