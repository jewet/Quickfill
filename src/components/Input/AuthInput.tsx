import React, { useState } from 'react';
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
import Dropdown from '../../assets/images/electricity/ic_round-arrow-back-ios-new.svg';
import { useNavigation } from '@react-navigation/native';
import SendIcon from '../../assets/images/orders/send.svg';
import { countries } from '../../utils/sample-data/input';


interface Props {
  label: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  value: string;
  validate?: string;
  secured?: boolean;
  directory: string | null;
  action: any;
  onChange: (text: string) => void;
  password?: string; // Required for confirm-password validation
}

function Input({
  label,
  placeholder,
  keyboardType,
  value,
  secured,
  directory,
  action,
  onChange,
  validate,
  password, // Optional: used for confirm-password validation
}: Props) {
  const [showPassword, setShowPassword] = useState(!secured);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();
  const [selectedCountry, setSelectedCountry] = useState(countries[1]); // Default: Nigeria 🇳🇬 (+234)
  const [showDropdown, setShowDropdown] = useState(false);
  // Password Regex (at least one letter, one number, one special character, and min 8 characters)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Validation function
  const validateInput = (text: string) => {
    if (validate?.toLowerCase() === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setError(!emailRegex.test(text) ? 'Invalid email address' : null);
    } else if (validate?.toLowerCase() === 'phone') {
      const phoneRegex = /^[0-9]{10,15}$/; 
      setError(!phoneRegex.test(text) ? 'Invalid phone number' : null);
    } else if (validate?.toLowerCase() === 'name') {
      setError(text.length < 2 ? 'Name must be at least 2 characters' : null);
    } else if (validate?.toLowerCase() === 'password') {
      setError(!passwordRegex.test(text) 
        ? 'Password must be at least 8 characters, include a number, letter & special character' 
        : null);
    } else if (validate?.toLowerCase() === 'confirm-password') {
      setError(password && text !== password ? 'Passwords do not match' : null);
    }else if (validate?.toLowerCase() === 'phone') {
      const phoneRegex = /^[0-9]{6,12}$/; // Allow 6-12 digits after country code
      setError(!phoneRegex.test(text) ? 'Invalid phone number length' : null);
    }
  };

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
              value={value}
              onChangeText={(text) => {
                onChange(text);
                validateInput(text);
              }}
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
              value={value}
              onChangeText={(text) => {
                onChange(text);
                validateInput(text);
              }}
            />
            <TouchableOpacity>
              <Dropdown width={20} height={20} fill="none" />
            </TouchableOpacity>
          </View>
        </View>
      ) : directory?.toLowerCase() === 'chat-bot' ? (
        <View style={inputStyles.securedInputWrapper}>
          <View style={inputStyles.passwordInput}>
            <TextInput
              placeholder={placeholder}
              keyboardType={keyboardType}
              style={inputStyles.securedInput}
              value={value}
              onChangeText={(text) => {
                onChange(text);
                validateInput(text);
              }}
            />
            <TouchableOpacity>
              <SendIcon width={16} height={16} fill="none" />
            </TouchableOpacity>
          </View>
        </View>
      ) : validate?.toLowerCase()=== 'phone' ? (
        <View style={inputStyles.phoneInputWrapper}>
          {/* Country Code Selection */}
          <TouchableOpacity
            style={inputStyles.countryPicker}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={inputStyles.flag}>{selectedCountry.flag}</Text>
            <Dropdown width={12} height={12} fill="none" />
          </TouchableOpacity>
            <Text style={inputStyles.dialCode}>{selectedCountry.dialCode}</Text>

          {/* Phone Number Input */}
          <TextInput
            placeholder={placeholder}
            keyboardType="phone-pad"
            style={inputStyles.phoneInput}
            value={value}
            onChangeText={(text) => {
              if (/^\d*$/.test(text)) {
                onChange(text);
                validateInput(text);
              }
            }}
            maxLength={12}
          />
        </View>
      )
    : (
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={inputStyles.input}
        value={value}
        onChangeText={(text) => {
          onChange(text);
          validateInput(text);
        }}
      />
    )}

      {/* Display error message */}
      {error && <Text style={inputStyles.errorText}>{error}</Text>}
    </View>
  );
}

export default Input;
