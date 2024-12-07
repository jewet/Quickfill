import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import accessoriesStyles from '../../accessoriesStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../utils/status-bar-styles/status-bar-styles';
import Header from '../../../../../../components/Accessories/Header';
import {items_data} from '../../../../../../utils/sample-data/accessories';
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import cartStyles from './cartStyles';
import MinusIcon from '../../../../../../assets/images/accessories/minus.svg';
import AddIcon from '../../../../../../assets/images/accessories/add.svg';
import itemsStyles from '../items/itemsStyles';
import homeStyles from '../../../home/home-styles';
import Button from '../../../../../../components/Button/Button';

type Props = StackScreenProps<RootStackParamList, 'cart'>;

function Cart({navigation}: Props) {
  const [itemCount, setItemCount] = useState<number>(1);
  const [itemCounts, setItemCounts] = useState<number[]>(
    items_data.slice(0, 4).map(() => 1),
  );

  const increaseCount = (index: number) => {
    setItemCounts(prevCounts =>
      prevCounts.map((count, i) => (i === index ? count + 1 : count)),
    );
  };

  const decreaseCount = (index: number) => {
    setItemCounts(prevCounts =>
      prevCounts.map((count, i) =>
        i === index && count > 1 ? count - 1 : count,
      ),
    );
  };
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
          {items_data.slice(0, 4).map((data, index) => (
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
              ₦{Intl.NumberFormat().format(18000)}
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
              ₦{Intl.NumberFormat().format(1500)}
            </Text>
          </View>
          <View
            style={[
              orderDetailsStyles.flexContainer,
              {justifyContent: 'space-between', width: '100%', marginTop: 5},
            ]}>
            <Text style={homeStyles.details}>Total amount due</Text>
            <Text style={homeStyles.details}>
              ₦{Intl.NumberFormat().format(Number(19500))}
            </Text>
          </View>
          <Button text="Complete order" action={() => console.log('pressed')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cart;
