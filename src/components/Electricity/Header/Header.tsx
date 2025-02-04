import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import electricityStyles from '../../../pages/screens/main/home/children/electricity/electrictyStyles';
import BackArrow from '../../../assets/images/auth/tabler_arrow-right.svg';
import BlackHistoryIcon from '../../../assets/images/electricity/tabler_history.svg';
import YellowHistoryIcon from '../../../assets/images/electricity/yellow_tabler_history.svg';

interface Props {
  handleGoBack: () => void;
  title: string;
  historyIconColor?: string;
  historyNav?: () => void;
}

function Header({handleGoBack, title, historyIconColor, historyNav}: Props) {
  return (
    <View style={{width: '100%', display: 'flex'}}>
      <View style={electricityStyles.electricityTop}>
        <TouchableOpacity onPress={handleGoBack}>
          <BackArrow width={26} height={26} fill="none" />
        </TouchableOpacity>
        <Text style={electricityStyles.topText}>{title}</Text>
        {historyIconColor?.toLowerCase() === 'black' ? (
          <TouchableOpacity onPress={historyNav}>
            <BlackHistoryIcon width={24} height={24} fill="none" />
          </TouchableOpacity>
        ) : historyIconColor?.toLowerCase() === 'yellow' ? (
          <TouchableOpacity onPress={historyNav}>
            <YellowHistoryIcon width={24} height={24} fill="none" />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
}

export default Header;
