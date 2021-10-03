import React, {FunctionComponent, ReactNode} from 'react';
//components
import ImageBasic from '../Images/ImageBasic';
import ButtonComp from './ButtonContainer';
//styles
import styled from 'styled-components/native';
import {LOGIN_BUTTON_WIDTH} from '@/styles/sizes';
import * as mixins from '@styles/mixins';

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
      <ButtonContainer
        style={[mixins.deepShadow, style]}
        backgroundColor={backgroundColor}
        width={BUTTON_WIDTH}>
        <ButtonIconWrapper width={BUTTON_WIDTH}>
          {children ? (
            children
          ) : (
            <ImageBasic path={iconPath} width={ICON_SIZE} height={ICON_SIZE} />
          )}
        </ButtonIconWrapper>
        <ButtonText style={textStyle}>{text}</ButtonText>
      </ButtonContainer>
    </ButtonComp>
  );
};

interface ButtonContainerProps {
  width: number;
  backgroundColor: string;
}

const ButtonContainer = styled.View<ButtonContainerProps>`
  width: ${props => props.width}px;
  height: ${props => props.width * 0.15}px;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => (props.width * 0.15) / 2}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface ButtonIconWrapperProps {
  width: number;
}

const ButtonIconWrapper = styled.View<ButtonIconWrapperProps>`
  position: absolute;
  width: ${props => props.width}px;
  left: 20px;
`;

const ButtonText = styled.Text`
  font-weight: 400;
  font-size: 15px;
`;

export default LoginButton;
