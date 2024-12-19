import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../../../../../utils/nav-routes/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import Header from '../../../../../../../../components/Profile/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import accessoriesStyles from '../../../../../accessories/accessoriesStyles';
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  backgroundStyle,
  isDarkMode,
} from '../../../../../../../../utils/status-bar-styles/status-bar-styles';
import favouritesStyles from '../../../../../profile/children/favourites/favouritesStyles';
import Button from '../../../../../../../../components/Button/Button';
import {report_data} from '../../../../../../../../utils/sample-data/orders';
import reportStyles from './reportStyles';
import electricityPaymentStyles from '../../../../../home/children/electricity/children/payment/paymentStyles';
import orderDetailsStyles from '../../../order-details/orderDetailsStyles';
import UploadIcon from '../../../../../../../../assets/images/orders/tabler_cloud-upload.svg';
import DeleteIcon from '../../../../../../../../assets/images/orders/tabler_trash.svg';
import {launchImageLibrary} from 'react-native-image-picker';

type Props = StackScreenProps<RootStackParamList, 'report'>;

function Report({navigation}: Props) {
  const route = useRoute<RouteProp<RootStackParamList, 'report'>>();
  const {orderDetails, target} = route.params;

  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [customReason, setCustomReason] = useState<string>('');

  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const uploadImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) {
          return; // User canceled the picker
        }
        if (response.assets) {
          const selectedAsset = response.assets[0];
          const supportedFormats = ['image/jpeg', 'image/png'];
          if (!supportedFormats.includes(selectedAsset.type || '')) {
            Alert.alert(
              'Invalid format',
              'Only JPEG and PNG formats are supported.',
            );
            return;
          }
          setUploadedImage(selectedAsset.fileName || 'Unknown file');
        } else {
          Alert.alert('Error', 'Unable to select image. Please try again.');
        }
      },
    );
  };

  const removeUploadedImage = () => {
    setUploadedImage(null);
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
        title={`Report ${target}`}
        directory=""
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[favouritesStyles.scrollview, {paddingHorizontal: 16}]}>
        <View style={{width: '100%', paddingBottom: 100}}>
          <Text
            style={[
              electricityPaymentStyles.topText,
              {textAlign: 'left', fontSize: 14},
            ]}>
            We sincerely apologize for the negative experience you encountered
            with one of our riders. Please provide us with the details of what
            went wrong, and we will address the issue promptly.
          </Text>
          <Text
            style={[
              electricityPaymentStyles.topText,
              {textAlign: 'left', fontSize: 14, marginTop: 5},
            ]}>
            Select a reason for reporting
          </Text>
          <View style={reportStyles.reasonCont}>
            {report_data.map((data, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  reportStyles.reasonWrapper,
                  selectedReason === data.reason && reportStyles.reasonSelected,
                ]}
                onPress={() => setSelectedReason(data.reason)}>
                <Text style={reportStyles.reasonText}>{data.reason}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {selectedReason === 'Other' && (
            <TextInput
              style={reportStyles.textArea}
              placeholder="Provide details..."
              value={customReason}
              onChangeText={setCustomReason}
              multiline
            />
          )}
          <View style={{width: '100%', marginTop: 20}}>
            <Text
              style={[
                electricityPaymentStyles.topText,
                {textAlign: 'left', fontSize: 14},
              ]}>
              Upload evidence (optional)
            </Text>
            <TouchableOpacity
              style={[
                orderDetailsStyles.flexContainer,
                reportStyles.uploadWrapper,
              ]}>
              <View style={[orderDetailsStyles.flexContainer, {width: 'auto'}]}>
                <UploadIcon width={24} height={24} />
                <Text
                  style={[
                    electricityPaymentStyles.topText,
                    {textAlign: 'left', fontSize: 12},
                  ]}>
                  Upload image
                </Text>
              </View>
              <TouchableOpacity
                style={reportStyles.upload}
                onPress={uploadImage}>
                <Text style={reportStyles.uploadText}>Upload</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <Text style={reportStyles.supportedText}>
              Supported formats: JPEG, PNG, PDF, Word.
            </Text>
            {uploadedImage && (
              <View style={{width: '100%'}}>
                <Text
                  style={[
                    electricityPaymentStyles.topText,
                    {textAlign: 'left', fontSize: 14, marginTop: 20},
                  ]}>
                  Uploaded
                </Text>
                <TouchableOpacity
                  style={[
                    orderDetailsStyles.flexContainer,
                    reportStyles.uploadWrapper,
                    {borderColor: '#2BBD6F', borderRadius: 30},
                  ]}>
                  <Text
                    style={[
                      electricityPaymentStyles.topText,
                      {textAlign: 'left', fontSize: 12},
                    ]}>
                    {uploadedImage}
                  </Text>
                  <TouchableOpacity onPress={removeUploadedImage}>
                    <DeleteIcon width={12} height={12} />
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={{width: '100%', marginTop: 30}}>
            <Button
              text="Submit"
              action={() => {
                const reportReason =
                  selectedReason === 'Other' ? customReason : selectedReason;
                if (!reportReason) {
                  Alert.alert('Please select or specify a reason.');
                  return;
                }
                navigation.navigate('report-result', {
                  result: 'successful',
                  target: target,
                  orderDetails: orderDetails,
                });
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Report;
