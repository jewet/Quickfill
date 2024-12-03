import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import primaryBtnStyles from './ButtonStyles';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  text: string;
  action: () => void;
}

function Button({text, action}: Props) {
  return (
    <TouchableOpacity style={primaryBtnStyles.btnContainer} onPress={action}>
      <LinearGradient
        colors={['#FFB600', '#FFD366']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={primaryBtnStyles.gradientContainer}>
        <Text style={primaryBtnStyles.btnText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default Button;
