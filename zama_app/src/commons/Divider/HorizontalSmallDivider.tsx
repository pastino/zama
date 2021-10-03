import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  color: string;
}

const HorizontalSmallDivider: FunctionComponent<Props> = ({color}) => {
  return (
    <Container>
      <Text style={{color}}>|</Text>
    </Container>
  );
};

const Container = styled.View`
  margin: 0 10px 0 10px;
`;

export default HorizontalSmallDivider;
