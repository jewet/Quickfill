import React from 'react';
import {KeyboardTypeOptions, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import modalStyles from '../../Auth/Modal/ModalStyles';
import Button from '../../Button/Button';
import inputStyles from '../../Input/InputStyles';
import { scale } from '../../../pages/screens/main/accessories/accessoriesStyles';

interface Props {
  closeModal: () => void;
  value?: string;
}

function DeliveryInputModal({
  closeModal,
  value,
}: Props) {
  return (
    <SafeAreaView style={modalStyles.modalContainer}>
      <View style={modalStyles.modalBg}></View>
      <View style={modalStyles.modalCont}>
      {/* <Text style={modalStyles.topText}>{topText}</Text> */}
          <Text style={modalStyles.topText}>Delivery confirmation code</Text>
          <Text style={{fontSize: scale(18), fontWeight: '700', color: '#2C2C2C'}}>{value}</Text>
      {/* <View style={inputStyles.inputContainer}>
          <View style={[inputStyles.input, {alignItems: 'center', justifyContent: 'center'}]}>
            <Text>{value}</Text>
          </View>
          <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            style={inputStyles.input}
            value={value}
            onChangeText={text => {
              onChange(text);
            }}
            maxLength={4}
          />
        </View> */}
        <Button text={'Continue'} action={closeModal} />
      </View>
    </SafeAreaView>
  );
}

export default DeliveryInputModal;
