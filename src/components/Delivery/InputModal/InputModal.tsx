import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import modalStyles from '../../Auth/Modal/ModalStyles';
import Button from '../../Button/Button';
import {scale} from '../../../pages/screens/main/accessories/accessoriesStyles';

interface Props {
  closeModal: () => void;
  value?: string;
}

function DeliveryInputModal({closeModal, value}: Props) {
  return (
    <SafeAreaView style={modalStyles.modalContainer}>
      <View style={modalStyles.modalBg}></View>
      <View style={modalStyles.modalCont}>
        <Text style={modalStyles.topText}>Delivery confirmation code</Text>
        <Text
          style={{fontSize: scale(18), fontWeight: '700', color: '#2C2C2C'}}>
          {value}
        </Text>
        <Button text={'Continue'} action={closeModal} />
      </View>
    </SafeAreaView>
  );
}

export default DeliveryInputModal;
