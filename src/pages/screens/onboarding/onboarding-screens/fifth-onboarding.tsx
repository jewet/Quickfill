import React from 'react';
import Onboarding from '../../../../components/Onboarding/Onboarding';
import OnboardingPic from '../../../../assets/images/onboarding/onboarding-img-5.svg';
import { RootStackParamList } from '../../../../utils/nav-routes/types';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'first-onboarding'>;

function FifthOnboarding({navigation}:Props) {
  return (
    <Onboarding
      img={<OnboardingPic width={340} height={340} fill="none" />}
      boldText="Get It Fast, Delivered with Care"
      lightText="Because your time is valuable, and so is your satisfaction, we’re dedicated to delivering your order quickly and with the utmost care. We believe that convenience shouldn’t mean sacrificing quality—so you can count on us to get it right, every time."
      navigateTo={() => navigation.navigate('sixth-onboarding')} 
      bgColor='#FFECBE'
      />
  );
}

export default FifthOnboarding;
