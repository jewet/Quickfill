import React, {useEffect, useState} from 'react';
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
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import electricityStyles from '../../electrictyStyles';
import BackArrow from '../../../../../../../../assets/images/auth/tabler_arrow-right.svg';
import Button from '../../../../../../../../components/Button/Button';
import SearchIcon from '../../../../../../../../assets/images/electricity/search-icn.svg';
import ElectricIcon from '../../../../../../../../assets/images/electricity/mtn-icon.svg';
import SelectedIcon from '../../../../../../../../assets/images/electricity/selected-bill.svg';
import UnSelectedIcon from '../../../../../../../../assets/images/electricity/unselected-bill.svg';
import electricityProviderStyles from './electricityProviderStyles';
import {electricity_data, ElectricityProps} from '../../../../../../../../utils/sample-data/electricity';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'electricity-provider'>;

function ElectricityProvider({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';

  const [isSelected, setIsSelected] = useState<number | null>();
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [filteredData, setFilteredData] = useState(electricity_data); 

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = electricity_data.filter((item) =>
      item.electricity.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSelectProvider = (index: number) => {
    setIsSelected(index); 
    setSearchQuery(electricity_data[index].electricity); 
  };
  useEffect(() => {
    if (searchQuery.length === 0) {
      setIsSelected(null); 
    }
  }, [searchQuery]);

  const navigateToElectricityPage = async (electricityProvider: ElectricityProps) => {
    navigation.navigate('electricity', { electricityProvider: electricityProvider });    
  };
  return (
    <SafeAreaView style={electricityStyles.electricityContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#FAFAFA'}
      />
      <View style={{width: '100%', display: 'flex'}}>
        <View style={[electricityStyles.electricityTop, {width: '75%'}]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow width={26} height={26} fill="none" />
          </TouchableOpacity>
          <Text style={electricityStyles.topText}>Choose an option below</Text>
        </View>
      </View>
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
            filteredData.map((data, index) => (
              <TouchableOpacity
                key={index}
                style={electricityProviderStyles.electricityData}
                onPress={()=>handleSelectProvider(index)}>
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
        {isSelected !== null && (
          <Button
            text="Continue"
            action={() => {
              if (isSelected !== null) {
                navigateToElectricityPage(electricity_data[isSelected]);
              }
            }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ElectricityProvider;
