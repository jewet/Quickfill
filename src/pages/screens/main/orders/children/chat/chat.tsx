import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../utils/status-bar-styles/status-bar-styles';
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

type Props = StackScreenProps<RootStackParamList, 'chat'>;

function Chat({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'chat'>>();
  const {orderDetails, target} = route.params;

  const chatPerson =
    target === 'rider' ? orderDetails?.rider : orderDetails?.vendor;

  const ProfilePic = chatPerson.pic;

  const [messages, setMessages] = useState(chat_data);
  const [currentMessage, setCurrentMessage] = useState('');
  const handleNavigation = (
    orderDetails: OrdersProps,
    target: 'rider' | 'vendor',
  ) => {
    navigation.navigate('profile-details', {orderDetails, target});
  };

  const sendMessage = () => {
    if (currentMessage.trim()) {
      const newMessage = {
        id: (messages.length + 1).toString(),
        sender: 'sender',
        message: currentMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages([...messages, newMessage]);
      setCurrentMessage('');
    }
  };

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
            ]} onPress={()=>handleNavigation(orderDetails!, target)}>
            <ProfilePic width={44} height={44} fill="none" />
            <View>
              <Text style={homeStyles.details}>{chatPerson?.name}</Text>
              <Text style={homeStyles.details}>{chatPerson?.phone_number}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <MoreIcon width={44} height={44} fill="none" />
        </TouchableOpacity>
      </View>
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
                onChangeText={setCurrentMessage}
              />
              <TouchableOpacity onPress={sendMessage}>
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
