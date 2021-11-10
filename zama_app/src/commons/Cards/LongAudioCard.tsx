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
import {
  DIVIDER_BORDER_COLOR,
  MIDDLE_GRAY,
  TRANSPARENT_DARK,
  WHITE,
} from '@/styles/colors';
import useContentAPI from '@/api/content/useContentAPI';
import useSleepBasket from '@/hooks/useSleepBasket';

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

  const {id, title, time, thumbnail, file1, file2, division, creator} = data;
  const [onLoadEnd, setOnLoadEnd] = useState(false);
  const {handleClickContent} = usePlayerHandle();
  const {inBasketAudio} = useContentAPI();
  const {sleepBasketClick} = useSleepBasket();

  const handleInBasketAudio = async () => {
    try {
      sleepBasketClick(id, division);
      await inBasketAudio(id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        handleClickContent([
          {
            id: 0,
            title,
            duration: time,
            artwork: thumbnail,
            url: file1,
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
              backgroundColor: DIVIDER_BORDER_COLOR,
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
                backgroundColor: TRANSPARENT_DARK,
                justifyContent: 'center',
                alignItems: 'center',
                left: 13,
                bottom: 13,
              }}>
              <IoniconsIcons name={'bookmark'} size={20} color={WHITE} />
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
  color: ${MIDDLE_GRAY};
  font-size: 14px;
`;

export default AudioCard;
