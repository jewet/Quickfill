import React, {useState} from 'react';
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
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import CloseIcon from '../../../../../../assets/images/gas/close-icon.svg';
import Online from '../../../../../../assets/images/gas/online.svg';
import Rating from '../../../../../../assets/images/gas/tabler_star-filled.svg';
import Note from '../../../../../../assets/images/gas/note.svg';
import BigGas from '../../../../../../assets/images/gas/big-gas.svg';
import BiggerGas from '../../../../../../assets/images/gas/bigger-gas.svg';
import BiggestGas from '../../../../../../assets/images/gas/biggest-gas.svg';
import homeStyles from '../../home-styles';
import {gas_data} from '../../../../../../utils/sample-data/gas';
import LinearGradient from 'react-native-linear-gradient';
import primaryBtnStyles from '../../../../../../components/Button/ButtonStyles';
import gasStyles from '../gas/gasStyles';
import Map from '../../../../../../assets/images/diesel/figmap.svg';
import MapPointer from '../../../../../../assets/images/diesel/map-pointer.svg';
import PricePin from '../../../../../../assets/images/diesel/price-pins.svg';
import PopUp from '../../../../../../assets/images/diesel/popup_control.svg';
import dieselStyles, {height, width} from './dieselStyles';
import DropDown from '../../../../../../assets/images/home/dropdown.svg';
import profileStyles from '../../../profile/profileStyles';
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import vendorStyles from '../../../profile/children/favourites/children/vendors/vendorsStyles';
import Offline from '../../../../../../assets/images/profile/offline.svg'
import Star from '../../../../../../assets/images/accessories/tabler_star-filled.svg'
import { quick_action_data } from '../../../../../../utils/sample-data/home';

type Props = StackScreenProps<RootStackParamList, 'diesel'>;

function Diesel({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  return (
    <SafeAreaView style={dieselStyles.dieselContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#FAFAFA'}
      />
      <View>
        <Map
          width={width}
          height={1022}
          style={{position: 'absolute', left: -205, right: 0}}
        />
        <View style={dieselStyles.mapTop}>
          <View style={[homeStyles.detailsContent, dieselStyles.address]}>
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
          <View style={{width: '100%', display: 'flex', alignItems: 'center'}}>
            <LinearGradient
              colors={['#FFB600', '#FFD366']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={[
                profileStyles.profileTopBtn,
                {width: '80%', borderRadius: 50},
              ]}>
              <TouchableOpacity onPress={()=>navigation.navigate('change-address')}>
                <Text>Change delivery address</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <PricePin
            width={322}
            height={324}
            fill="none"
            style={{marginTop: 10}}
          />
          <MapPointer
            width={24}
            height={24}
            fill="none"
            style={{marginTop: -120, marginLeft: 180}}
          />
        </View>
      </View>
      <View style={[dieselStyles.scrollviewWrapper, {height: height}]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[dieselStyles.scrollview, {marginTop: 500}]}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              width: '100%',
            }}>
            <TouchableOpacity>
              <PopUp width={34} height={6} fill="none" />
            </TouchableOpacity>
            <View style={{width: '100%'}}>
            {quick_action_data[2].details.map((data: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={[
                orderDetailsStyles.flexContainer,
                vendorStyles.vendorCont,
              ]} onPress={()=>navigation.navigate('diesel-details')}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto', alignItems: 'center'}]}>
              <data.img width={64} height={64} fill="none" />
              <View>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto', gap: 3}]}>
              <Text style={vendorStyles.status}>Status - {data.status || 'Unknown'}</Text>
                  {data.status?.toString().toLowerCase() === 'online' ? (
                    <Online width={7} height={7} fill="none" />
                  ) : (
                    <Offline width={7} height={7} fill="none" />
                  )}
                </View>
                <Text style={vendorStyles.name}>{data.name}</Text>
                <Text style={vendorStyles.time}>Estimated delivery time: {data.delivery_time}</Text>
              </View>
              </View>
              <View style={{display: 'flex', alignItems: 'flex-end'}}>
                <Text style={vendorStyles.time}>Price per kg</Text>
                <Text style={vendorStyles.name}>₦{Intl.NumberFormat().format(data.price)}</Text>
                <View style={[orderDetailsStyles.flexContainer, {width: 'auto', gap: 3}]}>
                  <Star width={12} height={12} fill="none" />
                  <Text style={[vendorStyles.name, {fontSize: 12}]}>{data.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Diesel;
