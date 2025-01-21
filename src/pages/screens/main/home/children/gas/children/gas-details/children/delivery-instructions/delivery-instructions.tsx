import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../../../../../../../utils/nav-routes/types';
import {profile_data} from '../../../../../../../../../../utils/sample-data/profile';
import accessoriesStyles from '../../../../../../../accessories/accessoriesStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../../../utils/status-bar-styles/status-bar-styles';
import favouritesStyles from '../../../../../../../profile/children/favourites/favouritesStyles';
import Button from '../../../../../../../../../../components/Button/Button';
import GoBack from '../../../../../../../../../../assets/images/payment/tabler_arrow-right.svg';
import headerStyles from '../../../../../../../../../../components/Profile/HeaderStyles';
import complaintsStyles from '../../../../../../../profile/children/help/children/complaints/complaintsStyles';
import inputStyles from '../../../../../../../../../../components/Input/InputStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../../../../utils/redux/store/store';
import {setDeliveryNote} from '../../../../../../../../../../utils/redux/slice/gas';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'delivery-instructions'>;

function DeliveryInstructions({navigation}: Props) {
  const route =
    useRoute<RouteProp<RootStackParamList, 'delivery-instructions'>>();
  const dispatch = useDispatch();
  const {deliveryNote} = useSelector((state: RootState) => state.gas);

  const addressDetails = profile_data
    .filter(item => item.profile.type === 'Saved Addresses')
    .map(item => item.profile.location);
  const personalDetails = profile_data
    .find(item => item.profile.type === 'My Details')
    ?.profile.details?.find(
      (detail: {title?: string; phone_number?: string}) =>
        detail.title === 'Phone number',
    );

  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={[
          headerStyles.headerWrapper,
          headerStyles.multipleContent,
          {alignItems: 'center'},
        ]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <GoBack width={24} height={24} fill="none" />
        </TouchableOpacity>
        <View>
          <Text style={headerStyles.title}>Delivery instructions</Text>
        </View>

        <View></View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[favouritesStyles.scrollview, {paddingHorizontal: 16}]}>
        <Text style={inputStyles.label}>Add delivery note</Text>
        <TextInput
          placeholder="Type message here.."
          style={[complaintsStyles.textArea, {marginTop: 10}]}
          value={deliveryNote}
          onChange={event => dispatch(setDeliveryNote(event.nativeEvent.text))}
        />
        {deliveryNote.length <= 0 ? (
          <TouchableOpacity style={complaintsStyles.btn}>
            <Text style={complaintsStyles.btnText} disabled={true}>
              Submit
            </Text>
          </TouchableOpacity>
        ) : (
          <Button text="Submit" action={() => navigation.goBack()} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DeliveryInstructions;
