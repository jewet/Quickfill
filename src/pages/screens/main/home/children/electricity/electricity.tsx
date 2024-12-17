import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../../../utils/nav-routes/types';
import gasStyles from '../gas/gasStyles';
import CloseIcon from '../../../../../../assets/images/gas/close-icon.svg';
import Online from '../../../../../../assets/images/gas/online.svg';
import Rating from '../../../../../../assets/images/gas/tabler_star-filled.svg';
import Note from '../../../../../../assets/images/gas/note.svg';
import BigGas from '../../../../../../assets/images/gas/big-gas.svg';
import BiggerGas from '../../../../../../assets/images/gas/bigger-gas.svg';
import BiggestGas from '../../../../../../assets/images/gas/biggest-gas.svg';
import homeStyles from '../../home-styles';
import {gas_data} from '../../../../../../utils/sample-data/gas';
import LinearGradient from 'react-native-linear-gradient';
import primaryBtnStyles from '../../../../../../components/Button/ButtonStyles';
import electricityStyles from './electrictyStyles';
import BackArrow from '../../../../../../assets/images/auth/tabler_arrow-right.svg';
import authTopStyles from '../../../../../../components/Auth/AuthTopStyles';
import Input from '../../../../../../components/Input/AuthInput';
import Button from '../../../../../../components/Button/Button';
import Dropdown from '../../../../../../assets/images/electricity/dropdown.svg';
import inputStyles from '../../../../../../components/Input/InputStyles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ElectricityProps} from '../../../../../../utils/sample-data/electricity';
import ElectricityPayment from './children/payment/payment';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'electricity'>;

function Electricity({navigation}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const route = useRoute<RouteProp<RootStackParamList, 'electricity'>>();
  const {electricityProvider}: {electricityProvider?: ElectricityProps} =
    route.params || {};
  const [showModal, setShowModal] = useState<boolean>(false);

  // Handle navigation back to the previous screen
  const handleBack = () => {
    navigation.goBack();
  };

  // Trigger the ElectricityPayment modal
  const handleContinue = () => {
    setShowModal(true);
  };

  // Render the Electricity screen
  return (
    <SafeAreaView
      style={[electricityStyles.electricityContainer, {position: 'relative'}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#FAFAFA'}
      />
      <View style={{width: '100%', display: 'flex'}}>
        <View style={electricityStyles.electricityTop}>
          <TouchableOpacity onPress={handleBack}>
            <BackArrow width={26} height={26} fill="none" />
          </TouchableOpacity>
          <Text style={electricityStyles.topText}>Electricity</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={electricityStyles.scrollview}>
        <View style={inputStyles.inputContainer}>
          <Text style={inputStyles.label}>Electricity provider</Text>
          <View style={inputStyles.securedInputWrapper}>
            <TouchableOpacity
              style={inputStyles.passwordInput}
              onPress={() => navigation.navigate('electricity-provider')}>
              <Text style={inputStyles.securedInput}>
                {electricityProvider
                  ? electricityProvider.electricity
                  : 'Select service provider'}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('electricity-provider')}>
                <Dropdown width={20} height={20} fill="none" />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        <Input
          label="Amount (NGN)"
          placeholder="0.00"
          value={`₦${Intl.NumberFormat().format(2).toString()}`}
          secured={false}
          directory={null}
          keyboardType="numeric"
          action={null}
        />
        <Input
          label="Meter number"
          placeholder="e.g 11223344556"
          value=""
          secured={false}
          directory={null}
          keyboardType="numeric"
          action={null}
        />
        <View style={{width: '100%', marginTop: 20}}>
          <Button text="Continue" action={handleContinue} />
        </View>
      </ScrollView>
      {showModal && (
        <ElectricityPayment
          action={() => setShowModal(false)}
          navigateTo={() => {
            setShowModal(false);
            navigation.navigate('electricity');
          }}
        />
      )}
    </SafeAreaView>
  );
}

export default Electricity;
