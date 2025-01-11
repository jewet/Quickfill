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
import {meter_data} from '../../../../../../utils/sample-data/electricity';

// Type definition for navigation props
type Props = StackScreenProps<RootStackParamList, 'electricity'>;

function Electricity({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
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
  } = useSelector((state: RootState) => state.electricity);

  const isFormValid =
    selectedProvider &&
    amount.trim() !== '' &&
    meterNumber.trim() !== '' &&
    meterNumber.length === 10;

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

  const handleSearch = (text: string) => {
    dispatch(setSearchQuery(text));
    dispatch(filterElectricityData(text));
  };

  const handleSelectProvider = (index: number) => {
    dispatch(setIsSelected(index));
    dispatch(setSearchQuery(filteredData[index].electricity));
  };

  const handleContinue = () => {
    const address = selectedProvider?.electricity || '';
    if (isFormValid) {
      navigation.navigate('electricity-purchase-summary', {
        selectedProvider,
        amount,
        meterNumber,
        meterName,
        address: address,
      });
    }
  };

  return (
    <SafeAreaView
      style={[electricityStyles.electricityContainer, {position: 'relative'}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
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
                {selectedProvider
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
          onChange={handleMeterNumberChange}
          validate="meter-number"
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
      </ScrollView>

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
    </SafeAreaView>
  );
}

export default Electricity;
