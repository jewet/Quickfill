import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import accessoriesStyles from '../../../../../accessories/accessoriesStyles';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../utils/status-bar-styles/status-bar-styles';
import Header from '../../../../../../../../components/Profile/Header';
import transferStyles from '../../../wallet/children/fund-wallet/children/transfer/transferStyles';
import Input from '../../../../../../../../components/Input/AuthInput';
import Button from '../../../../../../../../components/Button/Button';
import Map from '../../../../../../../../assets/images/gas/mapp.svg';
import DropDown from '../../../../../../../../assets/images/gas/tabler_chevron-down.svg';
import changeAddressStyles from './changeAddressStyles';
import inputStyles from '../../../../../../../../components/Input/InputStyles';

type Props = StackScreenProps<RootStackParamList, 'change-address'>;

function ChangeAddress({navigation}: Props) {
  // Retrieve route parameters if necessary
  const route = useRoute<RouteProp<RootStackParamList, 'change-address'>>();

  // State for selected address type dropdown
  const [selectedType, setSelectedType] = useState<string>('Home');
  const [showAddressDropDown, setShowAddressDropDown] = useState(false);

  // Predefined options for address types
  const addressTypeOptions = [{type: 'Home'}, {type: 'Work'}];

  return (
    <SafeAreaView
      style={[accessoriesStyles.accessoriesContainer, {position: 'relative'}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header
        goBackAction={() => navigation.goBack()}
        isFirstPage={false}
        title="Add address details"
        directory="card"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={transferStyles.scrollview}>
        <View style={changeAddressStyles.mapCont}>
          <Map width={342} height={190} />
          <TouchableOpacity style={changeAddressStyles.editCont}>
            <Text style={changeAddressStyles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              width: '35%',
              position: 'relative',
            }}>
            <Text
              style={[inputStyles.label, {textAlign: 'left', marginBottom: 5}]}>
              Address street
            </Text>
            <View style={inputStyles.securedInputWrapper}>
              <TouchableOpacity
                onPress={() => setShowAddressDropDown(true)}
                style={inputStyles.passwordInput}>
                <Text
                  style={inputStyles.securedInput}
                  onPress={() => setShowAddressDropDown(true)}>
                  {selectedType}
                </Text>
                <TouchableOpacity onPress={() => setShowAddressDropDown(true)}>
                  <DropDown width={20} height={20} fill="none" />
                </TouchableOpacity>
              </TouchableOpacity>

              {/* Dropdown menu for selecting address type */}
              {showAddressDropDown && (
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: '#FFFFFF',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    paddingVertical: 10,
                    borderRadius: 10,
                    top: 40,
                    zIndex: 111,
                  }}>
                  {addressTypeOptions.map((data, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{paddingVertical: 10}}
                      onPress={() => {
                        setSelectedType(data.type);
                        setShowAddressDropDown(false);
                      }}>
                      <Text style={inputStyles.securedInput}>{data.type}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>
          <Input
            label="Address street"
            placeholder=""
            value=""
            secured={false}
            directory={null}
            keyboardType="default"
            action={null}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{width: '45%'}}>
              <Input
                label="Apartment number"
                placeholder="E.g. No 12"
                value=""
                secured={false}
                directory={null}
                keyboardType="numeric"
                action={null}
              />
            </View>

            <View style={{width: '45%'}}>
              <Input
                label="Postal code"
                placeholder="E.g. 904101"
                value=""
                secured={false}
                directory={null}
                keyboardType="numeric"
                action={null}
              />
            </View>
          </View>

          <Input
            label="Nearby landmark"
            placeholder="E.g. Opposite ABC supermarkets."
            value=""
            secured={false}
            directory={null}
            keyboardType="default"
            action={null}
          />

          {/* Save button to submit the address */}
          <View style={{width: '100%', marginTop: 20}}>
            <Button text="Save address" action={() => navigation.goBack()} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ChangeAddress;
