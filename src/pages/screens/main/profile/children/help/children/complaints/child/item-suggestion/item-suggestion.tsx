import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../../../../../accessories/accessoriesStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../../../utils/status-bar-styles/status-bar-styles';
import Header from '../../../../../../../../../../components/Profile/Header';
import favouritesStyles from '../../../../../favourites/favouritesStyles';
import complaintsStyles from '../../complaintsStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../../../../utils/redux/store/store';
import {setDeliveryNote} from '../../../../../../../../../../utils/redux/slice/profile';
import Button from '../../../../../../../../../../components/Button/Button';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'item-suggestion'>;

function ItemSuggestion({navigation}: Props) {
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
        title="Item suggestions"
        directory=""
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[favouritesStyles.scrollview, {paddingHorizontal: 16}]}>
        <Text style={complaintsStyles.firstText}>
          Tell us what you would like yo see
        </Text>
        <Text style={complaintsStyles.secondText}>
          Let us know what new services or accessories should be added on our
          platform
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

export default ItemSuggestion;
