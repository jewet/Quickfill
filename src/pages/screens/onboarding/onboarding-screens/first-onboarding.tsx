import React from 'react';
import Onboarding from '../../../../components/Onboarding/Onboarding';
import OnboardingPic from '../../../../assets/images/onboarding/onboarding-img-1.svg';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../utils/nav-routes/types';
import {Dimensions} from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'first-onboarding'>;

function FirstOnboarding({navigation}: Props) {
  const {width, height} = Dimensions.get('window');
  return (
    <Onboarding
      img={
        <OnboardingPic width={width * 0.8} height={height * 0.4} fill="none" />
      }
      boldText="Your Source for All Things Energy"
      lightText="Quickrefil simplifies your access to gas, petroleum, diesel, and electricity. Never run out of power with our easy-to-use app."
      navigateTo={() => navigation.navigate('second-onboarding')}
      bgColor="#FFFFFF"
    />
  );
}

export default FirstOnboarding;
