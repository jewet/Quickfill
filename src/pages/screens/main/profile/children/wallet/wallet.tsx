import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../accessories/accessoriesStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../utils/status-bar-styles/status-bar-styles';
import Header from '../../../../../../components/Profile/Header';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProfileProps} from '../../../../../../utils/sample-data/profile';
import favouritesStyles from '../favourites/favouritesStyles';
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import PlusIcon from '../../../../../../assets/images/profile/tabler_plus.svg';
import MasterCard from '../../../../../../assets/images/profile/logos_mastercard.svg';
import SelectedIcon from '../../../../../../assets/images/electricity/selected-bill.svg';
import Close from '../../../../../../assets/images/payment/tabler_square-rounded-chevron-down.svg';
import Eyes from '../../../../../../assets/images/payment/tabler_eye-closed.svg';
import TopUp from '../../../../../../assets/images/payment/top_up.svg';
import History from '../../../../../../assets/images/payment/history.svg';
import Voucher from '../../../../../../assets/images/payment/voucher.svg';
import Button from '../../../../../../components/Button/Button';
import profileStyles from '../../profileStyles';
import LinearGradient from 'react-native-linear-gradient';
import homeStyles from '../../../home/home-styles';
import walletStyles from './walletStyles';
import addressStyles from '../address/addressStyles';
import FundWallet from './children/fund-wallet/fund-wallet';

type Props = StackScreenProps<RootStackParamList, 'user-wallet'>;

function Wallet({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'user-wallet'>>();
  const {profileDetails}: {profileDetails?: ProfileProps} = route.params || {};
  const [showBalance, setShowBalance] = useState<boolean>(true);
  const [showreferText, setShowreferText] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const linear_height = Platform.OS === 'ios' ? 110 : 'auto';
  const margin_top = Platform.OS === 'ios' ? 40 : 0;
  const {width, height} = Dimensions.get('window');

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={walletStyles.scrollview}>
        <LinearGradient
          colors={['#A8A8A3', '#5E5E5E']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={[walletStyles.linearBg]}>
          <View style={{width: width}}>
            {showreferText && (
              <View
                style={[
                  orderDetailsStyles.flexContainer,
                  {
                    width: '100%',
                    paddingHorizontal: 16,
                    justifyContent: 'space-between',
                  },
                ]}>
                <Text style={walletStyles.referText}>Refer friends for ₦ </Text>
                <TouchableOpacity onPress={() => setShowreferText(false)}>
                  <Close width={62} height={62} />
                </TouchableOpacity>
              </View>
            )}
            <View style={[profileStyles.profileTop]}>
              <LinearGradient
                colors={['#FFD366', '#FFB600']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                style={[profileStyles.profileTopBtn, {width: '90%'}]}>
                <View
                  style={[
                    orderDetailsStyles.flexContainer,
                    {
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      height: linear_height,
                    },
                  ]}>
                  <View style={{display: 'flex', gap: 5}}>
                    <Text
                      style={[
                        homeStyles.details,
                        {fontSize: 18, paddingTop: 10},
                      ]}>
                      Samuel Minister
                    </Text>
                    <View style={homeStyles.balanceContent}>
                      <View>
                        <Text style={[homeStyles.title, {color: '#5E5E5E'}]}>
                          Quikrefil wallet balance
                        </Text>
                        <Text
                          style={[
                            homeStyles.details,
                            {fontSize: 22, paddingTop: 10, fontWeight: 700},
                          ]}>
                          {showBalance
                            ? `₦${Intl.NumberFormat().format(96484.09)}`
                            : '******'}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{marginTop: 25}}
                        onPress={() => setShowBalance(!showBalance)}>
                        <Eyes width={24} height={24} fill="none" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {
                  width: 'auto',
                  justifyContent: 'center',
                  gap: 30,
                  marginTop: 20,
                },
              ]}>
              <TouchableOpacity
                style={{display: 'flex', alignItems: 'center'}}
                onPress={() => setShowModal(true)}>
                <TopUp width={44} height={44} fill="none" />
                <Text style={walletStyles.opt}>Top up</Text>
              </TouchableOpacity>
              <View style={{display: 'flex', alignItems: 'center'}}>
                <History width={44} height={44} fill="none" />
                <Text style={walletStyles.opt}>History</Text>
              </View>
              <View style={{display: 'flex', alignItems: 'center'}}>
                <Voucher width={44} height={44} fill="none" />
                <Text style={walletStyles.opt}>Apply voucher</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View style={{width: '100%', marginTop: 20}}>
          <Text style={walletStyles.recentText}>Recent orders</Text>
          {profileDetails?.profile?.details?.map((data: any, index: number) => (
            <View
              style={[
                orderDetailsStyles.flexContainer,
                {
                  justifyContent: 'space-between',
                  borderTopWidth: 1,
                  borderColor: '#E5E5EA',
                  paddingVertical: 20,
                  backgroundColor: '#FFFFFF',
                  paddingHorizontal: 16,
                },
              ]}
              key={index}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <data.icon width={24} height={24} fill="none" />
                <View>
                  <Text style={addressStyles.location}>
                    ₦{Intl.NumberFormat().format(data.amt)}
                  </Text>
                  <Text style={addressStyles.locationBottom}>{data.des}</Text>
                </View>
              </View>
              <Text style={addressStyles.rightText}>{data.date}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      {showModal && (
        <FundWallet
          action={() => setShowModal(false)}
          navigation={navigation}
        />
      )}
    </SafeAreaView>
  );
}

export default Wallet;
