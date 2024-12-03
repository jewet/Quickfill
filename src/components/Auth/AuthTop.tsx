import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import authTopStyles from './AuthTopStyles';
import FullLogo from '../../assets/images/auth/full-logo.svg';
import BackArrow from '../../assets/images/auth/tabler_arrow-right.svg';
import {useNavigation} from '@react-navigation/native';

interface Props {
  firstText: string;
  secondText: string;
  enableBackArrow: boolean;
  hasEmail: boolean;
}

function AuthTop({firstText, secondText, enableBackArrow, hasEmail}: Props) {
  const navigation = useNavigation();
  return (
    <View style={authTopStyles.authTopContainer}>
      {enableBackArrow ? (
        <View style={{width: '100%'}}>
          <View style={authTopStyles.backArrow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow width={26} height={26} fill="none" />
            </TouchableOpacity>
            <FullLogo width={60} height={59} fill="none" />
          </View>
        </View>
      ) : (
        <FullLogo width={60} height={59} fill="none" />
      )}
      <Text style={authTopStyles.firstText}>{firstText}</Text>
      <Text style={authTopStyles.secondText}>{secondText}{" "}
        {hasEmail && (
            <Text style={{color: '#FFC533'}}>johndoe@gmail.com</Text>
        )}
      </Text>
    </View>
  );
}

export default AuthTop;
