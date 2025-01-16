import React from 'react';
import Onboarding from '../../../../components/Onboarding/Onboarding';
import OnboardingPic from '../../../../assets/images/onboarding/onboarding-img-2.svg';
import {RootStackParamList} from '../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import {Dimensions} from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'second-onboarding'>;

function SecondOnboarding({navigation}: Props) {
  const {width, height} = Dimensions.get('window');
  return (
    <Onboarding
      img={
        <OnboardingPic width={width * 0.8} height={height * 0.4} fill="none" />
      }
      boldText="Your Source for All Things Energy"
      lightText="Quickrefil revolutionizes the way you access gas, petroleum, diesel, and electricity. With our user-friendly app, ensure a continuous supply of energy and experience unparalleled convenience. Never face an outage again."
      navigateTo={() => navigation.replace('fifth-onboarding')}
      bgColor="#FFECBE"
      last={false}
    />
  );
}

export default SecondOnboarding;
