import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../../../accessories/accessoriesStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../utils/status-bar-styles/status-bar-styles';
import Header from '../../../../../../../../components/Profile/Header';
import favouritesStyles from '../../../favourites/favouritesStyles';
import orderDetailsStyles from '../../../../../orders/children/order-details/orderDetailsStyles';
import Button from '../../../../../../../../components/Button/Button';
import Input from '../../../../../../../../components/Input/AuthInput';

type Props = StackScreenProps<RootStackParamList, 'update-form'>;

function UpdateForm({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'update-form'>>();
  const {profileDetails, target} = route.params;

  const margin_top = target === 'name' ? 300 : 400

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
        directory=''
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[favouritesStyles.scrollview, {paddingHorizontal: 16}]}>
        {target === 'name' ? (
          <View style={{width: '100%'}}>
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
          </View>
        ) : target === 'username' ? (
          <View style={{width: '100%'}}>
            <Input
              label="Choose username"
              placeholder=""
              value=""
              secured={false}
              directory={null}
              keyboardType="default"
              action={null}
            />
          </View>
        ) : (
          <View style={{width: '100%'}}>
            <Input
              label="Month of birth"
              placeholder=""
              value=""
              secured={false}
              directory={null}
              keyboardType="default"
              action={null}
            />
          </View>
        )}
        <View
          style={{
            marginTop: margin_top,
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'flex-end',
          }}>
          <Button text="Save changes" action={() => console.log('pressed')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UpdateForm;
