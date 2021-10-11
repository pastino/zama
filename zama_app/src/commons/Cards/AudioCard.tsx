import React, {FunctionComponent} from 'react';
import {Image, TouchableWithoutFeedback, View} from 'react-native';
// redux
import {RecoAudiosState} from '@/redux/audio/audioSlice';
// styles
import {HORIZON_AUDIO_CARD_WIDTH, VERTI_AUDIO_CARD_WIDTH} from '@/styles/sizes';
import styled from 'styled-components/native';
import {MIDDLE_GRAY} from '@/styles/colors';
import usePlayerHandle from '@/hooks/usePlayerHandle';

type Size = 'big' | 'middle' | 'small';
interface Props {
  data: RecoAudiosState;
  size: Size;
}

const AudioCard: FunctionComponent<Props> = ({data, size}) => {
  const appliedSize =
    size === 'big' ? VERTI_AUDIO_CARD_WIDTH : HORIZON_AUDIO_CARD_WIDTH;

  const {id, title, time, thumbnail, file} = data;
  console.log(data);

  const {handleClickContent} = usePlayerHandle();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        handleClickContent([
          {id, title, duration: time, artwork: thumbnail, url: file},
        ])
      }>
      <View>
        <Image
          source={{uri: data.thumbnail}}
          style={{
            width: appliedSize,
            height: appliedSize,
            borderRadius: 10,
          }}
        />
        <Title>{data.title}</Title>
        <Creator>{data.creator.name}</Creator>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Title = styled.Text`
  margin-top: 10px;
  font-weight: 600;
  font-size: 15px;
`;

const Creator = styled.Text`
  margin-top: 3px;
  color: ${MIDDLE_GRAY};
  font-size: 14px;
`;

export default AudioCard;
