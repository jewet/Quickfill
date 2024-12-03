import React from 'react';
import {Text, View} from 'react-native';
import authTopStyles from './AuthTopStyles';
import FullLogo from '../../assets/images/auth/full-logo.svg';

interface Props {
  firstText: string;
  secondText: string;
}

function AuthTop({firstText, secondText}: Props) {
  return (
    <View style={authTopStyles.authTopContainer}>
      <FullLogo width={60} height={59} fill="none" />
      <Text style={authTopStyles.firstText}>{firstText}</Text>
      <Text style={authTopStyles.secondText}>{secondText}</Text>
    </View>
  );
}

export default AuthTop;
