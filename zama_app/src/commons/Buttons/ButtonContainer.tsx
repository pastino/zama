import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import TouchableOpacity from '@/commons/TouchableOpacity';
// styles
import colors from '@/styles/colors';
import {SCREEN_WIDTH} from '@/styles/sizes';

interface Props {
  children?: any;
  styles?: {};
  textStyles?: {};
  text?: string;
  onPress: () => void;
  isCustom?: boolean;
}

const ButtonContainer: FunctionComponent<Props> = ({
  children,
  styles,
  textStyles,
  text,
  isCustom = false,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {isCustom ? (
        children
      ) : (
        <View
          style={[
            styles,
            {
              width: SCREEN_WIDTH * 0.8,
              height: (SCREEN_WIDTH * 0.8) / 5.5,
              backgroundColor: colors.PASTEL,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            },
          ]}>
          <Text style={[textStyles]}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonContainer;
