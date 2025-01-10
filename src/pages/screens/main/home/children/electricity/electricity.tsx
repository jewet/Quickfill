import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import electricityStyles from './electrictyStyles';
import Input from '../../../../../../components/Input/AuthInput';
import Button from '../../../../../../components/Button/Button';
import Dropdown from '../../../../../../assets/images/electricity/dropdown.svg';
import inputStyles from '../../../../../../components/Input/InputStyles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  electricity_data,
  ElectricityProps,
  meter_data,
} from '../../../../../../utils/sample-data/electricity';
import ElectricityPayment from './children/payment/payment';
import {backgroundStyle} from '../../../../../../utils/status-bar-styles/status-bar-styles';
import ElectricityProvider from './children/electricity-provider/electricity-providers';
import Header from '../../../../../../components/Electricity/Header/Header';

// Type definition for navigation props
type Props = StackScreenProps<RootStackParamList, 'electricity'>;

function Electricity({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const route = useRoute<RouteProp<RootStackParamList, 'electricity'>>();
  const {electricityProvider}: {electricityProvider?: ElectricityProps} =
    route.params || {};

  const [showElectricityProviderModal, setShowElectricityProviderModal] =
    useState<boolean>(false);
  const [amount, setAmount] = useState<string>(''); // Store amount as a string
  const [meterNumber, setMeterNumber] = useState<string>('');
  const [meterName, setMeterName] = useState<string>('');
  const [isSelected, setIsSelected] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState(electricity_data);
  const [selectedProvider, setSelectedProvider] =
    useState<ElectricityProps | null>(null);
  const handleSearch = (text: string) => {
    setSearchQuery(text);

    if (text.trim() === '') {
      setFilteredData(electricity_data); // Reset to full list when search is empty
    } else {
      const filtered = electricity_data.filter(item =>
        item.electricity.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  };

  const handleSelectProvider = (index: number) => {
    setIsSelected(index);
    setSearchQuery(electricity_data[index].electricity);
  };
  // Check if all fields are filled
  const isFormValid =
    selectedProvider &&
    amount.trim() !== '' &&
    meterNumber.trim() !== '' &&
    meterNumber.length === 10;

  // Handle navigation back
  const handleBack = () => {
    navigation.goBack();
  };

  // Handle Amount Input Change
  const handleAmountChange = (value: string) => {
    // Allow only numbers
    const numericValue = value.replace(/[^0-9]/g, '');
    setAmount(numericValue);
  };

  // Handle Meter Number Input Change
  const handleMeterNumberChange = (value: string) => {
    // Ensure only numeric values and limit to 11 digits
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 10);
    setMeterNumber(numericValue);

    if (numericValue.length === 10) {
      // Pick a random meter name when input reaches 10 digits
      const randomIndex = Math.floor(Math.random() * meter_data.length);
      setMeterName(meter_data[randomIndex].name);
    } else {
      setMeterName('');
    }
  };

  const userAddress = (provider: string) => {
    switch (provider) {
      case 'Eko Electricity PrePaid':
        return '12 Admiralty Wy, Eti-Osa, Lagos 106104, Lagos';
      case 'Jos Electricity PrePaid':
        return 'Jos';
      case 'Port-Harcourt Electricity PrePaid':
        return 'Port-Harcourt';
      case 'Kano Electricity PrePaid':
        return 'Kano';
      case 'Enugu Electricity PrePaid':
        return 'Enugu';
      case 'Kaduna Electricity PrePaid':
        return 'Kaduna';
      case 'Ibadan Electricity PrePaid':
        return 'Ibadan';
      case 'Abuja Electricity PrePaid':
        return 'Abuja';
      default:
        console.warn('Address not found');
        return '';
    }
  };

  // Naigate to the ElectricityPurchaseSummary Page
  const handleContinue = () => {
    if (isFormValid) {
      const address = userAddress(selectedProvider?.electricity || '');
      navigation.navigate('electricity-purchase-summary', {
        selectedProvider,
        amount,
        meterNumber,
        meterName,
        address,
      });
    }
  };

  return (
    <SafeAreaView
      style={[electricityStyles.electricityContainer, {position: 'relative'}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        handleGoBack={handleBack}
        title="Electricity"
        historyIconColor="black"
        historyNav={() => navigation.navigate('electricity-history')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={electricityStyles.scrollview}>
        {/* Electricity Provider Selection */}
        <View style={inputStyles.inputContainer}>
          <Text style={inputStyles.label}>Electricity provider</Text>
          <View style={inputStyles.securedInputWrapper}>
            <TouchableOpacity
              style={inputStyles.passwordInput}
              onPress={() => setShowElectricityProviderModal(true)}>
              <Text style={inputStyles.securedInput}>
                {selectedProvider
                  ? selectedProvider.electricity
                  : 'Select service provider'}
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('electricity-provider')}>
                <Dropdown width={20} height={20} fill="none" />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>

        {/* Amount Input */}
        <Input
          label="Amount (NGN)"
          placeholder="0.00"
          value={
            amount ? `₦${Intl.NumberFormat().format(Number(amount))}` : '₦0'
          }
          secured={false}
          directory={null}
          keyboardType="numeric"
          action={null}
          onChange={handleAmountChange}
        />

        {/* Meter Number Input */}
        <Input
          label="Meter number"
          placeholder="e.g 11223344556"
          value={meterNumber}
          secured={false}
          directory={null}
          keyboardType="numeric"
          action={null}
          onChange={handleMeterNumberChange}
          validate="meter-number"
        />
        {/* Meter Name (Displayed only if meter number is entered) */}
        {meterNumber.trim() !== '' && (
          <View style={inputStyles.inputContainer}>
            <Text style={inputStyles.label}>Meter name</Text>
            <View
              style={[
                inputStyles.securedInputWrapper,
                {borderColor: '#999999', backgroundColor: '#DBDBDB'},
              ]}>
              <View style={inputStyles.passwordInput}>
                <Text style={inputStyles.securedInput}>
                  {meterName ? meterName : 'loading...'}
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* Continue Button - Disabled if form is incomplete */}
        <View style={{width: '100%', marginTop: 20}}>
          <Button text="Continue" action={handleContinue} />
        </View>
      </ScrollView>

      {/* Payment Modal */}
      {showElectricityProviderModal && (
        <ElectricityProvider
          navigateBack={() => setShowElectricityProviderModal(false)}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          searchQuery={searchQuery}
          filteredData={filteredData}
          handleSearch={handleSearch}
          handleSelectProvider={handleSelectProvider}
          setSelectedProvider={setSelectedProvider}
        />
      )}
    </SafeAreaView>
  );
}

export default Electricity;
