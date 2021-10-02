import React, {FunctionComponent, ReactNode} from 'react';
//components
import ImageBasic from '../Images/ImageBasic';
import ButtonComp from './ButtonContainer';
//styles
import styled from 'styled-components/native';
import {SCREEN_WIDTH} from '@/styles/sizes';
import * as mixins from '@styles/mixins';

interface Props {
  handleClick: () => void;
  text: string;
  backgroundColor: string;
  iconPath?: any;
  children?: ReactNode;
}

const LoginButton: FunctionComponent<Props> = ({
  handleClick,
  text,
  iconPath,
  backgroundColor,
  children,
}) => {
  const BUTTON_WIDTH = SCREEN_WIDTH * 0.9;
  const ICON_SIZE = 25;

  return (
    <ButtonComp onPress={handleClick} isCustom={true}>
      <ButtonContainer
        style={[mixins.deepShadow]}
        backgroundColor={backgroundColor}
        width={BUTTON_WIDTH}>
        <ButtonIconWrapper width={BUTTON_WIDTH}>
          {children ? (
            children
          ) : (
            <ImageBasic path={iconPath} width={ICON_SIZE} height={ICON_SIZE} />
          )}
        </ButtonIconWrapper>
        <ButtonText>{text}</ButtonText>
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
  height: ${props => props.width * 0.16}px;
  background-color: ${props => props.backgroundColor};
  border-radius: 10px;
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
  font-weight: 700;
  font-size: 17px;
`;

export default LoginButton;
