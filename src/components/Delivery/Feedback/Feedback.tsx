import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import modalStyles from '../../Auth/Modal/ModalStyles';
import Button from '../../Button/Button';
import inputStyles from '../../Input/InputStyles';
import complaintsStyles from '../../../pages/screens/main/profile/children/help/children/complaints/complaintsStyles';
import FilledStar from '../../../assets/images/orders/star.svg';
import UnFilledStar from '../../../assets/images/orders/unfilled_star.svg';
import paymentResultStyles from '../../../pages/screens/main/profile/children/wallet/children/fund-wallet/children/payment-result/paymentResultStyles';
import feedbackStyles from './FeedbackStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../utils/redux/store/store';
import {setFeedback, setIsFavourite} from '../../../utils/redux/slice/gas';
import Dp from '../../../assets/images/orders/profile_pic.svg';
import orderDetailsStyles from '../../../pages/screens/main/orders/children/order-details/orderDetailsStyles';
import addressStyles from '../../../pages/screens/main/profile/children/address/addressStyles';
import {
  moderateScale,
  verticalScale,
} from '../../../pages/screens/main/accessories/accessoriesStyles';
import LoveIcon from '../../../assets/images/accessories/love.svg';
import LovedIcon from '../../../assets/images/accessories/loved.svg';

interface Props {
  closeModal: () => void;
  orderDetails: any;
}

function DeliveryFeedback({closeModal, orderDetails}: Props) {
  const [rating, setRating] = useState(0); // State to track rating (0-5)

  const handleStarPress = (index: number) => {
    if (rating === index + 1) {
      setRating(0); 
    } else {
      setRating(index + 1);  
    }
  };
  const dispatch = useDispatch();
  const {feedback, isFavourite} = useSelector((state: RootState) => state.gas);
  return (
    <SafeAreaView style={modalStyles.modalContainer}>
      <View style={modalStyles.modalBg}></View>
      <View style={modalStyles.modalCont}>
        <Text style={modalStyles.topText}>Order completed</Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Dp width={50} height={50} fill="none" />
          <Text style={[addressStyles.location, {fontSize: moderateScale(16)}]}>
            {orderDetails?.rider?.name}
          </Text>
        </View>
        <Text style={[inputStyles.label, {marginTop: -10, fontSize: moderateScale(13)}]}>
          Rate your experience with the delivery rep
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {Array.from({length: 5}).map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleStarPress(index)}
              style={{marginHorizontal: 4}}>
              {index < rating ? (
                <FilledStar width={24} height={24} />
              ) : (
                <UnFilledStar width={24} height={24} />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={[
            orderDetailsStyles.flexContainer,
            {justifyContent: 'space-between'},
          ]}>
          <Text style={[inputStyles.label, {marginTop: 0}]}>
            Add{' '}
            <Text style={{fontWeight: '700'}}>{orderDetails?.rider?.name}</Text>{' '}
            as favourite
          </Text>
          <TouchableOpacity
            onPress={() => dispatch(setIsFavourite(!isFavourite))}>
            {isFavourite ? (
              <LovedIcon width={24} height={24} fill="none" />
            ) : (
              <LoveIcon width={24} height={24} fill="none" />
            )}
          </TouchableOpacity>
        </View>
        <View style={inputStyles.inputContainer}>
          <Text style={[inputStyles.label, {marginTop: verticalScale(5)}]}>
            Please give us your feedback{' '}
            <Text style={{fontWeight: '700'}}>(Optional)</Text>
          </Text>
          <TextInput
            placeholder="Your feedback..."
            style={[
              complaintsStyles.textArea,
              {height: 80, borderRadius: 20, marginTop: 10},
            ]}
            value={feedback}
            multiline={true}
            onChange={event => dispatch(setFeedback(event.nativeEvent.text))}
          />
        </View>
        <View
          style={[feedbackStyles.btnsWrapper, {marginTop: verticalScale(-10)}]}>
          <TouchableOpacity
            style={[paymentResultStyles.btnWrapper, {width: '43%', height: 60}]}
            onPress={closeModal}>
            <Text style={[paymentResultStyles.btnText, {fontWeight: '700'}]}>
              Not now
            </Text>
          </TouchableOpacity>
          <View style={{width: '45%'}}>
            <Button text={'Send'} action={closeModal} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DeliveryFeedback;
