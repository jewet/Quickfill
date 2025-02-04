import React, {useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import electricityStyles from '../../electrictyStyles';
import Button from '../../../../../../../../components/Button/Button';
import SearchIcon from '../../../../../../../../assets/images/electricity/search-icn.svg';
import ElectricIcon from '../../../../../../../../assets/images/electricity/mtn-icon.svg';
import SelectedIcon from '../../../../../../../../assets/images/electricity/selected-bill.svg';
import UnSelectedIcon from '../../../../../../../../assets/images/electricity/unselected-bill.svg';
import electricityProviderStyles from './electricityProviderStyles';
import {ElectricityProps} from '../../../../../../../../utils/sample-data/electricity';
import {height} from '../../../diesel/dieselStyles';
import Header from '../../../../../../../../components/Electricity/Header/Header';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
interface ElectricityProviderProps {
  navigateBack: () => void;
  isSelected: number | null;
  setIsSelected: (value: number | null) => void;
  searchQuery: string;
  filteredData: any;
  handleSearch: (value: string) => void;
  handleSelectProvider: (value: number) => void;
  setSelectedProvider: (provider: ElectricityProps) => void;
}

function ElectricityProvider({
  navigateBack,
  isSelected,
  setIsSelected,
  searchQuery,
  filteredData,
  handleSearch,
  handleSelectProvider,
  setSelectedProvider,
}: ElectricityProviderProps) {
  const isDarkMode = useColorScheme() === 'dark';
   const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };

  useEffect(() => {
    if (filteredData.length === 0) {
      setIsSelected(null);
    }
  }, [filteredData]);

  return (
    <SafeAreaView
      style={[
        electricityStyles.electricityContainer,
        {position: 'absolute', top: 0, height: height},
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header handleGoBack={navigateBack} title="Choose an option below" />
      <View style={electricityProviderStyles.electricityTop}>
        <SearchIcon width={20} height={20} fill="none" />
        <TextInput
          placeholder="Start typing to filter..."
          placeholderTextColor="#999999"
          returnKeyType="done"
          value={searchQuery}
          onChangeText={handleSearch}
          style={electricityProviderStyles.searchInput}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={electricityStyles.scrollview}>
        <View style={electricityProviderStyles.electricityDataWrapper}>
          {filteredData.length > 0 ? (
            filteredData.map((data: any, index: any) => (
              <TouchableOpacity
                key={index}
                style={electricityProviderStyles.electricityData}
                onPress={() => handleSelectProvider(index)}>
                <ElectricIcon width={47} height={47} fill="none" />
                <View style={electricityProviderStyles.electricityTextWrapper}>
                  <Text style={electricityProviderStyles.electricityText}>
                    {data.electricity}
                  </Text>
                </View>
                {isSelected === index ? (
                  <SelectedIcon width={24} height={24} fill="none" />
                ) : (
                  <UnSelectedIcon width={24} height={24} fill="none" />
                )}
              </TouchableOpacity>
            ))
          ) : (
            <View style={electricityProviderStyles.noResultWrapper}>
              <Text style={electricityProviderStyles.noResultText}>
                Electricity provider not found
              </Text>
            </View>
          )}
        </View>
        <View style={{marginBottom: '20%', marginTop: '5%'}}>
        {isSelected !== null && (
          <Button
            text="Continue"
            action={() => {
              if (isSelected !== null) {
                setSelectedProvider(filteredData[isSelected]);
                navigateBack();
              }
            }}
          />
        )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ElectricityProvider;
