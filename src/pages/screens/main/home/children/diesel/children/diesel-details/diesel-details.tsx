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
import CloseIcon from '../../../../../../../../assets/images/gas/close-icon.svg';
import Online from '../../../../../../../../assets/images/gas/online.svg';
import Rating from '../../../../../../../../assets/images/gas/tabler_star-filled.svg';
import Note from '../../../../../../../../assets/images/gas/note.svg';
import LinearGradient from 'react-native-linear-gradient';
import DieselPump from '../../../../../../../../assets/images/diesel/diesel-pump.svg';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import gasStyles from '../../../gas/gasStyles';
import homeStyles from '../../../../home-styles';
import primaryBtnStyles from '../../../../../../../../components/Button/ButtonStyles';
import {gas_data} from '../../../../../../../../utils/sample-data/gas';
import FundWallet from '../../../../../profile/children/wallet/children/fund-wallet/fund-wallet';
import {RouteProp, useRoute} from '@react-navigation/native';
import {DetailsProps} from '../../../../../../../../utils/sample-data/home';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'diesel-details'>;

function DieselDetails({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'diesel-details'>>();
  const {diesielDetails}: {diesielDetails?: DetailsProps} = route.params || {};
  console.log('desielDetails: ', diesielDetails);
  const isDarkMode = useColorScheme() === 'dark';
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedKg, setSelectedKg] = useState<number>(0);
  return (
    <SafeAreaView style={gasStyles.gasContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#FAFAFA'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={gasStyles.scrollview}>
        <View
          style={{display: 'flex', paddingVertical: 10, paddingHorizontal: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 50,
              padding: 10,
              display: 'flex',
              alignSelf: 'flex-end',
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 14,
              },
              shadowOpacity: 0.25,
              shadowRadius: 28,
              elevation: 10,
            }}
            onPress={() => navigation.goBack()}>
            <CloseIcon width={15} height={15} fill="none" />
          </TouchableOpacity>
          <View style={gasStyles.gasTop}>
            <View style={homeStyles.orderContent}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <Text style={homeStyles.idText}>
                  Status - {diesielDetails?.status}
                </Text>
                <Online width={10} height={10} fill="none" />
              </View>
              <Text style={homeStyles.idText}>
                Status - {diesielDetails?.status}
              </Text>
            </View>
            <View style={[homeStyles.orderContent, {marginTop: 10}]}>
              <Text style={homeStyles.orderType}>{diesielDetails?.name}</Text>
              <Text style={homeStyles.orderAmt}>
                ₦{Intl.NumberFormat().format(diesielDetails?.price)}
              </Text>
            </View>
            <View style={[homeStyles.orderContent, {marginVertical: 5}]}>
              <Text style={[homeStyles.orderType, {fontSize: 16}]}>
                Estimated delivery time: {diesielDetails?.delivery_time}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 2,
                }}>
                <Rating width={20} height={20} fill="none" />
                <Text style={[homeStyles.orderAmt, {fontSize: 16}]}>
                  {diesielDetails?.rating}
                </Text>
              </View>
            </View>
            <Text style={homeStyles.idText}>
              Proximity: 2.6km away • Orders completed: 2038
            </Text>
          </View>
        </View>
        <View style={{display: 'flex', alignItems: 'center', width: '100%'}}>
          <DieselPump width={273} height={350} fill="none" />
        </View>
        <View style={gasStyles.gasBottom}>
          <Text style={gasStyles.heading}>Enter amount</Text>
          <TextInput style={gasStyles.input} />
          <View style={gasStyles.noteWrapper}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <Text style={[homeStyles.orderType, {fontWeight: 700}]}>
                Note{' '}
              </Text>
              <Note width={20} height={20} fill="none" />
            </View>
            <Text style={[homeStyles.idText, {marginTop: 5}]}>
              Delivery is not included in the prices. The approximate delivery
              cost will be shown on the next page.
            </Text>
          </View>
          <TouchableOpacity
            style={primaryBtnStyles.btnContainer}
            onPress={() => setShowModal(true)}>
            <LinearGradient
              colors={['#FFB600', '#FFD366']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={[
                primaryBtnStyles.gradientContainer,
                {
                  alignItems: 'flex-end',
                  paddingHorizontal: 20,
                  marginBottom: 50,
                },
              ]}>
              <View style={gasStyles.btnContent}>
                <Text style={gasStyles.btnText}>Continue</Text>
                <Text style={gasStyles.btnText}>
                  ₦{Intl.NumberFormat().format(Number(diesielDetails?.price))}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
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

export default DieselDetails;
