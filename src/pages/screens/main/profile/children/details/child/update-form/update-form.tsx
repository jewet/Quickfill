import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../../../accessories/accessoriesStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../utils/status-bar-styles/status-bar-styles';
import Header from '../../../../../../../../components/Profile/Header';
import favouritesStyles from '../../../favourites/favouritesStyles';
import Button from '../../../../../../../../components/Button/Button';
import Input from '../../../../../../../../components/Input/AuthInput';
import inputStyles from '../../../../../../../../components/Input/InputStyles';
import SendIcon from '../../../../../../../../assets/images/profile/tabler_send.svg';
import {primaryColor} from '../../../../../../onboarding/splash/splashstyles';
import { height } from '../../../../../home/children/diesel/dieselStyles';

type Props = StackScreenProps<RootStackParamList, 'update-form'>;

function UpdateForm({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'update-form'>>();
  const {profileDetails, target} = route.params;

  const margin_top = 300

  const renderInputs = () => {
    switch (target) {
      case 'name':
        return (
          <>
            <Input
              label="Enter your first name"
              placeholder=""
              value=""
              secured={false}
              directory={null}
              keyboardType="default"
              action={null}
            />
            <Input
              label="Enter your last name"
              placeholder=""
              value=""
              secured={false}
              directory={null}
              keyboardType="default"
              action={null}
            />
          </>
        );
      case 'username':
        return (
          <>
            <Input
              label="Choose username"
              placeholder=""
              value=""
              secured={false}
              directory={null}
              keyboardType="default"
              action={null}
            />
            <Text
              style={[
                inputStyles.label,
                {textAlign: 'left', color: '#DC5513', marginTop: 5},
              ]}>
              This user already exists. Try logging in instead.
            </Text>
          </>
        );
      case 'email':
        return (
          <>
            <Input
              label="Your email address"
              placeholder=""
              value=""
              secured={false}
              directory={null}
              keyboardType="default"
              action={null}
            />
            <Text
              style={[
                inputStyles.label,
                {textAlign: 'left', color: '#DC5513', marginTop: 5},
              ]}>
              This is has not yet been verified, check email to complete
              verification
            </Text>
            <TouchableOpacity
              style={{
                width: '100%',
                borderRadius: 30,
                height: 48,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 15,
                borderWidth: 1,
                borderColor: primaryColor,
                marginTop: 20
              }}>
              <SendIcon width={24} height={24} fill="none" />
              <Text>Resend verification email</Text>
            </TouchableOpacity>
          </>
        );
      case 'birthday':
        return (
          <Input
            label="Month of birth"
            placeholder=""
            value=""
            secured={false}
            directory={null}
            keyboardType="default"
            action={null}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        isFirstPage={false}
        title={`Update ${target}`}
        directory=""
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[favouritesStyles.scrollview, {paddingHorizontal: 16, height: height}]}>
       <View style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 100}}>
       {renderInputs()}
        <View
          style={{
            marginTop: margin_top,
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'flex-end',
          }}>
          <Button text="Save changes" action={() => console.log('pressed')} />
        </View>
       </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UpdateForm;
