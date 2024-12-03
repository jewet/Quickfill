import React from 'react';
import Onboarding from '../../../../components/Onboarding/Onboarding';
import OnboardingPic from '../../../../assets/images/onboarding/onboarding-img-6.svg';
import { RootStackParamList } from '../../../../utils/nav-routes/types';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'sixth-onboarding'>;

function SixthOnboarding({navigation}:Props) {
  return (
    <Onboarding
      img={<OnboardingPic width={340} height={340} fill="none" />}
      boldText="Track Your Order"
      lightText="Keep track of your order every step of the way. We’ll provide real-time information so you can know exactly when your order will arrive, and if there are any changes along the way, we’ll keep you informed. Your convenience and peace of mind are our priority."
      navigateTo={() => navigation.navigate('login')} 
      bgColor='#FFECBE'
      />
  );
}

export default SixthOnboarding;
