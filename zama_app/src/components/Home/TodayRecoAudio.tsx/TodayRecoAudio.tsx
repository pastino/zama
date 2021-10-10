import React from 'react';
import {View, FlatList} from 'react-native';
// commons
import AudioCard from '@/commons/Cards/AudioCard';
// styles
import styled, {css} from 'styled-components/native';

const TodayRecoAudio = ({data}) => {
  const handleRenderItem = ({item, index}) => {
    return (
      <CardContainer index={index} isLastCard={index + 1 === data.length}>
        <AudioCard data={item} size={'middle'} />
      </CardContainer>
    );
  };

  return (
    <View
      style={{
        marginTop: 30,
      }}>
      <Title>오늘의 추천 조합</Title>
      <FlatList
        initialNumToRender={3}
        data={data}
        horizontal
        renderItem={handleRenderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 5}}
      />
    </View>
  );
};

const Title = styled.Text`
  font-weight: 700;
  font-size: 15px;
  padding-left: 20px;
  margin-bottom: 7px;
`;

interface CardContainerProps {
  index: number;
  isLastCard: boolean;
}

const CardContainer = styled.View<CardContainerProps>`
  padding-left: 20px;
  padding-left: ${props => (props.index === 0 ? 20 : 10)}px;
  ${props =>
    props.isLastCard &&
    css`
      padding-right: 20px;
    `}
`;

export default TodayRecoAudio;
