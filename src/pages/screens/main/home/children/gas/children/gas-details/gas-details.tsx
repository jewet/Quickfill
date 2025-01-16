import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
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
import BigGas from '../../../../../../../../assets/images/gas/big-gas.svg';
import BiggerGas from '../../../../../../../../assets/images/gas/bigger-gas.svg';
import BiggestGas from '../../../../../../../../assets/images/gas/biggest-gas.svg';
import LinearGradient from 'react-native-linear-gradient';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import gasStyles from './gasStyles';
import homeStyles from '../../../../home-styles';
import {gas_data} from '../../../../../../../../utils/sample-data/gas';
import primaryBtnStyles from '../../../../../../../../components/Button/ButtonStyles';
import FundWallet from '../../../../../profile/children/wallet/children/fund-wallet/fund-wallet';
import {RouteProp, useRoute} from '@react-navigation/native';
import {DetailsProps} from '../../../../../../../../utils/sample-data/home';
import Offline from '../../../../../../../../assets/images/orders/offline.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../../../utils/redux/store/store';
import { setSelectedIndex, setShowModal } from '../../../../../../../../utils/redux/slice/gas';

const screenWidth = Dimensions.get('window').width;

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'gas-details'>;

function GasDetails({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'gas-details'>>();
  const {gasDetails}: {gasDetails?: DetailsProps} = route.params || {};

  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useDispatch()
  const {
    showModal,
    selectedIndex,
  } = useSelector((state: RootState) => state.gas);
  // const [showModal, setShowModal] = useState<boolean>(false);

  // const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  const scrollToIndex = (index: number) => {
    dispatch(setSelectedIndex(index));
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  };

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / (screenWidth * 0.6));
    dispatch(setSelectedIndex(index));
  };

  const handleButtonPress = (index: number) => {
    dispatch(setSelectedIndex(index));
    scrollToIndex(index);
  };

  const getCurrentKgWidth = (index: number) => {
    if (index === 0) {
      return '35%';
    } else if (index === 1) {
      return '40%';
    } else if (index === 2) {
      return '45%';
    } else if (index === 3) {
      return '50%';
    }
  };
  const getCurrentKgMarginLeft = (index: number) => {
    if (index === 0) {
      return '50%';
    } else if (index === 1) {
      return '0%';
    } else if (index === 2) {
      return '0%';
    } else if (index === 3) {
      return '-50%';
    }
  };
  const getCurrentKgMarginRight = (index: number) => {
    if (index === 0) {
      return '0%';
    } else if (index === 1) {
      return '0%';
    } else if (index === 2) {
      return '0%';
    } else if (index === 3) {
      return '60%';
    }
  };

const prevIndexMarginLeft = (index: number, currentIndex: number) => {
  if (currentIndex === 0 && index === 0) {
    return '60%';
  }else if (currentIndex === 0 && index === 1) {
    return '60%';
  }else if (currentIndex === 1 && index == 0) {
    return '120%';
  } else if (currentIndex === 2 && index === 1) {
    return '120%';
  } else if (currentIndex === 3 && index === 2) {
    return '60%';
}
}





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
                  Status - {gasDetails?.status}
                </Text>
                {gasDetails?.status.toLowerCase() === 'online' ? (
                  <Online width={10} height={10} fill="none" />
                ) : (
                  <Offline width={10} height={10} fill="none" />
                )}
              </View>
              <Text style={homeStyles.idText}>Price per kg</Text>
            </View>
            <View style={[homeStyles.orderContent, {marginTop: 10}]}>
              <Text style={homeStyles.orderType}>{gasDetails?.name}</Text>
              <Text style={homeStyles.orderAmt}>
                ₦{Intl.NumberFormat().format(Number(gasDetails?.delivery_fee))}
              </Text>
            </View>
            <View style={[homeStyles.orderContent, {marginVertical: 5}]}>
              <Text style={[homeStyles.orderType, {fontSize: 16}]}>
                Estimated delivery time: {gasDetails?.delivery_time}
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
                  {gasDetails?.rating}
                </Text>
              </View>
            </View>
            <Text style={homeStyles.idText}>
              Proximity: 2.6km away • Orders completed: 2038
            </Text>
          </View>
        </View>
        <View
          style={{width: '100%', display: 'flex', alignItems: 'flex-start'}}>
          <View style={gasStyles.selectedKgWrapper}>
            <Text style={[homeStyles.orderType, gasStyles.selectedKg]}>
              {gas_data[selectedIndex].kg}kg
            </Text>
          </View>
          <View></View>
          <Animated.FlatList
            ref={flatListRef}
            data={gasDetails?.available_gas_cylinders}
            horizontal
            keyExtractor={(item, index) => `${index}`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
            snapToInterval={screenWidth * 0.6}
            decelerationRate="fast"
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            onMomentumScrollEnd={handleScroll}
            renderItem={({item, index}) => {
              const scale = scrollX.interpolate({
                inputRange: [
                  (index - 1) * (screenWidth * 0.6),
                  index * (screenWidth * 0.6),
                  (index + 1) * (screenWidth * 0.6),
                ],
                outputRange: [0.8, 1, 0.8],
                extrapolate: 'clamp',
              });

              return (
                <Animated.View
                  style={[
                    styles.itemContainer,
                    {
                      transform: [{scale}],
                    },
                  ]}>
                  <BiggestGas
                    width={index === selectedIndex ? '90%' : getCurrentKgWidth(index)}
                    height={index === selectedIndex ? 240 : 150}
                    fill="none"
                    style={{display: 'flex', alignItems: 'center',  marginLeft: index === index ? prevIndexMarginLeft(index, selectedIndex) : index === selectedIndex ? '60%' : '0%', marginRight: index === selectedIndex ? getCurrentKgMarginRight(index) : '60%',}}
                  />
                </Animated.View>
              );
            }}
          />
        </View>
        <View style={{width: '100%'}}>
          <Text
            style={[
              gasStyles.heading,
              {marginLeft: 20, marginTop: 20, marginBottom: -20},
            ]}>
            Choose cylinder size
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 20}}>
            {gasDetails?.available_gas_cylinders?.map(
              (data: any, index: any) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    gasStyles.gasSelectionWrapper,
                    {
                      borderColor:
                        index === selectedIndex ? '#FFB600' : '#5E5E5E',
                      borderWidth: index === selectedIndex ? 3 : 1,
                    },
                  ]}
                  onPress={() => handleButtonPress(index)}>
                  <View style={gasStyles.gasCylinder}>
                    <data.img fill="none" />
                  </View>
                  <Text style={[gasStyles.selectedKg, {marginBottom: 10}]}>
                    {data.kg}kg
                  </Text>
                  <Text style={homeStyles.orderType}>
                    ₦{Intl.NumberFormat().format(data.amount)}
                  </Text>
                </TouchableOpacity>
              ),
            )}
          </ScrollView>
        </View>
        <View style={gasStyles.gasBottom}>
          <Text style={gasStyles.heading}>Enter refill size (optional)</Text>
          <TextInput
            style={gasStyles.input}
            value={`${gasDetails?.available_gas_cylinders[selectedIndex].kg}kg`}
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
            onPress={() => {
              if (!gasDetails) {
                console.error('gasDetails is undefined!');
                return;
              }
              navigation.navigate('gas-checkout', {
                gasDetails,
                selectedCylinder:
                  gasDetails.available_gas_cylinders[selectedIndex],
                  directory: 'gas'
              });
            }}>
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
                  ₦
                  {Intl.NumberFormat().format(
                    gasDetails?.available_gas_cylinders[selectedIndex].amount,
                  )}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.6,
    marginHorizontal: 10,
  },
  selectedItemContainer: {
    backgroundColor: '#ffe5b4',
  },
  flatListContainer: {
    alignItems: 'flex-end',
  },
});

export default GasDetails;