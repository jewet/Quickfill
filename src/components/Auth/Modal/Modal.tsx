import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import modalStyles from './ModalScreen';
import Button from '../../Button/Button';
import { useNavigation } from '@react-navigation/native';
import SuccessImg from '../../../assets/images/auth/Done Check.svg'

interface Props{
    topText: string;
    bottomText: string;
    btnText: string;
    navigateTo: ()=>void;
}

function Modal({topText, bottomText, btnText, navigateTo}:Props) {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={modalStyles.modalContainer}>
        <View style={modalStyles.modalBg}></View>
      <View style={modalStyles.modalCont}>
        <Text style={modalStyles.topText}>{topText}</Text>
      <SuccessImg width={100} height={100} fill="none" />
      <Text style={modalStyles.bottomText}>{bottomText}</Text>
        <Button text={btnText} action={navigateTo} />
      </View>
    </SafeAreaView>
  );
}

export default Modal;
