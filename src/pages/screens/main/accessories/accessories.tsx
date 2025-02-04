import React from 'react';
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
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../utils/nav-routes/types';
import homeStyles from '../home/home-styles';
import accessoriesStyles from './accessoriesStyles';
import Header from '../../../../components/Accessories/Header';
import DropDown from '../../../../assets/images/home/dropdown.svg';
import electricityProviderStyles from '../home/children/electricity/children/electricity-provider/electricityProviderStyles';
import SearchIcon from '../../../../assets/images/accessories/tabler_search.svg';
import {imageMap} from '../../../../utils/sample-data/accessories';
import ArrowRight from '../../../../assets/images/accessories/tabler_chevron-right.svg';
import orderDetailsStyles from '../orders/children/order-details/orderDetailsStyles';
import AddressModal from '../../../../components/AddressModal/AddressModal';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../utils/redux/store/store';
import {
  filterAccessoriesData,
  setIsfavourite,
  setSearchQuery,
  setShowModal,
} from '../../../../utils/redux/slice/accessories';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'accessories'>;

function Accessories({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };

  const dispatch = useDispatch();
  const {showModal, searchQuery, filteredData, isFavourite} = useSelector(
    (state: RootState) => state.accessories,
  );

  // Function to filter accessories
  const handleSearch = (text: string) => {
    dispatch(setSearchQuery(text));
    dispatch(filterAccessoriesData(text));
  };

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* Header component */}
      <Header
        goBackAction={() => navigation.goBack()}
        title="Categories"
        isFavourite={isFavourite}
        setIsFavourite={() => dispatch(setIsfavourite(!isFavourite))}
        directory=""
        cartNav={() => navigation.navigate('cart')}
      />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          gap: 20,
          backgroundColor: '#F6F6F6',
          paddingHorizontal: 16,
          paddingTop: 20,
        }}>
        {/* Delivery location details */}
        <View style={homeStyles.detailsContent}>
          <View style={{width: '90%'}}>
            <Text style={homeStyles.title}>Deliver ASAP to</Text>
            <Text style={[homeStyles.details]}>
              8-26 Ango Abdullahi St, Gwarinpa, 900108...
            </Text>
          </View>
          <TouchableOpacity onPress={() => dispatch(setShowModal(true))}>
            <DropDown width={60} height={55} fill="none" />
          </TouchableOpacity>
        </View>
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
        {/* Scrollable list of accessories */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={accessoriesStyles.scrollview}>
          {filteredData.length > 0 ? (
            <>
              <Text style={accessoriesStyles.accessoriesText}>Accessories</Text>
              <Text
                style={[homeStyles.details, {fontWeight: 500, fontSize: 14}]}>
                Find all you need to get your kitchen going
              </Text>
              <View style={accessoriesStyles.accessoriesItemsWrapper}>
                {filteredData.map((data, index) => {
                  const ImgComponent = imageMap[data.img];
                  return (
                    <TouchableOpacity
                      key={index}
                      style={[
                        orderDetailsStyles.flexContainer,
                        accessoriesStyles.accessoriesItems,
                      ]}
                      onPress={() => navigation.navigate('items-page')}>
                      <View
                        style={[
                          orderDetailsStyles.flexContainer,
                          {width: 'auto'},
                        ]}>
                        {ImgComponent && (
                          <ImgComponent width={56} height={56} fill="none" />
                        )}
                        <View>
                          <Text style={accessoriesStyles.topText}>
                            {data.item.title}
                          </Text>
                          <Text style={accessoriesStyles.bottomText}>
                            {data.item.number}
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('items-page')}>
                        <ArrowRight width={24} height={24} fill="none" />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </>
          ) : (
            <Text style={{textAlign: 'center', marginTop: 20, color: '#999'}}>
              No result found
            </Text>
          )}
        </ScrollView>
      </View>
      {/* Address modal */}
      {showModal && (
        <AddressModal
          action={() => dispatch(setShowModal(false))}
          navigateTo={() => {
            dispatch(setShowModal(false));
            navigation.goBack();
          }}
          navigateToAddress={() => navigation.navigate('change-address')}
        />
      )}
    </SafeAreaView>
  );
}

export default Accessories;
