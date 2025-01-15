import React from 'react';
import Onboarding from '../../../../components/Onboarding/Onboarding';
import OnboardingPic from '../../../../assets/images/onboarding/onboarding-img-4.svg';
import {RootStackParamList} from '../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import {Dimensions} from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'first-onboarding'>;

function FourthOnboarding({navigation}: Props) {
  const {width, height} = Dimensions.get('window');
  return (
    <Onboarding
      img={
        <OnboardingPic width={width * 0.8} height={height * 0.4} fill="none" />
      }
      boldText="Your Go-To Solution for All Your Energy Needs"
      lightText="Quickrefil is here to simplify your life by providing seamless access to various energy sources including gas, petroleum, diesel, and electricity. With just a few taps, ensure you never run out of the energy that powers your home or business."
      navigateTo={() => navigation.replace('fifth-onboarding')}
      bgColor="#FFECBE"
      last={false}
    />
  );
}

export default FourthOnboarding;
