import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import inputStyles from './InputStyles';
import Eye from '../../assets/images/auth/tabler_eye-closed.svg';
import ConfirmEye from '../../assets/images/auth/tabler_eye.svg';
import { useNavigation } from '@react-navigation/native';

interface Props {
  label: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  value: string;
  secured?: boolean;
  directory: string | null;
}

function Input({
  label,
  placeholder,
  keyboardType,
  value,
  secured,
  directory,
}: Props) {
  const [showPassword, setShowPassword] = useState(!secured);
  const navigation = useNavigation()

  return (
    <View style={inputStyles.inputContainer}>
      <Text style={inputStyles.label}>{label}</Text>
      {secured ? (
        <View style={inputStyles.securedInputWrapper}>
          <View style={inputStyles.passwordInput}>
            <TextInput
              placeholder={placeholder}
              keyboardType={keyboardType}
              style={inputStyles.securedInput}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {directory?.toLowerCase()==='confirm' ? (
                <ConfirmEye width={20} height={20} fill="none" />
              )
            :
            (
                <Eye width={20} height={20} fill="none" />
            )}
            </TouchableOpacity>
          </View>
          {directory?.toLowerCase()=== 'login-password' && (
            <TouchableOpacity style={inputStyles.forgotPassword} onPress={()=>navigation.navigate('forgot-password')}>
                <Text style={inputStyles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={inputStyles.input}
        />
      )}
    </View>
  );
}

export default Input;
