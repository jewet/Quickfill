import React from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import {
  setAmount,
  setMeterNumber,
  setMeterName,
  setSearchQuery,
  setSelectedProvider,
  setIsSelected,
  toggleElectricityProviderModal,
  filterElectricityData,
  setLastUsedProvider,
  setShowAlert,
  setLastUsedAddress,
} from '../../../../../../utils/redux/slice/electricity';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import electricityStyles from './electrictyStyles';
import Input from '../../../../../../components/Input/AuthInput';
import Button from '../../../../../../components/Button/Button';
import Dropdown from '../../../../../../assets/images/electricity/dropdown.svg';
import inputStyles from '../../../../../../components/Input/InputStyles';
import {RouteProp, useRoute} from '@react-navigation/native';
import ElectricityProvider from './children/electricity-provider/electricity-providers';
import Header from '../../../../../../components/Electricity/Header/Header';
import {RootState} from '../../../../../../utils/redux/store/store';
import {
  electricity_transaction_history,
  meter_data,
} from '../../../../../../utils/sample-data/electricity';
import AlertModal from '../../../../../../components/Alert/Alert';
import Toast from 'react-native-toast-message';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for navigation props
type Props = StackScreenProps<RootStackParamList, 'electricity'>;

function Electricity({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route = useRoute<RouteProp<RootStackParamList, 'electricity'>>();
  const dispatch = useDispatch();

  const {
    showElectricityProviderModal,
    amount,
    meterNumber,
    meterName,
    searchQuery,
    filteredData,
    selectedProvider,
    isSelected,
    lastUsedProvider,
    showAlert,
    lastUsedAddress,
  } = useSelector((state: RootState) => state.electricity);

  const isFormValid =
    selectedProvider ||
    (lastUsedProvider.trim() !== '' &&
      amount.trim() !== '' &&
      meterNumber.trim() !== '' &&
      meterNumber.length === 10);

  const handleBack = () => navigation.goBack();

  const handleAmountChange = (value: string) => {
    dispatch(setAmount(value.replace(/[^0-9]/g, '')));
  };

  const handleMeterNumberChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 10);
    dispatch(setMeterNumber(numericValue));
    const randomIndex = Math.floor(Math.random() * meter_data.length);

    if (numericValue.length === 10) {
      dispatch(setMeterName(meter_data[randomIndex].name));
    } else {
      dispatch(setMeterName(''));
    }
  };
  // const handleMeterNumberChange = (value: string) => {
  //   const numericValue = value.replace(/[^0-9]/g, '').slice(0, 10);
  //   dispatch(setMeterNumber(numericValue));

  //   if (numericValue.length === 10) {
  //     const randomIndex = Math.floor(Math.random() * meter_data.length);
  //     dispatch(setMeterName(meter_data[randomIndex].name));
  //     setLastUsedMeterNumber(numericValue); // Store the last used meter number
  //   } else {
  //     dispatch(setMeterName(''));
  //   }
  // };

  // const handleMeterNumberFocus = () => {
  //   if (lastUsedMeterNumber) {
  //     dispatch(setMeterNumber(lastUsedMeterNumber)); // Set the last used meter number when focused
  //   }
  // };

  const handleSearch = (text: string) => {
    dispatch(setSearchQuery(text));
    dispatch(filterElectricityData(text));
  };

  const handleSelectProvider = (index: number) => {
    dispatch(setIsSelected(index));
    dispatch(setSearchQuery(filteredData[index].electricity));
  };

  const handleContinue = () => {
    // const address = selectedProvider?.electricity || '';
    const meterRegex = /^[0-9]{1,10}$/;
    if (!selectedProvider && lastUsedProvider.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Select electricity provider',
      });
      return;
    }
    if (amount.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter amount',
      });
      return;
    }
    if (meterNumber.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter meter number',
      });
      return;
    }
    if (meterNumber.length !== 10) {
      Toast.show({
        type: 'error',
        text1: 'Check meter number',
        text2: 'Meter number must be exactly 10 digits',
      });
      return;
    }
    if (!isFormValid) {
      // dispatch(setShowAlert(true));
      Toast.show({
        type: 'error',
        text1: 'Form incomplete',
        text2: 'Please fill all entries',
      });
    } else {
      navigation.navigate('electricity-purchase-summary', {
        selectedProvider: 'AEDC',
        amount: '5000',
        meterNumber: '2984756728',
        meterName: 'Gabriel Ojo',
        address: lastUsedAddress || 'address',
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
        <View style={inputStyles.inputContainer}>
          <Text style={inputStyles.label}>Electricity provider</Text>
          <View style={inputStyles.securedInputWrapper}>
            <TouchableOpacity
              style={inputStyles.passwordInput}
              onPress={() => dispatch(toggleElectricityProviderModal(true))}>
              <Text style={inputStyles.securedInput}>
                {lastUsedProvider
                  ? lastUsedProvider
                  : selectedProvider
                  ? selectedProvider.electricity
                  : 'Select service provider'}
              </Text>
              <Dropdown width={20} height={20} fill="none" />
            </TouchableOpacity>
          </View>
        </View>

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

        <Input
          label="Meter number"
          placeholder="e.g 11223344556"
          value={meterNumber}
          secured={false}
          directory={null}
          keyboardType="numeric"
          action={null}
          validate="meter-number"
          onChange={handleMeterNumberChange}
          // onFocus={handleMeterNumberFocus}
        />

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

        <View style={{width: '100%', marginTop: 20}}>
          <Button text="Continue" action={handleContinue} />
        </View>
        <View
          style={{
            width: '100%',
            marginTop: '10%',
            display: 'flex',
            gap: 10,
            marginBottom: 200,
          }}>
          <Text style={electricityStyles.savedText}>
            {' '}
            Saved meters number(s)
          </Text>
          {electricity_transaction_history.slice(0, 3).map((data, index) => (
            <TouchableOpacity
              key={index}
              style={electricityStyles.previousWrapper}
              onPress={() => {
                dispatch(setLastUsedProvider(data.provider));
                dispatch(setMeterNumber(data.meter_no));
                dispatch(setMeterName(data.customer_name));
                dispatch(setLastUsedAddress(data.address));
              }}>
              <View style={electricityStyles.grayBox}></View>
              <View>
                <Text style={electricityStyles.meterNo}>{data.meter_no}</Text>
                <Text style={electricityStyles.address}>{data.address}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Toast />
      {showElectricityProviderModal && (
        <ElectricityProvider
          navigateBack={() => dispatch(toggleElectricityProviderModal(false))}
          isSelected={isSelected}
          setIsSelected={index => dispatch(setIsSelected(index))}
          searchQuery={searchQuery}
          filteredData={filteredData}
          handleSearch={handleSearch}
          handleSelectProvider={handleSelectProvider}
          setSelectedProvider={provider =>
            dispatch(setSelectedProvider(provider))
          }
        />
      )}
      {showAlert && (
        <AlertModal
          topText="Notice"
          bottomText="Please ensure all entries are filled"
          closeModal={() => dispatch(setShowAlert(false))}
        />
      )}
    </SafeAreaView>
  );
}

export default Electricity;
