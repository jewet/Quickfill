import React from 'react';
import Onboarding from '../../../../components/Onboarding/Onboarding';
import OnboardingPic from '../../../../assets/images/onboarding/onboarding-img-3.svg';
import { RootStackParamList } from '../../../../utils/nav-routes/types';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'third-onboarding'>;

function ThirdOnboarding({navigation}:Props) {
  return (
    <Onboarding
      img={<OnboardingPic width={340} height={340} fill="none" />}
      boldText="Your Source for All Things Energy"
      lightText="Quickrefil revolutionizes the way you access gas, petroleum, diesel, and electricity. With our user-friendly app, ensure a continuous supply of energy and experience unparalleled convenience. Never face an outage again."
      navigateTo={() => navigation.navigate('fourth-onboarding')} 
      bgColor='#F7F6F2'
      />
  );
}

export default ThirdOnboarding;
