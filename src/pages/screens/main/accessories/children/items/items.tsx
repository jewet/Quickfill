import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import accessoriesStyles from '../../accessoriesStyles';
import homeStyles from '../../../home/home-styles';
import DropDown from '../../../../../../assets/images/home/dropdown.svg';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../utils/status-bar-styles/status-bar-styles';
import Header from '../../../../../../components/Accessories/Header';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import {
  items_data,
  ItemsProps,
} from '../../../../../../utils/sample-data/accessories';
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import itemsStyles from './itemsStyles';
import SearchIcon from '../../../../../../assets/images/accessories/Search Buttton.svg';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'items-page'>;

function Items({navigation}: Props) {
  // Function to handle navigation to item details page with specific item data
  const handleNavigation = (itemDetails: ItemsProps) => {
    navigation.navigate('item-details', {itemDetails: itemDetails});
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
        {/* Horizontal scroll for search options */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={itemsStyles.topScrollView}>
          <View style={itemsStyles.topScrollViewCont}>
            <TouchableOpacity>
              <SearchIcon width={48} height={48} fill="none" />
            </TouchableOpacity>
            <TouchableOpacity style={itemsStyles.searchOption}>
              <Text style={itemsStyles.searchText}>All-purpose burner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={itemsStyles.searchOption}>
              <Text style={itemsStyles.searchText}>Burner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={itemsStyles.searchOption}>
              <Text style={itemsStyles.searchText}>Dual-Ring Burner</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* Vertical scroll for displaying items */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[accessoriesStyles.scrollview]}>
          {items_data.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={[orderDetailsStyles.flexContainer, itemsStyles.itemsCont]}
              onPress={() => handleNavigation(data)}>
              <View
                style={[
                  orderDetailsStyles.flexContainer,
                  {width: '50%', alignItems: 'flex-start'},
                ]}>
                <TouchableOpacity onPress={() => handleNavigation(data)}>
                  <data.img width={101} height={103} fill="none" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                  onPress={() => handleNavigation(data)}>
                  <TouchableOpacity onPress={() => handleNavigation(data)}>
                    <Text style={itemsStyles.titleText}>{data.item.name}</Text>
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
                <data.addToCart width={48} height={48} fill="none" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Items;
