import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import headerStyles from './HeaderStyles';
import CloseIcon from '../../assets/images/profile/tabler_x.svg';

interface Props {
  goBackAction: () => void;
  title: string;
  isFirstPage: boolean;
}

function Header({goBackAction, title, isFirstPage}: Props) {
  return (
    <View
      style={[
        headerStyles.headerWrapper,
        isFirstPage
          ? headerStyles.singleContent
          : headerStyles.multipleContent,
      ]}>
      {!isFirstPage && (
        <TouchableOpacity onPress={goBackAction}>
          <CloseIcon width={24} height={24} fill="none" />
        </TouchableOpacity>
      )}
      <Text style={headerStyles.title}>{title}</Text>
      <View>
      </View>
    </View>
  );
}

export default Header;
