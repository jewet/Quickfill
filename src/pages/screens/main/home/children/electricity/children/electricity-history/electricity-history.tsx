import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../utils/status-bar-styles/status-bar-styles';
import electricityStyles from '../../electrictyStyles';
import Header from '../../../../../../../../components/Electricity/Header/Header';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import SearchIcon from '../../../../../../../../assets/images/accessories/tabler_search.svg';
import electricityProviderStyles from '../electricity-provider/electricityProviderStyles';
import electricityHistoryStyles from './electricityHistoryStyles';
import {width} from '../../../diesel/dieselStyles';
import {
  filterElectricityHistoryData,
  setSearchQuery,
} from '../../../../../../../../utils/redux/slice/electricity';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../../utils/redux/store/store';

// Type definition for navigation props
type Props = StackScreenProps<RootStackParamList, 'electricity-history'>;

function ElectricityHistory({navigation}: Props) {
  const route =
    useRoute<RouteProp<RootStackParamList, 'electricity-history'>>();
  const dispatch = useDispatch();

  const {searchQuery, filteredElectricityHistoryData} = useSelector(
    (state: RootState) => state.electricity,
  );

  // Function to filter electricity transactions
  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
    dispatch(filterElectricityHistoryData(query));
  };

  const extractLastWord = (address: string): string => {
    const words = address.trim().split(' ');
    return words[words.length - 1];
  };

  return (
    <SafeAreaView style={[electricityStyles.electricityContainer]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        handleGoBack={() => navigation.popTo('electricity')}
        title="All electricity transactions"
        historyIconColor="yellow"
        historyNav={() => navigation.navigate('electricity-history')}
      />
      <View style={{width: '100%', paddingHorizontal: 16}}>
        {/* Search input for filtering accessories */}
        <View
          style={[
            electricityProviderStyles.electricityTop,
            {width: '100%', marginTop: 10},
          ]}>
          <SearchIcon width={24} height={24} fill="none" />
          <TextInput
            placeholder="Start typing to filter..."
            placeholderTextColor="#999999"
            returnKeyType="done"
            value={searchQuery}
            onChangeText={handleSearch}
            style={electricityProviderStyles.searchInput}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[electricityStyles.scrollview, {paddingHorizontal: 0}]}>
        <View style={electricityHistoryStyles.historyWrapper}>
          {filteredElectricityHistoryData.length > 0 ? (
            <>
              {filteredElectricityHistoryData.map((data, index) => (
                <TouchableOpacity
                  key={index}
                  style={electricityHistoryStyles.historyCont}
                  onPress={() =>
                    navigation.navigate('electricity-history-details', {
                      historyDetails: filteredElectricityHistoryData[index],
                    })
                  }>
                  <Text style={electricityHistoryStyles.status}>
                    Status:{' '}
                    <Text style={electricityHistoryStyles.completed}>
                      {data.status}
                    </Text>
                  </Text>
                  <View>
                    <View style={electricityHistoryStyles.addressWrapper}>
                      <Text style={electricityHistoryStyles.address}>
                        {extractLastWord(data.address)} • ₦
                        {Intl.NumberFormat().format(Number(data.utility_cost))}
                      </Text>
                      <Text style={electricityHistoryStyles.address}>
                        {data.meter_no}
                      </Text>
                    </View>
                    <Text style={electricityHistoryStyles.name}>
                      {data.customer_name}
                    </Text>
                  </View>
                  <Text style={electricityHistoryStyles.date}>
                    Date:{data.date} • {data.time}
                  </Text>
                </TouchableOpacity>
              ))}
            </>
          ) : (
            <View style={{width: width, alignItems: 'center'}}>
              <Text style={electricityHistoryStyles.notFound}>
                Search not found
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ElectricityHistory;
