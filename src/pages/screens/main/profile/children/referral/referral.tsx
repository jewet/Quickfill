import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Share,
  Alert,
  useColorScheme,
} from 'react-native';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../accessories/accessoriesStyles';
import Header from '../../../../../../components/Profile/Header';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProfileProps} from '../../../../../../utils/sample-data/profile';
import favouritesStyles from '../favourites/favouritesStyles';
import orderDetailsStyles from '../../../orders/children/order-details/orderDetailsStyles';
import BlurBox from '../../../../../../assets/images/profile/blur_box.svg';
import ShareIcon from '../../../../../../assets/images/profile/tabler_share-3.svg';
import CopyIcon from '../../../../../../assets/images/profile/tabler_copy.svg';
import Badge from '../../../../../../assets/images/profile/badge.svg';
import Friends from '../../../../../../assets/images/profile/friends.svg';
import Coin from '../../../../../../assets/images/profile/coin.svg';
import referralStyles from './referralStyles';
import Clipboard from '@react-native-clipboard/clipboard';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AlertModal from '../../../../../../components/Alert/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../utils/redux/store/store';
import { setShowAlert } from '../../../../../../utils/redux/slice/profile';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'referral'>;

function Referral({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  const route = useRoute<RouteProp<RootStackParamList, 'referral'>>();
  const {profileDetails}: {profileDetails?: ProfileProps} = route.params || {};

  const referralCode = 'Gkj378rG032i1';

  const appLink = 'https://quikrefil.com/download';

  // Function to copy referral code and app link to clipboard
  const copyToClipboard = (code: string) => {
    const fullMessage = `Use my referral code "${code}" to join! Download the app here: ${appLink}`;
    Clipboard.setString(fullMessage);
        dispatch(setShowAlert(true));
    
    // Alert.alert('Copied!', 'Referral code and app link copied to clipboard.');
  };

  // Function to share referral code and app link
  const shareReferralCode = async (code: string) => {
    try {
      const fullMessage = `Use my referral code "${code}" to join! Download the app here: ${appLink}`;
      await Share.share({
        message: fullMessage,
      });
    } catch (error) {
      Alert.alert('Error', 'Unable to share the referral code.');
    }
  };
  const dispatch = useDispatch();
  const {showAlert} = useSelector((state: RootState) => state.profile);

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        isFirstPage={false}
        title={profileDetails?.profile?.type}
        directory=""
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          favouritesStyles.scrollview,
          {paddingHorizontal: 16, paddingBottom: 100},
        ]}>
        <View style={{width: '100%', paddingBottom: 200}}>
          <Text style={{color: '#2C2C2C', fontWeight: '600', fontSize: 16}}>
            Share your referral code with friends and earn points!
          </Text>
          <View style={referralStyles.firstBox}>
            <BlurBox width={240} height={182} fill="none" />
            <View style={referralStyles.blurBg}></View>
            <View
              style={{
                width: '100%',
                paddingHorizontal: 16,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                bottom: 20,
              }}>
              <View style={{width: '100%'}}>
                <Text
                  style={{color: '#2C2C2C', fontWeight: '600', fontSize: 14}}>
                  Your invite code
                </Text>
              </View>
              <View
                style={[
                  orderDetailsStyles.flexContainer,
                  referralStyles.referralLink,
                ]}>
                <Text
                  style={{color: '#5E5E5E', fontWeight: '600', fontSize: 14}}>
                  {referralCode}
                </Text>
                <View>
                  <View
                    style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                    <TouchableOpacity
                      onPress={() => shareReferralCode(referralCode)}>
                      <ShareIcon width={20} height={20} fill="none" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => copyToClipboard(referralCode)}>
                      <CopyIcon width={20} height={20} fill="none" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{width: '100%', marginTop: 30}}>
            <Text style={{color: '#2C2C2C', fontWeight: '600', fontSize: 16}}>
              How it works?
            </Text>
            <View style={referralStyles.secondBox}>
              <View style={[orderDetailsStyles.flexContainer]}>
                <Text style={referralStyles.number}>1. </Text>
                <Text style={referralStyles.text}>
                  Share your code to invite your friends.
                </Text>
              </View>
              <View style={[orderDetailsStyles.flexContainer]}>
                <Text style={referralStyles.number}>2. </Text>
                <Text style={referralStyles.text}>
                  They register using your code.
                </Text>
              </View>
              <View style={[orderDetailsStyles.flexContainer]}>
                <View
                  style={[
                    orderDetailsStyles.flexContainer,
                    {width: 'auto', gap: 0},
                  ]}>
                  <Text style={referralStyles.number}>3</Text>
                  <Badge width={8} height={8} fill="none" />
                </View>
                <Text style={referralStyles.text}>
                  Share your code to invite your friends.
                </Text>
              </View>
            </View>
          </View>
          <View style={{width: '100%', marginTop: 30}}>
            <Text style={{color: '#2C2C2C', fontWeight: '600', fontSize: 16}}>
              Rewards
            </Text>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                referralStyles.thirdBox,
              ]}>
              <Coin width={40} height={40} fill="none" />
              <View>
                <Text style={referralStyles.topText}>200 pts</Text>
                <Text style={referralStyles.bottomText}>
                  You’ve earned till now
                </Text>
              </View>
            </View>
            <View
              style={[
                orderDetailsStyles.flexContainer,
                referralStyles.thirdBox,
              ]}>
              <Friends width={40} height={40} fill="none" />
              <View>
                <Text style={referralStyles.topText}>3 friends</Text>
                <Text style={referralStyles.bottomText}>
                  Registered with your code
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {showAlert && (
        <AlertModal
          topText="Copied!"
          bottomText="Referral code and app link copied to clipboard."
          closeModal={() => dispatch(setShowAlert(false))}
          ok={true}
        />
      )}
    </SafeAreaView>
  );
}

export default Referral;
