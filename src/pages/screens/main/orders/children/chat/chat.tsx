import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'; 
import orderStyles from '../../orderStyles';
import BackArrow from '../../../../../../assets/images/auth/tabler_arrow-right.svg';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {OrdersProps} from '../../../../../../utils/sample-data/orders';
import orderDetailsStyles from '../order-details/orderDetailsStyles';
import MoreIcon from '../../../../../../assets/images/orders/more.svg';
import ChatStyles from './chatStyles';
import homeStyles from '../../../home/home-styles';
import {chat_data} from '../../../../../../utils/sample-data/chat';
import SendIcon from '../../../../../../assets/images/orders/send.svg';
import inputStyles from '../../../../../../components/Input/InputStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../utils/redux/store/store';
import {
  sendMessage,
  setCurrentMessage,
  setShowMoreInfo,
} from '../../../../../../utils/redux/slice/orders';
import Dp from '../../../../../../assets/images/orders/profile_pic.svg'
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'chat'>;

function Chat({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
   const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
  // Access route parameters to get order details and target (rider or vendor)
  const route = useRoute<RouteProp<RootStackParamList, 'chat'>>();
  const {orderDetails, target} = route.params;

  // Determine the chat participant (either rider or vendor)
  const chatPerson =
    target === 'rider' ? orderDetails?.rider : orderDetails?.vendor;

  // Profile picture of the chat participant
  const ProfilePic = chatPerson?.pic || Dp;

  const dispatch = useDispatch();
  const {messages, currentMessage, showMoreInfo} = useSelector(
    (state: RootState) => state.orders,
  );

  // Navigate to the profile details screen
  const handleNavigation = (
    orderDetails: OrdersProps,
    target: 'rider' | 'vendor',
  ) => {
    navigation.navigate('profile-details', {orderDetails, target});
  };

  console.log('Order details-chat: ', orderDetails);

  const renderItem = ({item}: {item: (typeof chat_data)[0]}) => {
    const isSender = item.sender === 'sender';
    return (
      <ScrollView
        style={[
          ChatStyles.messageContainer,
          isSender ? ChatStyles.senderMessage : ChatStyles.receiverMessage,
        ]}>
        <Text style={ChatStyles.messageText}>{item.message}</Text>
        <Text
          style={
            isSender ? ChatStyles.senderTimestamp : ChatStyles.receiverTimestamp
          }>
          {item.timestamp}
        </Text>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={ChatStyles.chatContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      {/* Chat header with navigation and participant info */}
      <View
        style={[
          orderStyles.ordersHeader,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          },
        ]}>
        <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow width={26} height={26} fill="none" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              orderDetailsStyles.flexContainer,
              {width: 'auto', marginLeft: 10},
            ]}
            onPress={() => handleNavigation(orderDetails!, target)}>
            <ProfilePic width={44} height={44} fill="none" />
            <View>
              <Text style={homeStyles.details}>{chatPerson?.name}</Text>
              <Text style={homeStyles.details}>{chatPerson?.phone_number}</Text>
            </View>
          </TouchableOpacity>
        </View>
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

      {/* Chat messages list and input field */}
      <View style={ChatStyles.container}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={ChatStyles.chatList}
        />
        <View style={ChatStyles.inputContainer}>
          <View style={inputStyles.securedInputWrapper}>
            <View style={inputStyles.passwordInput}>
              <TextInput
                placeholder="Type message"
                keyboardType="default"
                style={inputStyles.securedInput}
                value={currentMessage}
                onChangeText={text => dispatch(setCurrentMessage(text))}
              />
              <TouchableOpacity onPress={() => dispatch(sendMessage())}>
                <SendIcon width={16} height={16} fill="none" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Chat;
