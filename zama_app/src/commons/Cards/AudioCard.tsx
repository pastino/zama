import React, {FunctionComponent} from 'react';
import {Image, View} from 'react-native';
// redux
import {RecoAudiosState} from '@/redux/audio/audioSlice';
// styles
import {HORIZON_AUDIO_CARD_WIDTH, VERTI_AUDIO_CARD_WIDTH} from '@/styles/sizes';
import styled from 'styled-components/native';
import {MIDDLE_GRAY} from '@/styles/colors';

type Size = 'big' | 'middle' | 'small';
interface Props {
  data: RecoAudiosState;
  size: Size;
}

const AudioCard: FunctionComponent<Props> = ({data, size}) => {
  const appliedSize =
    size === 'big' ? VERTI_AUDIO_CARD_WIDTH : HORIZON_AUDIO_CARD_WIDTH;
  console.log(size);
  return (
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
