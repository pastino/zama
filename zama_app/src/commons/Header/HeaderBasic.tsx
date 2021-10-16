import React, {FunctionComponent} from 'react';
import PreviousBtn from '@assets/svg/previous_btn.svg';
// styles
import {HEADER_HEIGHT} from '@/styles/sizes';
import styled from 'styled-components/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

interface Props {
  previousBtn?: boolean;
  goBack?: () => void;
  title?: string;
}

const HeaderBasic: FunctionComponent<Props> = ({
  previousBtn = false,
  goBack,
  title,
}) => {
  return (
    <Container>
      {previousBtn && (
        <TouchableWithoutFeedback onPress={goBack}>
          <PreviousBtnWrapper>
            <PreviousBtn width={22} />
          </PreviousBtnWrapper>
        </TouchableWithoutFeedback>
      )}
      {title && <Title>{title}</Title>}
    </Container>
  );
};

const Container = styled.View`
  height: ${HEADER_HEIGHT}px;
  flex-direction: row;
  align-items: center;
`;

const PreviousBtnWrapper = styled.View`
  margin-left: 20px;
`;

const Title = styled.Text`
  margin-left: 20px;
  font-weight: 500;
  font-size: 17px;
`;

export default HeaderBasic;
