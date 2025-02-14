import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import headerStyles from './HeaderStyles';
import CloseIcon from '../../assets/images/profile/tabler_x.svg';
import GoBack from '../../assets/images/payment/tabler_arrow-right.svg';
import electricityPaymentStyles from '../../pages/screens/main/home/children/electricity/children/payment/paymentStyles';

interface Props {
  goBackAction?: () => void;
  title: string;
  isFirstPage: boolean;
  directory: string;
}



function Header({goBackAction, title, isFirstPage, directory}: Props) {
  console.log('dir: ', directory);
  return (
    <View
      style={[
        headerStyles.headerWrapper,
        isFirstPage ? headerStyles.singleContent : headerStyles.multipleContent,
      ]}>
        {
          isFirstPage === true  || title.toLowerCase() === 'account deleted successfully' ? (
            <View></View>
          ):
          !isFirstPage && directory.toLowerCase() === 'payment' || 'transfer' || 'card' ?(
            <TouchableOpacity onPress={goBackAction}>
          <GoBack width={24} height={24} fill="none" />
        </TouchableOpacity>
          )
          :
          (
            <TouchableOpacity onPress={goBackAction}>
            <CloseIcon width={24} height={24} fill="none" />
          </TouchableOpacity>
          )
        }
      {/* {!isFirstPage && directory.toLowerCase() === 'payment' || 'transfer' || 'card' ? (
        <TouchableOpacity onPress={goBackAction}>
          <GoBack width={24} height={24} fill="none" />
        </TouchableOpacity>
      ) : (
        !isFirstPage && (
          <TouchableOpacity onPress={goBackAction}>
            <CloseIcon width={24} height={24} fill="none" />
          </TouchableOpacity>
        )
      )} */}
      <Text style={headerStyles.title}>{title}</Text>
      {directory.toLowerCase() !== 'transfer' || 'card' ? (
        <View></View>
        
      ) : (
        <TouchableOpacity>
          <Text style={[electricityPaymentStyles.topText, {color: '#919191'}]}>
             Help
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Header;
