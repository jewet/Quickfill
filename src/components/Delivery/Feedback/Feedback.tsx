import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
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
import {setFeedback} from '../../../utils/redux/slice/gas';

interface Props {
  closeModal: () => void;
}

function DeliveryFeedback({
  closeModal,
}: Props) {
  const [rating, setRating] = useState(0); // State to track rating (0-5)

  const handleStarPress = (index: number) => {
    // Toggle logic: If the clicked star is already selected, deselect all after it
    if (rating === index + 1) {
      setRating(0); // Reset to zero
    } else {
      setRating(index + 1); // Set rating to the clicked star index
    }
  };
  const dispatch = useDispatch();
  const {feedback} = useSelector((state: RootState) => state.gas);
  return (
    <SafeAreaView style={modalStyles.modalContainer}>
      <View style={modalStyles.modalBg}></View>
      <View style={modalStyles.modalCont}>
        <Text style={modalStyles.topText}>
          Order completed
        </Text>
        <Text style={inputStyles.label}>
          Rate your experience with the rider
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          {/* Render stars dynamically */}
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
        <View style={inputStyles.inputContainer}>
          <Text style={inputStyles.label}>
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
        <View style={feedbackStyles.btnsWrapper}>
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
