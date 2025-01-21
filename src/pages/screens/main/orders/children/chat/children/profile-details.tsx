import React, {useState} from 'react';
import {Platform, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import profileDetailsStyles from './profileDetailsStyles';
import orderDetailsStyles from '../../order-details/orderDetailsStyles';
import GoBackArrow from '../../../../../../../assets/images/orders/goback.svg';
import ProfileBg from '../../../../../../../assets/images/orders/profile_bg.svg';
import MoreIcon from '../../../../../../../assets/images/orders/3dots.svg';
import AwardIcon from '../../../../../../../assets/images/orders/tabler_award.svg';
import UserCheck from '../../../../../../../assets/images/orders/tabler_user-check.svg';
import Star from '../../../../../../../assets/images/orders/star.svg';
import homeStyles from '../../../../home/home-styles';
import {achievements_data, customer_review} from '../../../../../../../utils/sample-data/orders';
import {primaryColor} from '../../../../../onboarding/splash/splashstyles';
import ChatStyles from '../chatStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../utils/redux/store/store';
import {
  setShowModal,
  setShowMoreInfo,
} from '../../../../../../../utils/redux/slice/orders';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'profile-details'>;

function ProfileDetails({navigation}: Props) {
  // Access route parameters to get order details and target (rider or vendor)
  const route = useRoute<RouteProp<RootStackParamList, 'profile-details'>>();
  const {orderDetails, target} = route.params;
  const dispatch = useDispatch();
  const {showMoreInfo} = useSelector((state: RootState) => state.orders);

  // Determine the chat participant (either rider or vendor)
  const chatPerson =
    target === 'rider' ? orderDetails?.rider : orderDetails?.vendor;

  // Profile picture of the chat participant
  const ProfilePic = chatPerson.pic;

  // Dynamic styles for iOS and Android adjustments
  const profile_bg_margin_top = Platform.OS === 'ios' ? -80 : -20;
  const header_top = Platform.OS === 'ios' ? 0 : 20;
  const profile_pic_margin_bottom = Platform.OS === 'ios' ? -20 : 30;

  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviewsToShow = showAllReviews
    ? customer_review
    : customer_review.slice(0, 3);

  const toggleReviews = () => setShowAllReviews(!showAllReviews);
  console.log('Order details-profile: ', orderDetails);

  return (
    <SafeAreaView style={profileDetailsStyles.profileDetailsContainer}>
      <View style={{width: '100%', height: 250}}>
        <View
          style={[
            orderDetailsStyles.flexContainer,
            {
              justifyContent: 'space-between',
              paddingHorizontal: 16,
              zIndex: 11,
              marginTop: header_top,
            },
          ]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <GoBackArrow width={44} height={44} fill="none" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setShowMoreInfo(!showMoreInfo))}>
            <MoreIcon width={44} height={44} fill="none" />
          </TouchableOpacity>
        </View>
        {showMoreInfo && (
          <View style={ChatStyles.hiddenCont}>
            <TouchableOpacity
              onPress={() => {
                dispatch(setShowMoreInfo(false));
                navigation.navigate('report', {orderDetails, target});
              }}>
              <Text style={ChatStyles.infoOptText}>Report</Text>
            </TouchableOpacity>
            <Text
              style={[ChatStyles.infoOptText, {color: '#DC5513'}]}
              onPress={() => dispatch(setShowMoreInfo(false))}>
              Block
            </Text>
          </View>
        )}

        {/* Profile background image */}
        <ProfileBg
          width={'100%'}
          height={'100%'}
          fill="none"
          style={{position: 'absolute', top: profile_bg_margin_top}}
        />
      </View>

      <ProfilePic
        width={120}
        height={120}
        fill="none"
        style={{position: 'absolute', top: 150}}
      />

      <ScrollView
        style={[
          profileDetailsStyles.scrollview,
          {marginTop: profile_pic_margin_bottom},
        ]}
        showsVerticalScrollIndicator={false}>
        {/* Profile Name */}
        <Text
          style={[
            homeStyles.details,
            {fontSize: 24, paddingTop: 10, paddingHorizontal: 16},
          ]}>
          {chatPerson?.name}
        </Text>

        {/* Awards and verification badges */}
        <View
          style={[
            orderDetailsStyles.flexContainer,
            {marginTop: 10, paddingHorizontal: 16},
          ]}>
          <AwardIcon width={20} height={20} fill="none" />
          <Text
            style={[
              homeStyles.title,
              {color: '#2C2C2C', fontSize: 12, fontWeight: 600},
            ]}>
            Quick to delivery vendor award
          </Text>
        </View>

        <View
          style={[
            orderDetailsStyles.flexContainer,
            {marginTop: 10, paddingHorizontal: 16},
          ]}>
          <UserCheck width={20} height={20} fill="none" />
          <Text
            style={[
              homeStyles.title,
              {color: '#2C2C2C', fontSize: 12, fontWeight: 600},
            ]}>
            Has passed a multi-step verification process
          </Text>
        </View>

        {/* Ratings and achievements summary */}
        <View style={[profileDetailsStyles.ratingsWrapper]}>
          <View
            style={[
              profileDetailsStyles.flexContainer,
              profileDetailsStyles.ratingsCont,
            ]}>
            <View>
              <Text style={profileDetailsStyles.ratingsText}>1430</Text>
              <Text style={homeStyles.title}>Deliveries</Text>
            </View>
            <View>
              <View style={[orderDetailsStyles.flexContainer, {gap: 4}]}>
                <Text style={profileDetailsStyles.ratingsText}>4.2</Text>
                <Star width={18} height={18} fill="none" />
              </View>
              <Text style={homeStyles.title}>Rating</Text>
            </View>
            <View>
              <Text style={profileDetailsStyles.ratingsText}>4</Text>
              <Text style={homeStyles.title}>Years</Text>
            </View>
          </View>
        </View>

        {/* Achievements section */}
        <View style={{paddingHorizontal: 16, marginTop: 25}}>
          <Text
            style={[
              homeStyles.title,
              {color: '#2C2C2C', fontSize: 17, fontWeight: 600},
            ]}>
            Achievements
          </Text>
          {/* Horizontal scroll of achievements */}
          <ScrollView
            horizontal
            style={profileDetailsStyles.achievementWrapper}>
            {achievements_data.map((data, index) => (
              <View key={index} style={profileDetailsStyles.achievementCont}>
                <data.img width={72} height={72} fill="none" />
                <Text style={profileDetailsStyles.achievementText}>
                  {data.reward}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        {/* Customer Review Section */}
        <View style={{paddingHorizontal: 16, marginTop: 25, width: '100%'}}>
          <Text
            style={[
              homeStyles.title,
              {color: '#2C2C2C', fontSize: 17, fontWeight: 600},
            ]}>
            Customer reviews{' '}
            <Text style={{color: primaryColor}}>
              ({customer_review.length})
            </Text>
          </Text>
          <View
            style={{
              width: '100%',
              display: 'flex',
              gap: 10,
              paddingVertical: 20,
            }}>
            {reviewsToShow?.map((data: any, index: number) => (
              <View key={index} style={profileDetailsStyles.reviewCont}>
                <View
                  style={[
                    orderDetailsStyles.flexContainer,
                    {
                      width: '90%',
                      justifyContent: 'flex-start',
                      gap: 0,
                      alignItems: 'center',
                    },
                  ]}>
                  <Text style={profileDetailsStyles.name}>{data?.name}</Text>
                  <Text style={profileDetailsStyles.time}>
                    {' '}
                    • {data?.timeStamp} ago
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 5,
                  }}>
                  {[...Array(data?.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      width={18}
                      height={18}
                      style={{marginRight: 4}}
                    />
                  ))}
                </View>
                <Text style={profileDetailsStyles.review}>{data?.review}</Text>
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity style={{paddingBottom: 50}} onPress={toggleReviews}>
          <Text style={profileDetailsStyles.seeMore}>
            {showAllReviews ? 'See less' : 'See more'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileDetails;
