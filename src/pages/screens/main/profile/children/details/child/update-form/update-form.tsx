import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
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
import {height} from '../../../../../home/children/diesel/dieselStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDown from '../../../../../../../../assets/images/gas/tabler_chevron-down.svg';
import historyDetailsStyles from '../../../../../home/children/electricity/children/electricity-history/history-details/historyDetailsStyles';
import authTopStyles from '../../../../../../../../components/Auth/AuthTopStyles';

// Type definition for the navigation prop passed to the component
type Props = StackScreenProps<RootStackParamList, 'update-form'>;

function UpdateForm({navigation}: Props) {
  // Retrieve route parameters, specifically `profileDetails` and `target`
  const route = useRoute<RouteProp<RootStackParamList, 'update-form'>>();
  const {profileDetails, target} = route.params;

  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showDayPicker, setShowDayPicker] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  // Format countdown as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0'); // Ensures two digits (e.g., "01")
    const secs = (seconds % 60).toString().padStart(2, '0'); // Ensures two digits (e.g., "09")
    return `${mins}:${secs}`;
  };

  // Start countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsResendEnabled(true);
    }
  }, [countdown]);

  // Resend OTP
  const handleResendOTP = () => {
    if (isResendEnabled) {
      setCountdown(60);
      setIsResendEnabled(false);
      // Call function to resend OTP (API request or mock logic)
      console.log('Resending OTP...');
    }
  };

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const getDaysInMonth = (month: string | null): string[] => {
    if (!month) return [];
    const monthIndex = months.indexOf(month);
    const year = new Date().getFullYear();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    return Array.from({length: daysInMonth}, (_, i) => (i + 1).toString());
  };

  const days = getDaysInMonth(selectedMonth);

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    setSelectedDay(null); // Reset selected day when month changes
    setShowMonthPicker(false);
  };

  const handleDaySelect = (day: string) => {
    if (selectedMonth) {
      setSelectedDay(day);
      setShowDayPicker(false);
    }
  };

  // Margin for the save button positioning
  const margin_top = 300;

  // Function to render different input fields based on the `target` type
  const renderInputs = () => {
    switch (target) {
      case 'name':
        return (
          <>
            <Input
              label="Enter your first name"
              placeholder=""
              value={firstname}
              secured={false}
              directory={null}
              keyboardType="default"
              action={null}
              validate="firstname"
              onChange={text => setFirstname(text)}
            />
            <Input
              label="Enter your last name"
              placeholder=""
              value={lastname}
              secured={false}
              directory={null}
              keyboardType="default"
              action={null}
              validate="lastname"
              onChange={text => setLastname(text)}
            />
          </>
        );
      case 'username':
        return (
          <>
            <Input
              label="Enter your username"
              placeholder=""
              value={lastname}
              secured={false}
              directory={null}
              keyboardType="default"
              action={null}
              validate="username"
              onChange={text => setUsername(text)}
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
              label="Email address"
              placeholder="E.g. johndoe@gmail.com"
              value={email}
              secured={false}
              directory={null}
              keyboardType="default"
              action={() => console.log('Action triggered')}
              validate="email"
              onChange={text => setEmail(text)}
            />
            <Text
              style={[
                inputStyles.label,
                {textAlign: 'left', color: '#DC5513', marginTop: 5},
              ]}>
              This has not yet been verified, check email to complete
              verification
            </Text>
            <TouchableOpacity
              style={[
                historyDetailsStyles.transparentBtn,
                {backgroundColor: '#FFFFFF'},
              ]}>
              <SendIcon width={24} height={24} fill="none" />
              <Text style={historyDetailsStyles.btn}>
                Resend verification email
              </Text>
            </TouchableOpacity>
          </>
        );
      case 'phone number':
        return (
          <>
            <Input
              label="Phone number"
              placeholder=""
              value={phoneNumber}
              secured={false}
              directory={null}
              keyboardType="default"
              action={() => console.log('Action triggered')}
              validate="phone"
              onChange={text => setPhoneNumber(text)}
            />
            <Text
              style={[
                inputStyles.label,
                {textAlign: 'left', color: '#DC5513', marginTop: 5},
              ]}>
              This is has not yet been verified, check your SMS message to
              complete verification
            </Text>
            <TouchableOpacity
              style={[
                historyDetailsStyles.transparentBtn,
                {backgroundColor: '#FFFFFF'},
              ]}>
              <SendIcon width={24} height={24} fill="none" />
              <Text style={historyDetailsStyles.btn}>
                Get verification code
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10%',
              }}>
              <Text style={authTopStyles.secondText}>
                Did not receive any code?{' '}
              </Text>
              {isResendEnabled ? (
                <TouchableOpacity onPress={handleResendOTP}>
                  <Text style={{color: primaryColor}}>Resend OTP</Text>
                </TouchableOpacity>
              ) : (
                <Text style={{color: primaryColor}}>
                  Resend in {formatTime(countdown)}
                </Text>
              )}
            </View>
          </>
        );
      case 'birthday':
        return (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: '5%',
            }}>
            <View style={{width: '45%'}}>
              <Text style={[inputStyles.label, {textAlign: 'left'}]}>
                Month of birth
              </Text>
              <View
                style={[
                  inputStyles.securedInputWrapper,
                  {width: '100%', marginTop: 10},
                ]}>
                <TouchableOpacity
                  onPress={() => setShowMonthPicker(true)}
                  style={inputStyles.passwordInput}>
                  <Text
                    style={inputStyles.securedInput}
                    onPress={() => setShowMonthPicker(true)}>
                    {selectedMonth || 'Select a month'}
                  </Text>
                  <TouchableOpacity onPress={() => setShowMonthPicker(true)}>
                    <DropDown width={20} height={20} fill="none" />
                  </TouchableOpacity>
                </TouchableOpacity>

                {/* Dropdown menu for selecting month */}
                {showMonthPicker && (
                  <Modal transparent={true} animationType="slide">
                    <View style={styles.modalOverlay}>
                      <View style={styles.pickerContainer}>
                        <FlatList
                          data={months}
                          keyExtractor={item => item}
                          renderItem={({item}) => (
                            <TouchableOpacity
                              style={styles.monthItem}
                              onPress={() => handleMonthSelect(item)}>
                              <Text style={styles.monthText}>{item}</Text>
                            </TouchableOpacity>
                          )}
                        />
                        <TouchableOpacity
                          onPress={() => setShowMonthPicker(false)}>
                          <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                )}
              </View>
            </View>
            <View style={{width: '40%'}}>
              <Text style={[inputStyles.label, {textAlign: 'left'}]}>Day</Text>
              <View
                style={[
                  inputStyles.securedInputWrapper,
                  {width: '100%', marginTop: 10},
                ]}>
                <TouchableOpacity
                  onPress={() => selectedMonth && setShowDayPicker(true)}
                  style={[
                    inputStyles.passwordInput,
                    {opacity: selectedMonth ? 1 : 0.5},
                  ]}
                  disabled={!selectedMonth}>
                  <Text
                    style={inputStyles.securedInput}
                    onPress={() => setShowDayPicker(true)}>
                    {selectedDay || 'Select a day'}
                  </Text>
                </TouchableOpacity>

                {/* Dropdown menu for selecting month */}
                {showDayPicker && (
                  <Modal transparent={true} animationType="slide">
                    <View style={styles.modalOverlay}>
                      <View style={styles.pickerContainer}>
                        <FlatList
                          data={days}
                          keyExtractor={item => item}
                          renderItem={({item}) => (
                            <TouchableOpacity
                              style={styles.monthItem}
                              onPress={() => handleDaySelect(item)}>
                              <Text style={styles.monthText}>{item}</Text>
                            </TouchableOpacity>
                          )}
                        />
                        {!selectedMonth && (
                          <Text style={[inputStyles.label]}>
                            Pick a month first
                          </Text>
                        )}
                        <TouchableOpacity
                          onPress={() => setShowDayPicker(false)}>
                          <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                )}
              </View>
            </View>
          </View>
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
        title={`${target === 'phone number' ? 'Verify' : 'Update'} ${target}`}
        directory=""
      />
          <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          favouritesStyles.scrollview,
          {paddingHorizontal: 16, height: height},
        ]}>
        <View
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 100,
          }}>
          {renderInputs()}
          {/* Render the appropriate inputs based on the target */}
          <View
            style={{
              marginTop: margin_top,
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            <Button text="Save changes" action={() => navigation.goBack()} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label: {fontSize: 16, marginBottom: 10},
  dateWrapper: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  dateText: {fontSize: 16},
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
  monthItem: {padding: 15, borderBottomWidth: 1, borderBottomColor: '#ddd'},
  monthText: {fontSize: 16},
  closeButton: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: primaryColor,
  },
});

export default UpdateForm;
