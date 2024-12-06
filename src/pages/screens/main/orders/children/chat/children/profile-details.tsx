import React from 'react';
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
import {achievements_data} from '../../../../../../../utils/sample-data/orders';

type Props = StackScreenProps<RootStackParamList, 'profile-details'>;

function ProfileDetails({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'profile-details'>>();
  const {orderDetails, target} = route.params;

  const chatPerson =
    target === 'rider' ? orderDetails?.rider : orderDetails?.vendor;

  const ProfilePic = chatPerson.pic;
  const profile_bg_margin_top = Platform.OS === 'ios' ? -80 : -20
  const header_top = Platform.OS === 'ios' ? 0 : 20
  const profile_pic_margin_bottom = Platform.OS === 'ios' ? 0 : 30

  console.log('target: ', target);
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
              marginTop: header_top
            },
          ]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <GoBackArrow width={44} height={44} fill="none" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MoreIcon width={44} height={44} fill="none" />
          </TouchableOpacity>
        </View>
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
        style={{position: 'absolute', top: 150, }}
      />
      <ScrollView
        style={[profileDetailsStyles.scrollview, {marginTop: profile_pic_margin_bottom}]}
        showsVerticalScrollIndicator={false}>
        <Text
          style={[
            homeStyles.details,
            {fontSize: 24, paddingTop: 10, paddingHorizontal: 16},
          ]}>
          {chatPerson?.name}
        </Text>
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
        <View style={{paddingHorizontal: 16, marginTop: 25}}>
          <Text
            style={[
              homeStyles.title,
              {color: '#2C2C2C', fontSize: 17, fontWeight: 600},
            ]}>
            Achievements
          </Text>
            <ScrollView horizontal style={profileDetailsStyles.achievementWrapper}>
              {achievements_data.map((data, index) => (
                <View key={index} style={profileDetailsStyles.achievementCont}>
                  <data.img width={72} height={72} fill="none" />
                  <Text style={profileDetailsStyles.achievementText}>{data.reward}</Text>
                </View>
              ))}
            </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileDetails;
