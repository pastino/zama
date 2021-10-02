import {PASTEL} from '@/styles/colors';
import {SCREEN_WIDTH} from '@/styles/sizes';
import React, {FunctionComponent} from 'react';
import {Text, Touchable, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

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
    <TouchableWithoutFeedback onPress={onPress}>
      {isCustom ? (
        children
      ) : (
        <View
          style={[
            styles,
            {
              width: SCREEN_WIDTH * 0.8,
              height: (SCREEN_WIDTH * 0.8) / 5.5,
              backgroundColor: PASTEL,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            },
          ]}>
          <Text style={[textStyles]}>{text}</Text>
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};

export default ButtonContainer;
