import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import homeStyles from './home-styles';
import DropDown from '../../../../assets/images/home/dropdown.svg';
import Eyes from '../../../../assets/images/home/tabler_eye-closed.svg';
import Plus from '../../../../assets/images/home/tabler_plus.svg';
import Bookmark from '../../../../assets/images/home/bookmark.svg';
import ArrowRight from '../../../../assets/images/home/yellow-right-arrow.svg';
import {
  quick_action_data,
  vendors_data,
} from '../../../../utils/sample-data/home';
import {order_data} from '../../../../utils/sample-data/orders';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../utils/nav-routes/types';

type Props = StackScreenProps<RootStackParamList, 'home'>;

function Home({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };

  const [showBalance, setShowBalance] = useState<boolean>(true);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return '#2BBD6F';
      case 'cancelled':
        return '#DC5513';
      default:
        return '#5E5E5E';
    }
  };
  const getNavRoute = (actionText: string) => {
    const normalizedText = actionText.replace('\n', ' ').toLowerCase();
    switch (normalizedText) {
      case 'cooking gas':
        return 'gas';
      case 'petroleum':
        return 'gas';
      case 'diesel':
        return 'gas';
      case 'electricity':
        return 'electricity';
      default:
        return 'home';
    }
  };
  

  return (
    <SafeAreaView style={homeStyles.homeContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={homeStyles.scrollview}>
        <View style={homeStyles.homeTop}>
          <View style={homeStyles.detailsContent}>
            <View style={{width: '90%'}}>
              <Text style={homeStyles.title}>Deliver ASAP to</Text>
              <Text style={homeStyles.details}>
                8-26 Ango Abdullahi St, Gwarinpa, 900108...
              </Text>
            </View>
            <TouchableOpacity>
              <DropDown width={60} height={55} fill="none" />
            </TouchableOpacity>
          </View>
          <Text style={[homeStyles.details, {fontSize: 24, paddingTop: 10}]}>
            Samuel Minister
          </Text>
          <View style={homeStyles.balanceContent}>
            <View>
              <Text style={homeStyles.title}>Quikrefil wallet balance</Text>
              <Text
                style={[
                  homeStyles.details,
                  {fontSize: 24, paddingTop: 10, fontWeight: 700},
                ]}>
                {showBalance ? '₦96,484.09' : '******'}
              </Text>
            </View>
            <TouchableOpacity
              style={{marginTop: 15}}
              onPress={() => setShowBalance(!showBalance)}>
              <Eyes width={50} height={35} fill="none" />
            </TouchableOpacity>
          </View>
          <View style={[homeStyles.detailsContent, {width: '90%'}]}>
            <View style={{width: '85%'}}>
              <Text style={homeStyles.details}>10</Text>
              <Text style={homeStyles.title}>Number of orders</Text>
            </View>
            <TouchableOpacity
              style={homeStyles.plusWrapper}>
              <Plus width={35} height={35} fill="none" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={homeStyles.mainContent}>
          <View style={homeStyles.quickActionCont}>
            <Text style={homeStyles.quickActionText}>Quick actions</Text>
            <View style={homeStyles.actionContainer}>
              {quick_action_data.map((data, index) => (
                <TouchableOpacity key={index} style={homeStyles.actionContent} 
                onPress={() => {
                  const route = getNavRoute(data.title);
                  navigation.navigate(route);  
                }}>
                  <data.Img width={50} height={50} fill="none" />
                  <Text style={homeStyles.actionText}>{data.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            <View style={homeStyles.recentOrdersTop}>
              <Text style={[homeStyles.quickActionText, {marginTop: 0}]}>
                Recent orders
              </Text>
              <TouchableOpacity>
                <Text style={homeStyles.viewText}>View all</Text>
              </TouchableOpacity>
            </View>
            <View>
              {order_data.slice(0, 2).map((data, index) => (
                <View key={index} style={homeStyles.orderContainer}>
                  <View style={homeStyles.orderContent}>
                    <Text style={homeStyles.idText}>{data.id}</Text>
                    <Text style={homeStyles.idText}>
                      Status:{' '}
                      <Text style={{color: getStatusColor(data.status)}}>
                        {data.status}
                      </Text>
                    </Text>
                  </View>
                  <View style={homeStyles.orderContent}>
                    <View style={{display: 'flex', gap: 5}}>
                      {data.order_type.map((type: string, idx: number) => (
                        <Text key={idx} style={homeStyles.orderType}>
                          {type}
                        </Text>
                      ))}
                    </View>
                    <Text style={homeStyles.orderAmt}>
                      ₦{Intl.NumberFormat().format(data.amount)}
                    </Text>
                  </View>
                  <View style={homeStyles.orderContent}>
                    <Text style={homeStyles.idText}>
                      {data.date} • {data.time}
                    </Text>
                    <TouchableOpacity style={homeStyles.orderDetails}>
                      <Text>Order details</Text>
                      <ArrowRight width={15} height={15} fill="none" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={homeStyles.quickActionCont}>
          <Text style={homeStyles.quickActionText}>Top vendors</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 20}}>
            {vendors_data.map((data, index) => (
              <View key={index} style={homeStyles.vendorContent}>
                <data.img width={80} height={80} fill="none" />
                <View style={homeStyles.bookmarkWrapper}>
                  <Bookmark width={26} height={26} fill="none" />
                  <Text style={[homeStyles.details, {marginTop: -23}]}>
                    {index + 1}
                  </Text>
                </View>
                <Text style={homeStyles.vendorName}>{data.name}</Text>
                <Text style={homeStyles.noOfOrders}>
                  Orders: {data.no_of_orders}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
