import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../../../../../../components/Button/Button';
import electricityPaymentStyles from './paymentStyles';
import CloseIcon from '../../../../../../../../assets/images/electricity/close_btn.svg';
import {payment_type} from '../../../../../../../../utils/sample-data/payment';
import electricityProviderStyles from '../electricity-provider/electricityProviderStyles';
import SelectedIcon from '../../../../../../../../assets/images/electricity/selected-bill.svg';
import UnSelectedIcon from '../../../../../../../../assets/images/electricity/unselected-bill.svg';
import fundWalletStyles from '../../../../../profile/children/wallet/children/fund-wallet/fundWalletStyles';

interface Props {
  action: () => void;
  navigateTo: (paymentType: string) => void;
  wallet_bal: number;
}

function ElectricityPayment({action, navigateTo,wallet_bal}: Props) {
  const [isSelected, setIsSelected] = useState<number>(0);
  return (
    <SafeAreaView style={electricityPaymentStyles.modalContainer}>
      <View style={electricityPaymentStyles.modalBg}></View>
      <View style={electricityPaymentStyles.modalCont}>
        <View style={electricityPaymentStyles.paymentTopWrapper}>
          <View style={electricityPaymentStyles.paymentTop}>
            <TouchableOpacity>
              <Text
                style={[electricityPaymentStyles.topText, {color: '#919191'}]}>
                Help
              </Text>
            </TouchableOpacity>
            <Text style={electricityPaymentStyles.topText}>
              Select payment method
            </Text>
            <TouchableOpacity onPress={action}>
              <CloseIcon
                width={80}
                height={80}
                fill="none"
                style={{marginRight: -20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            electricityProviderStyles.electricityDataWrapper,
            {
              backgroundColor: '#F7F6F2',
              borderRadius: 0,
              paddingHorizontal: 20,
            },
          ]}>
          {payment_type.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={electricityProviderStyles.electricityData}
              onPress={() => setIsSelected(index)}>
              <data.icon width={24} height={24} fill="none" />
              <View style={electricityProviderStyles.electricityTextWrapper}>
              {isSelected === index &&
                  data.type.toLowerCase() === 'wallet' ? (
                    <View>
                      <Text
                        style={[
                          electricityProviderStyles.electricityText,
                          {fontWeight: 600},
                        ]}>
                        Pay with {data.type}
                      </Text>
                      <Text style={fundWalletStyles.walbal}>
                        Wallet balance:{' '}
                        <Text style={fundWalletStyles.bold}>
                          ₦
                          {Intl.NumberFormat().format(
                            Number(wallet_bal),
                          ) || 0}
                        </Text>
                      </Text>
                    </View>
                  ) : (
                    <Text
                      style={[
                        electricityProviderStyles.electricityText,
                        {fontWeight: 600},
                      ]}>
                      {data.type.toLowerCase() !== 'delivery'
                        ? 'Pay with '
                        : 'Pay on'}{' '}
                      {data.type}
                    </Text>
                  )}
              </View>
              {isSelected === index ? (
                <SelectedIcon width={24} height={24} fill="none" />
              ) : (
                <UnSelectedIcon width={24} height={24} fill="none" />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <Button
            text="Complete Payment"
            action={() => {
              if (isSelected !== null && payment_type[isSelected]) {
                navigateTo(payment_type[isSelected].type);
              } else {
                console.warn("No payment method selected.");
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ElectricityPayment;
