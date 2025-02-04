import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import modalStyles from '../Auth/Modal/ModalStyles';
import Button from '../Button/Button';

interface Props{
    topText: string;
    bottomText: string;
    closeModal: ()=>void;
    ok?: boolean;
}

function AlertModal({topText, bottomText, closeModal, ok}:Props) {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={modalStyles.modalContainer}>
        <View style={modalStyles.modalBg}></View>
      <View style={modalStyles.modalCont}>
        <Text style={modalStyles.topText}>{topText}</Text>
      <Text style={modalStyles.bottomText}>{bottomText}</Text>
        <Button text={ok ? 'Ok' : 'Close'} action={closeModal} />
      </View>
    </SafeAreaView>
  );
}

export default AlertModal;
