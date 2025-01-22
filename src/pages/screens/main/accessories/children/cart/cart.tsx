import React, {useMemo, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import accessoriesStyles from '../../accessoriesStyles';
import Header from '../../../../../../components/Accessories/Header';
import {cart_data} from '../../../../../../utils/sample-data/accessories';
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import cartStyles from './cartStyles';
import MinusIcon from '../../../../../../assets/images/accessories/minus.svg';
import AddIcon from '../../../../../../assets/images/accessories/add.svg';
import itemsStyles from '../items/itemsStyles';
import homeStyles from '../../../home/home-styles';
import Button from '../../../../../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../utils/redux/store/store';
import {setItemCounts} from '../../../../../../utils/redux/slice/accessories';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'cart'>;

function Cart({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const dispatch = useDispatch();
  const {itemCounts} = useSelector((state: RootState) => state.accessories);

  // Increase the item count for a specific item in the cart
  const increaseCount = (index: number) => {
    dispatch(
      setItemCounts(
        itemCounts.map((count, i) => (i === index ? count + 1 : count)),
      ),
    );
  };

  // Decrease the item count for a specific item in the cart, ensuring it doesn't go below 1
  const decreaseCount = (index: number) => {
    dispatch(
      setItemCounts(
        itemCounts.map((count, i) =>
          i === index && count > 1 ? count - 1 : count,
        ),
      ),
    );
  };

  // Function to calculate total price dynamically
  const subtotal = useMemo(() => {
    return cart_data.reduce((total, item, index) => {
      return total + item.item.price * itemCounts[index];
    }, 0);
  }, [itemCounts]);

  const vat = subtotal * 0.05; // Assuming VAT is 5%
  const totalAmount = subtotal + vat;

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        title="Checkout"
        isFavourite={null}
        setIsFavourite={() => () => console.log('pressed')}
        directory="checkout"
        cartNav={() => navigation.navigate('cart')}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={cartStyles.scrollview}>
        <View>
          {cart_data.map((data, index) => (
            <View
              key={index}
              style={[
                orderDetailsStyles.flexContainer,
                {
                  justifyContent: 'space-between',
                  borderBottomWidth: 0.5,
                  borderColor: '#A8A8A3',
                  paddingVertical: 10,
                },
              ]}>
              <View style={[orderDetailsStyles.flexContainer, {width: '50%'}]}>
                <data.img width={56} height={56} fill="none" />
                <Text style={[itemsStyles.titleText, {fontSize: 14}]}>
                  {data.item.name}
                </Text>
              </View>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <TouchableOpacity onPress={() => decreaseCount(index)}>
                  <MinusIcon width={21} height={21} fill="none" />
                </TouchableOpacity>
                <Text>{itemCounts[index]}</Text>
                <TouchableOpacity onPress={() => increaseCount(index)}>
                  <AddIcon width={21} height={21} fill="none" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View style={cartStyles.checkoutWrapper}>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {justifyContent: 'space-between', width: '100%'},
            ]}>
            <Text
              style={[
                homeStyles.title,
                {color: '#8E8E93', fontSize: 14, fontWeight: 600},
              ]}>
              Subtotal
            </Text>
            <Text
              style={[
                homeStyles.title,
                {color: '#8E8E93', fontSize: 14, fontWeight: 600},
              ]}>
              ₦{Intl.NumberFormat().format(subtotal)}
            </Text>
          </View>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {justifyContent: 'space-between', width: '100%'},
            ]}>
            <Text
              style={[
                homeStyles.title,
                {color: '#8E8E93', fontSize: 14, fontWeight: 600},
              ]}>
              Vat %
            </Text>
            <Text
              style={[
                homeStyles.title,
                {color: '#8E8E93', fontSize: 14, fontWeight: 600},
              ]}>
              ₦{Intl.NumberFormat().format(vat)}
            </Text>
          </View>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {justifyContent: 'space-between', width: '100%', marginTop: 5},
            ]}>
            <Text style={homeStyles.details}>Total amount due</Text>
            <Text style={homeStyles.details}>
              ₦{Intl.NumberFormat().format(Number(totalAmount))}
            </Text>
          </View>
          {/* Complete order button */}
          <Button
            text="Complete order"
            action={() =>
              navigation.navigate('checkout', {itemCounts, totalAmount})
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cart;
