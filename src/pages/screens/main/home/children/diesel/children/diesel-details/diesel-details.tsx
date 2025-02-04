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
import FundWallet from '../../../../../profile/children/wallet/children/fund-wallet/fund-wallet';
import {RouteProp, useRoute} from '@react-navigation/native';
import {DetailsProps} from '../../../../../../../../utils/sample-data/home';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../../utils/redux/store/store';
import {
  setLitres,
  setShowAlert,
  setShowModal,
} from '../../../../../../../../utils/redux/slice/gas';
import AlertModal from '../../../../../../../../components/Alert/Alert';
import { primaryColor } from '../../../../../../onboarding/splash/splashstyles';
import { scale } from '../../../../../accessories/accessoriesStyles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'diesel-details'>;

function DieselDetails({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
   const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route = useRoute<RouteProp<RootStackParamList, 'diesel-details'>>();
  const {diesielDetails}: {diesielDetails?: DetailsProps} = route.params || {};
  const dispatch = useDispatch();
  const {showModal, litres, showAlert} = useSelector((state: RootState) => state.gas);
  const dieselPrice = litres === 0 ? 0 : diesielDetails?.price * litres;
  const navigateToCheckout = () => {
    if (litres <= 0) {
      dispatch(setShowAlert(true))
    } else {
      navigation.replace('gas-checkout', {
        orderDetails: diesielDetails,
        directory: 'diesel',
        dieselPrice: dieselPrice,
        litres: litres,
      });
    }
  };
  return (
    <SafeAreaView style={gasStyles.gasContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
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
            <TouchableOpacity
              style={{alignItems: 'flex-end'}}
              onPress={() => {
                navigation.navigate('profile-details', {
                  orderDetails: diesielDetails,
                  target: 'Delivery Rep',
                });
              }}>
              <Text
                style={[
                  homeStyles.title,
                  {
                    color: primaryColor,
                    fontWeight: '700',
                    marginBottom: 10,
                    fontSize: scale(12),
                  },
                ]}>
                View Profile
              </Text>
            </TouchableOpacity>
            <View>
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
        </View>
        <View style={gasStyles.selectedKgWrapper}>
          <Text style={[homeStyles.orderType, gasStyles.selectedKg]}>
            {`${Intl.NumberFormat().format(litres)}L`}
          </Text>
        </View>
        <View style={{display: 'flex', alignItems: 'center', width: '100%'}}>
          <DieselPump width={273} height={350} fill="none" />
        </View>
        <View style={gasStyles.gasBottom}>
          <Text style={gasStyles.heading}>Enter number of litres</Text>
          <TextInput
            placeholder=""
            value={litres > 0 ? litres.toString() : ''}
            keyboardType="numeric"
            style={gasStyles.input}
            onChangeText={value => {
              const numericValue = value.replace(/[^0-9]/g, '');
              dispatch(setLitres(numericValue ? Number(numericValue) : 0));
            }}
          />

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
            onPress={navigateToCheckout}>
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
                  ₦{Intl.NumberFormat().format(Number(dieselPrice))}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {showModal && (
        <FundWallet
          action={() => dispatch(setShowModal(false))}
          navigation={navigation}
        />
      )}
      {showAlert && (
        <AlertModal
          topText="Notice"
          bottomText="Please enter number of litres"
          closeModal={() => dispatch(setShowAlert(false))}
        />
      )}
    </SafeAreaView>
  );
}

export default DieselDetails;
