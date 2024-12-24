import React, {useState} from 'react';
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
              This has not yet been verified, check email to complete
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
                marginTop: 20,
              }}>
              <SendIcon width={24} height={24} fill="none" />
              <Text>Resend verification email</Text>
            </TouchableOpacity>
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
                          <Text
                            style={[inputStyles.label]}>
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
        title={`Update ${target}`}
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
