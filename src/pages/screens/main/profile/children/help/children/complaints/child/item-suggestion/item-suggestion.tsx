import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../../../../../accessories/accessoriesStyles';
import Header from '../../../../../../../../../../components/Profile/Header';
import favouritesStyles from '../../../../../favourites/favouritesStyles';
import complaintsStyles from '../../complaintsStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../../../../../../utils/redux/store/store';
import {setDeliveryNote} from '../../../../../../../../../../utils/redux/slice/profile';
import Button from '../../../../../../../../../../components/Button/Button';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'item-suggestion'>;

function ItemSuggestion({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light,
  };
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
          multiline={true}
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
