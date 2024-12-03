import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import modalStyles from './ModalScreen';
import Button from '../../Button/Button';
import { useNavigation } from '@react-navigation/native';
import SuccessImg from '../../../assets/images/auth/Done Check.svg'

function Modal() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={modalStyles.modalContainer}>
        <View style={modalStyles.modalBg}></View>
      <View style={modalStyles.modalCont}>
        <Text style={modalStyles.topText}>Confirmed</Text>
      <SuccessImg width={100} height={100} fill="none" />
      <Text style={modalStyles.bottomText}>Your password has been successfully changed</Text>
        <Button text="Back to login" action={() => navigation.navigate('login')} />
      </View>
    </SafeAreaView>
  );
}

export default Modal;
