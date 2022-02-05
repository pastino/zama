import React, {FunctionComponent, ReactNode} from 'react';
import {Image, Text, View} from 'react-native';
//components
import ButtonComp from './ButtonContainer';
//styles
import {BUTTON_HEIGHT, LOGIN_BUTTON_WIDTH} from '@/styles/sizes';

interface Props {
  handleClick: () => void;
  text: string;
  backgroundColor: string;
  iconPath?: any;
  children?: ReactNode;
  [key: string]: any;
}

const LoginButton: FunctionComponent<Props> = ({
  handleClick,
  text,
  iconPath,
  backgroundColor,
  children,
  style,
  textStyle,
}) => {
  const BUTTON_WIDTH = LOGIN_BUTTON_WIDTH;
  const ICON_SIZE = 25;

  return (
    <ButtonComp onPress={() => handleClick()} isCustom={true}>
      <View
        style={[
          {
            width: BUTTON_WIDTH - 40,
            height: BUTTON_HEIGHT,
            backgroundColor,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            ...style,
          },
        ]}>
        <Image
          source={iconPath}
          style={{width: ICON_SIZE, height: ICON_SIZE}}
        />
        <Text style={{marginLeft: 10, fontWeight: '500', fontSize: 16}}>
          {text}
        </Text>
      </View>
    </ButtonComp>
  );
};

export default LoginButton;
