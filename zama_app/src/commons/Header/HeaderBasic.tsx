import React, {FunctionComponent} from 'react';
// commons
import TouchableOpacity from '@/commons/TouchableOpacity';
// assets
import PreviousBtn from '@assets/svg/previous_btn.svg';
// styles
import {HEADER_HEIGHT} from '@/styles/sizes';
import styled from 'styled-components/native';

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
        <TouchableOpacity onPress={goBack}>
          <PreviousBtnWrapper>
            <PreviousBtn width={22} />
          </PreviousBtnWrapper>
        </TouchableOpacity>
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
