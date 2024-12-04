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
import Dropdown from '../../assets/images/electricity/dropdown.svg';
import {useNavigation} from '@react-navigation/native';

interface Props {
    label: string;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
    value: string;
    secured?: boolean;
    directory: string | null;
    action: any; 
  }
  
function Input({
  label,
  placeholder,
  keyboardType,
  value,
  secured,
  directory,
  action,
}: Props) {
  const [showPassword, setShowPassword] = useState(!secured);
  const navigation = useNavigation();

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
              {directory?.toLowerCase() === 'confirm' ? (
                <ConfirmEye width={20} height={20} fill="none" />
              ) : (
                <Eye width={20} height={20} fill="none" />
              )}
            </TouchableOpacity>
          </View>
          {directory?.toLowerCase() === 'login-password' && (
            <TouchableOpacity
              style={inputStyles.forgotPassword}
              onPress={action}>
              <Text style={inputStyles.forgotPasswordText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          )}
        </View>
      ) : directory?.toLowerCase() === 'electricity provider' ? (
        <View style={inputStyles.securedInputWrapper}>
        <View style={inputStyles.passwordInput}>
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={inputStyles.securedInput}
          />
          <TouchableOpacity >
              <Dropdown width={20} height={20} fill="none" />
          </TouchableOpacity>
        </View>
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
