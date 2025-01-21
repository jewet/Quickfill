import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../../../../../../components/Profile/Header';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../utils/status-bar-styles/status-bar-styles';
import accessoriesStyles from '../../../../../accessories/accessoriesStyles';
import favouritesStyles from '../../../favourites/favouritesStyles';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import {StackScreenProps} from '@react-navigation/stack';
import complaintsStyles from './complaintsStyles';
import Button from '../../../../../../../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../../utils/redux/store/store';
import {setDeliveryNote} from '../../../../../../../../utils/redux/slice/profile';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'complaints'>;


function Complaints({navigation}: Props) {
  const dispatch = useDispatch();
  const {deliveryNote} = useSelector((state: RootState) => state.profile);
  return (
    <SafeAreaView style={accessoriesStyles.accessoriesContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        isFirstPage={false}
        title="Complaints & feedback"
        directory=""
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[favouritesStyles.scrollview, {paddingHorizontal: 16}]}>
        <Text style={complaintsStyles.firstText}>
          Let us know how we can improve
        </Text>
        <Text style={complaintsStyles.secondText}>
          There is always room for{' '}
          <Text style={complaintsStyles.greenText}>improvement!</Text>
        </Text>
        <Text style={complaintsStyles.secondText}>
          Tell us about your experience so far or how we can make Mohgas better
          for you.
        </Text>
        <TextInput
          placeholder="Leave a comment..."
          style={complaintsStyles.textArea}
          value={deliveryNote}
          onChange={event => dispatch(setDeliveryNote(event.nativeEvent.text))}
        />
        {deliveryNote.length <= 0 ? (
          <TouchableOpacity style={complaintsStyles.btn}>
            <Text style={complaintsStyles.btnText} disabled={true}>
              Send
            </Text>
          </TouchableOpacity>
        ) : (
          <Button
            text="Send"
            action={() => navigation.navigate('item-suggestion')}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Complaints;
