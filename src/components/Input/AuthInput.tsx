import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import inputStyles from './InputStyles';
import Eye from '../../assets/images/auth/tabler_eye-closed.svg';
import ConfirmEye from '../../assets/images/auth/tabler_eye.svg';
import SearchIcon from '../../assets/images/auth/country-search.svg';
import Dropdown from '../../assets/images/electricity/ic_round-arrow-back-ios-new.svg';
import SendIcon from '../../assets/images/orders/send.svg';
import {countries} from '../../utils/sample-data/input';
import {ScrollView} from 'react-native-gesture-handler';
import electricityHistoryStyles from '../../pages/screens/main/home/children/electricity/children/electricity-history/electricityHistoryStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../utils/redux/store/store';
import {
  setSearchQuery,
  setSelectedCountry,
  setShowDropdown,
} from '../../utils/redux/slice/auth';

interface Props {
  label: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  validate?: string;
  secured?: boolean;
  directory: string | null;
  action?: any;
  onChange: (text: string) => void;
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  password?: string;
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
}: Props) {
  const dispatch = useDispatch();
  const {error, selectedCountry, showDropdown, searchQuery} = useSelector(
    (state: RootState) => state.auth,
  );
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secured);

  const filteredCountries = countries.filter(
    country =>
      country.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dialCode.includes(searchQuery),
  );

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
              secureTextEntry={!isPasswordVisible}
              value={value}
              onChangeText={text => {
                onChange(text);
                // validateInput(text);
              }}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              {isPasswordVisible ? (
                <Eye width={20} height={20} fill="none" />
              ) : (
                <ConfirmEye width={20} height={20} fill="none" />
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
              onChangeText={text => {
                onChange(text);
                // validateInput(text);
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
              onChangeText={text => {
                onChange(text);
                // validateInput(text);
              }}
            />
            <TouchableOpacity>
              <SendIcon width={16} height={16} fill="none" />
            </TouchableOpacity>
          </View>
        </View>
      ) : validate?.toLowerCase() === 'phone' ? (
        <View style={{width: '100%', position: 'relative'}}>
          <View style={inputStyles.phoneInputWrapper}>
            {/* Country Code Selection */}
            <TouchableOpacity
              style={inputStyles.countryPicker}
              onPress={() => dispatch(setShowDropdown(!showDropdown))}>
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
              onChangeText={text => {
                if (/^\d*$/.test(text)) {
                  onChange(text);
                  // validateInput(text);
                }
              }}
              maxLength={11}
            />
          </View>
          {/* Country Code Dropdown */}
          {showDropdown && (
            <View style={inputStyles.countryDropdown}>
              {/* Search Input */}
              <View style={inputStyles.countrySearch}>
                <SearchIcon width={18} height={18} fill="none" />
                <TextInput
                  placeholder="Search country code"
                  style={inputStyles.phoneInput}
                  value={searchQuery}
                  onChangeText={text => dispatch(setSearchQuery(text))}
                  autoFocus={true}
                />
              </View>

              {/* Country List */}
              <ScrollView style={inputStyles.countriesWrapper}>
                {filteredCountries.length > 0 ? (
                  <>
                    {filteredCountries.map((country, index) => (
                      <TouchableOpacity
                        key={index}
                        style={inputStyles.countries}
                        onPress={() => {
                          dispatch(setSelectedCountry(country));
                          dispatch(setShowDropdown(false));
                          Keyboard.dismiss();
                        }}>
                        <View style={inputStyles.countriesLeft}>
                          <Text style={inputStyles.flag}>{country.flag}</Text>
                          <Text style={inputStyles.country}>
                            {country.country}
                          </Text>
                        </View>
                        <Text style={inputStyles.dialCode}>
                          {country.dialCode}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </>
                ) : (
                  <Text
                    style={[
                      electricityHistoryStyles.notFound,
                      {marginTop: '10%'},
                    ]}>
                    Country not found
                  </Text>
                )}
              </ScrollView>
            </View>
          )}
        </View>
      ) : validate?.toLowerCase() === 'meter-number' ? (
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={inputStyles.input}
          value={value}
          onChangeText={text => {
            onChange(text);
            // validateInput(text);
          }}
          maxLength={10}
        />
      ) : (
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={inputStyles.input}
          value={value}
          onChangeText={text => {
            onChange(text);
            // validateInput(text);
          }}
        />
      )}

      {error && <Text style={inputStyles.errorText}>{error}</Text>}
    </View>
  );
}

export default Input;
