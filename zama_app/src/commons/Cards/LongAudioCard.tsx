import React, {FunctionComponent, useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
// commons
import TouchableOpacity from '@/commons/TouchableOpacity';
import {IoniconsIcons} from '../Icons/RnIcons';
// libs
import FastImage from 'react-native-fast-image';
// hooks
import usePlayerHandle from '@/hooks/usePlayerHandle';
// styles
import {SCREEN_WIDTH} from '@/styles/sizes';
import styled from 'styled-components/native';
import colors from '@/styles/colors';
import useContentAPI from '@/api/content/useContentAPI';

type Size = 'big' | 'middle' | 'small';

interface Props {
  data: any;
  size: Size;
}

const AudioCard: FunctionComponent<Props> = ({data, size}) => {
  const appliedSize = SCREEN_WIDTH * 0.9;
  const imageHeight = appliedSize * 0.5;
  if (!data?.title) {
    return (
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            width: appliedSize,
            height: imageHeight,
            borderRadius: 10,
            backgroundColor: colors.DIVIDER_BORDER_COLOR,
          }}
        />
        <View
          style={{
            width: appliedSize,
            borderRadius: 5,
            height: 15,
            marginTop: 10,
            backgroundColor: colors.DIVIDER_BORDER_COLOR,
          }}
        />
        <View
          style={{
            width: appliedSize,
            borderRadius: 5,
            height: 15,
            marginTop: 3,
            backgroundColor: colors.DIVIDER_BORDER_COLOR,
          }}
        />
      </View>
    );
  }

  const {id, title, time, thumbnail, file1, color, file2, division, creator} =
    data;
  const [onLoadEnd, setOnLoadEnd] = useState(false);
  const {turnOnAudio} = usePlayerHandle();
  const {inBasketAudio} = useContentAPI();

  const handleInBasketAudio = async () => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        turnOnAudio([
          {
            id,
            title,
            duration: time,
            artwork: thumbnail,
            url: file1,
            color,
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
              height: imageHeight,
              borderRadius: 10,
              backgroundColor: colors.DIVIDER_BORDER_COLOR,
              zIndex: 1,
            }}
          />
        )}
        <View style={{position: 'relative'}}>
          <FastImage
            source={{uri: data.thumbnail}}
            style={{
              width: appliedSize,
              height: imageHeight,
              borderRadius: 10,
            }}
            onLoad={() => setOnLoadEnd(true)}
            resizeMode={'cover'}
          />
          <TouchableWithoutFeedback onPress={handleInBasketAudio}>
            <View
              style={{
                position: 'absolute',
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: colors.TRANSPARENT_DARK,
                justifyContent: 'center',
                alignItems: 'center',
                left: 13,
                bottom: 13,
              }}>
              <IoniconsIcons name={'bookmark'} size={20} color={colors.WHITE} />
            </View>
          </TouchableWithoutFeedback>
        </View>
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
  color: ${colors.MIDDLE_GRAY};
  font-size: 14px;
`;

export default AudioCard;
