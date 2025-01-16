import React, {useState} from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import accessoriesStyles from '../../../accessoriesStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../utils/status-bar-styles/status-bar-styles';
import Header from '../../../../../../../components/Accessories/Header';
import {RootStackParamList} from '../../../../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  items_data,
  itemsImageMap,
  ItemsProps,
} from '../../../../../../../utils/sample-data/accessories';
import itemDetailsStyles from './itemDetailsStyles';
import itemsStyles from '../itemsStyles';
import GroupedStars from '../../../../../../../assets/images/accessories/grouped_stars.svg';
import OrderIcon from '../../../../../../../assets/images/accessories/icon-park-outline_fire.svg';
import orderDetailsStyles from '../../../../orders/children/order-details/orderDetailsStyles';
import primaryBtnStyles from '../../../../../../../components/Button/ButtonStyles';
import LinearGradient from 'react-native-linear-gradient';
import AddToCart from '../../../../../../../assets/images/accessories/tabler_shopping-cart-plus.svg';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'item-details'>;

function ItemsDetails({navigation}: Props) {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const route = useRoute<RouteProp<RootStackParamList, 'item-details'>>();
  const {itemDetails}: {itemDetails?: ItemsProps} = route.params || {};

  const DisplayImg = itemDetails?.img
  ? itemsImageMap[itemDetails.img] // Map to the correct image component
  : null;

  const btnMarginTop = Platform.OS === 'ios' ? -30 : 0;

  // Function to get a random subset of items from the items_data array
  const getRandomItems = (data: typeof items_data, count: number) => {
    const shuffledItems = [...data].sort(() => Math.random() - 0.5); // Copy before sorting
    return shuffledItems.slice(0, count);
  };
  const ImgComponent = itemDetails?.img ? itemsImageMap[itemDetails.img] : null;
  

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* Header component */}
      <Header
        goBackAction={() => navigation.goBack()}
        title="Item details"
        isFavourite={isFavourite}
        setIsFavourite={() => setIsFavourite(!isFavourite)}
        directory="item-details"
        cartNav={() => console.log('pressed')}
      />
      <View
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          marginTop: 20,
          paddingBottom: 20
        }}>
        {ImgComponent && <ImgComponent width={400} height={291} fill="none" />}
        </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={itemDetailsStyles.scrollview}>
        <View style={{width: '100%', paddingHorizontal: 16}}>
          <Text style={itemDetailsStyles.titleText}>
            {itemDetails?.item?.name}
          </Text>
          <View style={{width: '100%'}}>
          <View style={itemDetailsStyles.priceTextWrapper}>
            <Text style={itemDetailsStyles.priceText}>
              ₦{Intl.NumberFormat().format(itemDetails?.item?.price)}
            </Text>
          </View>
          </View>
          <Text style={itemDetailsStyles.specText}>
            {itemDetails?.item?.spec}
          </Text>
          <View style={[orderDetailsStyles.flexContainer, {marginTop: 20}]}>
            <View style={{width: '50%'}}>
              <Text style={[itemsStyles.specText, {marginBottom: 5}]}>
                Review rating
              </Text>
              <GroupedStars width={102} height={25} fill="none" />
            </View>
            <View style={{width: '50%'}}>
              <Text style={itemsStyles.specText}>Popularity</Text>
              <View
                style={[
                  orderDetailsStyles.flexContainer,
                  {width: 'auto', marginTop: 5},
                ]}>
                <OrderIcon width={24} height={24} fill="none" />
                <Text style={itemDetailsStyles.orderText}>
                  {itemDetails?.no_of_orders} Orders
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={[primaryBtnStyles.btnContainer]}>
            <LinearGradient
              colors={['#FFD366', '#FFB600']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={itemDetailsStyles.gradientContainer}>
              <View
                style={[
                  orderDetailsStyles.flexContainer,
                  {marginTop: btnMarginTop, justifyContent: 'center', gap: 20},
                ]}>
                <AddToCart width={24} height={24} fill="none" />
                <Text style={itemDetailsStyles.btnText}>Add to bag</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={itemDetailsStyles.similarProduct}>Similar products</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingBottom: 50}}>
            {getRandomItems(items_data, 3).map((data, index) => {
              const DataImg = itemsImageMap[data.img]
              return(
                <View key={index} style={itemDetailsStyles.otherIems}>
                {DataImg && <DataImg width={117} height={117} fill="none" />}
                <TouchableOpacity>
                  <Text style={[itemsStyles.titleText, {textAlign: 'center'}]}>
                    {data.item.name.split(' ')[0]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    orderDetailsStyles.flexContainer,
                    itemDetailsStyles.addToCartBtn,
                  ]}>
                  <AddToCart width={24} height={24} fill="none" />
                  <Text style={itemDetailsStyles.btnText}>
                    ₦{Intl.NumberFormat().format(data.item.price)}
                  </Text>
                </TouchableOpacity>
              </View>
              )
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ItemsDetails;
