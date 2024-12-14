import React from 'react';
import Onboarding from '../../../../components/Onboarding/Onboarding';
import OnboardingPic from '../../../../assets/images/onboarding/onboarding-img-6.svg';
import {RootStackParamList} from '../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import {Dimensions} from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'sixth-onboarding'>;

function SixthOnboarding({navigation}: Props) {
  const {width, height} = Dimensions.get('window');
  return (
    <Onboarding
      img={
        <OnboardingPic width={width * 0.8} height={height * 0.4} fill="none" />
      }
      boldText="Track Your Order"
      lightText="Keep track of your order every step of the way. We’ll provide real-time information so you can know exactly when your order will arrive, and if there are any changes along the way, we’ll keep you informed. Your convenience and peace of mind are our priority."
      navigateTo={() => navigation.navigate('login')}
      bgColor="#FFECBE"
    />
  );
}

export default SixthOnboarding;
