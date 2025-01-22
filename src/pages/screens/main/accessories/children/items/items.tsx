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
import accessoriesStyles from '../../accessoriesStyles';
import homeStyles from '../../../home/home-styles';
import DropDown from '../../../../../../assets/images/home/dropdown.svg';
import CloseIcon from '../../../../../../assets/images/gas/close-icon.svg';
import Header from '../../../../../../components/Accessories/Header';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import {
  addToCartImageMap,
  items_data,
  itemsImageMap,
  ItemsProps,
} from '../../../../../../utils/sample-data/accessories';
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import itemsStyles from './itemsStyles';
import SearchIcon from '../../../../../../assets/images/accessories/Search Buttton.svg';
import Search from '../../../../../../assets/images/accessories/tabler_search.svg';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../utils/redux/store/store';
import electricityProviderStyles from '../../../home/children/electricity/children/electricity-provider/electricityProviderStyles';
import {
  filterItemData,
  setOpenSearch,
  setSearchQuery,
  setSelectedFilter,
} from '../../../../../../utils/redux/slice/accessories';
import {primaryColor} from '../../../../onboarding/splash/splashstyles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'items-page'>;

function Items({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  // Function to handle navigation to item details page with specific item data
  const handleNavigation = (itemDetails: ItemsProps) => {
    navigation.navigate('item-details', {itemDetails: itemDetails});
  };
  const dispatch = useDispatch();
  const {openSearch, searchQuery, filteredItemData, selectedFilter} =
    useSelector((state: RootState) => state.accessories);

  // Function to filter accessories
  const handleSearch = (text: string) => {
    dispatch(setSearchQuery(text));
    dispatch(filterItemData(text));
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
        title="Items"
        isFavourite={null}
        setIsFavourite={() => () => console.log('pressed')}
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
          paddingTop: 20,
        }}>
        {/* Delivery location details */}
        <View style={[homeStyles.detailsContent, {paddingHorizontal: 16}]}>
          <View style={{width: '90%'}}>
            <Text style={homeStyles.title}>Deliver ASAP to</Text>
            <Text style={[homeStyles.details]}>
              8-26 Ango Abdullahi St, Gwarinpa, 900108...
            </Text>
          </View>
          <TouchableOpacity>
            <DropDown width={60} height={55} fill="none" />
          </TouchableOpacity>
        </View>
        {openSearch ? (
          <View style={{width: '100%', paddingHorizontal: 16}}>
            <View
              style={[
                electricityProviderStyles.electricityTop,
                {width: '100%', marginTop: 10},
              ]}>
              <Search width={24} height={24} fill="none" />
              <TextInput
                placeholder="Start typing to filter..."
                placeholderTextColor="#999999"
                returnKeyType="done"
                value={searchQuery}
                onChangeText={handleSearch}
                style={electricityProviderStyles.searchInput}
              />
              <TouchableOpacity
                onPress={() => {
                  dispatch(setOpenSearch(false));
                  dispatch(setSearchQuery(''));
                  dispatch(filterItemData(''));
                }}>
                <CloseIcon width={14} height={14} fill="none" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={itemsStyles.topScrollView}>
            <View style={itemsStyles.topScrollViewCont}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(setOpenSearch(true));
                  dispatch(setSelectedFilter(''));
                  dispatch(setSearchQuery(''));
                  dispatch(filterItemData(''));
                }}>
                <SearchIcon width={48} height={48} fill="none" />
              </TouchableOpacity>
              <View style={itemsStyles.topScrollViewCont}>
                {['All-purpose burner', 'Burner', 'Dual-Ring Burner'].map(
                  filter => (
                    <TouchableOpacity
                      key={filter}
                      style={[
                        itemsStyles.searchOption,
                        selectedFilter === filter && {
                          backgroundColor: primaryColor,
                        },
                      ]}
                      onPress={() => {
                        dispatch(setSelectedFilter(filter));
                        dispatch(filterItemData(filter));
                      }}>
                      <Text
                        style={[
                          itemsStyles.searchText,
                          selectedFilter === filter && {color: 'white'},
                        ]}>
                        {filter}
                      </Text>
                    </TouchableOpacity>
                  ),
                )}
              </View>
            </View>
          </ScrollView>
        )}
        {/* Vertical scroll for displaying items */}
        {filteredItemData.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={[accessoriesStyles.scrollview]}>
            {filteredItemData.map((data, index) => {
              const ImgComponent = itemsImageMap[data.img];
              const CartImgComponent = addToCartImageMap[data.addToCart];
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    orderDetailsStyles.flexContainer,
                    itemsStyles.itemsCont,
                  ]}
                  onPress={() => handleNavigation(data)}>
                  <View
                    style={[
                      orderDetailsStyles.flexContainer,
                      {width: '50%', alignItems: 'flex-start'},
                    ]}>
                    <TouchableOpacity onPress={() => handleNavigation(data)}>
                      {ImgComponent && (
                        <ImgComponent width={101} height={103} fill="none" />
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: '100%',
                      }}
                      onPress={() => handleNavigation(data)}>
                      <TouchableOpacity onPress={() => handleNavigation(data)}>
                        <Text style={itemsStyles.titleText}>
                          {data.item.name}
                        </Text>
                        <Text style={itemsStyles.specText}>
                          {data.item.spec.length > 43
                            ? `${data.item.spec.substring(0, 43)}...`
                            : data.item.spec}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleNavigation(data)}>
                        <Text style={itemsStyles.priceText}>
                          ₦{Intl.NumberFormat().format(data.item.price)}
                        </Text>
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    {CartImgComponent && (
                      <CartImgComponent width={48} height={48} fill="none" />
                    )}
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : (
          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              color: '#999',
              marginBottom: 50,
            }}>
            No result found
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Items;
