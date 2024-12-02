import React from 'react';
import Onboarding from '../../../../components/Onboarding/Onboarding';
import OnboardingPic from '../../../../assets/images/onboarding/onboarding-img-4.svg';
import { RootStackParamList } from '../../../../utils/nav-routes/types';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'first-onboarding'>;

function FourthOnboarding({navigation}:Props) {
  return (
    <Onboarding
      img={<OnboardingPic width={340} height={340} fill="none" />}
      boldText="Your Go-To Solution for All Your Energy Needs"
      lightText="Quickrefil is here to simplify your life by providing seamless access to various energy sources including gas, petroleum, diesel, and electricity. With just a few taps, ensure you never run out of the energy that powers your home or business."
      navigateTo={() => navigation.navigate('fifth-onboarding')} 
      bgColor='#FFECBE'
      />
  );
}

export default FourthOnboarding;
