import React, {FunctionComponent, useState} from 'react';
import {View} from 'react-native';
// commons
import TouchableOpacity from '@/commons/TouchableOpacity';
// libs
import FastImage from 'react-native-fast-image';
// redux
import {RecoAudiosState} from '@/redux/audio/audioSlice';
// styles
import {HORIZON_AUDIO_CARD_WIDTH, VERTI_AUDIO_CARD_WIDTH} from '@/styles/sizes';
import styled from 'styled-components/native';
import {DIVIDER_BORDER_COLOR, MIDDLE_GRAY, RIGTH_GRAY} from '@/styles/colors';
import usePlayerHandle from '@/hooks/usePlayerHandle';

type Size = 'big' | 'middle' | 'small';
interface Props {
  data: RecoAudiosState;
  size: Size;
}

const AudioCard: FunctionComponent<Props> = ({data, size}) => {
  const appliedSize =
    size === 'big' ? VERTI_AUDIO_CARD_WIDTH : HORIZON_AUDIO_CARD_WIDTH;

  if (!data?.title) {
    return (
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            width: appliedSize,
            height: appliedSize,
            borderRadius: 10,
            backgroundColor: DIVIDER_BORDER_COLOR,
          }}
        />
        <View
          style={{
            width: appliedSize,
            borderRadius: 5,
            height: 15,
            marginTop: 10,
            backgroundColor: DIVIDER_BORDER_COLOR,
          }}
        />

        <View
          style={{
            width: appliedSize,
            borderRadius: 5,
            height: 15,
            marginTop: 3,
            backgroundColor: DIVIDER_BORDER_COLOR,
          }}
        />
      </View>
    );
  }

  const {id, title, time, thumbnail, file, division, creator} = data;
  const [onLoadEnd, setOnLoadEnd] = useState(false);
  const {handleClickContent} = usePlayerHandle();

  return (
    <TouchableOpacity
      onPress={() =>
        handleClickContent([
          {
            id,
            title,
            duration: time,
            artwork: thumbnail,
            url: file,
            division,
            artist: 'test',
          },
        ])
      }>
      <View>
        {!onLoadEnd && (
          <View
            style={{
              position: 'absolute',
              width: appliedSize,
              height: appliedSize,
              borderRadius: 10,
              backgroundColor: DIVIDER_BORDER_COLOR,
              zIndex: 1,
            }}
          />
        )}

        <FastImage
          source={{uri: data.thumbnail}}
          style={{
            width: appliedSize,
            height: appliedSize,
            borderRadius: 10,
          }}
          onLoad={() => setOnLoadEnd(true)}
          resizeMode={'cover'}
        />
        <Title>{data.title}</Title>
        <Creator>{data.creator.name}</Creator>
      </View>
    </TouchableOpacity>
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
