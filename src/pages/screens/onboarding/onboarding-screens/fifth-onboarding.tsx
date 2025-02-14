import React, { useEffect } from 'react';
import Onboarding from '../../../../components/Onboarding/Onboarding';
import OnboardingPic from '../../../../assets/images/onboarding/onboarding-img-5.svg';
import { RootStackParamList } from '../../../../utils/nav-routes/types';
import { StackScreenProps } from '@react-navigation/stack';
import { Dimensions } from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'first-onboarding'>;

function FifthOnboarding({navigation}:Props) {
  const {width, height} = Dimensions.get('window');
    useEffect(() => {
      const timeout = setTimeout(() => {
        navigation.replace('sixth-onboarding');
      }, 5000);
  
      return () => clearTimeout(timeout);
    }, [navigation]);
  return (
    <Onboarding
      img={<OnboardingPic  width={width * 0.8} 
      height={height * 0.4} fill="none" />}
      boldText="Get It Fast, Delivered with Care"
      lightText="Because your time is valuable, and so is your satisfaction, we’re dedicated to delivering your order quickly and with the utmost care. We believe that convenience shouldn’t mean sacrificing quality—so you can count on us to get it right, every time."
      navigateTo={() => navigation.replace('login')} 
      bgColor='#FFECBE'
      last={false}
      />
  );
}

export default FifthOnboarding;
