import React, {FunctionComponent, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
// commons
import TouchableOpacity from '@/commons/TouchableOpacity';
import {IoniconsIcons} from '../Icons/RnIcons';
import LoadingImage from './LoadingImage';
// apis
import useContentAPI from '@/api/content/useContentAPI';
// libs
import FastImage from 'react-native-fast-image';
// redux
import {RecoAudiosState} from '@/redux/audio/audioSlice';
// hooks
import usePlayerHandle from '@/hooks/usePlayerHandle';
import useSleepBasket from '@/hooks/useSleepBasket';
// tools
import {transformTimes} from '@/utils/tools';
// styles
import {SCREEN_WIDTH} from '@/styles/sizes';
import {
  BRIGHT_GRAY,
  DIVIDER_BORDER_COLOR,
  PURPLE,
  RIGTH_GRAY,
  TRANSPARENT_DARK,
  WHITE,
} from '@/styles/colors';
import * as mixins from '@/styles/mixins';

interface Props {
  data: RecoAudiosState;
  isGenderVoiceBtn?: boolean;
  isBasketBtn?: boolean;
}

const AudioCard: FunctionComponent<Props> = ({
  data,
  isGenderVoiceBtn = true,
  isBasketBtn = true,
}) => {
  const appliedSize = SCREEN_WIDTH * 0.9;
  const height = appliedSize * 0.6;
  const RODIUS = 10;
  if (!data?.title) {
    return (
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            width: appliedSize,
            height,
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

  const [voiceGender, setVoiceGender] = useState('여');
  const {id, title, time, time2, thumbnail, file1, file2, division, creator} =
    data;
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
            duration: voiceGender === '여' ? time : time2,
            artwork: thumbnail,
            url: voiceGender === '여' ? file1 : file2,
            division,
            artist: 'test',
          },
        ])
      }>
      <View
        style={[
          {
            width: SCREEN_WIDTH * 0.95,
            flexDirection: 'row',
            paddingVertical: 10,
            justifyContent: 'center',
          },
        ]}>
        {!onLoadEnd && (
          <LoadingImage
            style={{
              position: 'absolute',
              width: appliedSize,
              height,
              borderRadius: RODIUS,
              backgroundColor: DIVIDER_BORDER_COLOR,
              zIndex: 1,
            }}
            loadingIconSize={30}
            loadingIconColor={RIGTH_GRAY}
          />
        )}
        <View style={{position: 'relative'}}>
          <FastImage
            source={{uri: data.thumbnail}}
            style={{
              width: appliedSize,
              height,
              borderRadius: RODIUS,
            }}
            onLoad={() => setOnLoadEnd(true)}
            resizeMode={'cover'}
          />
          {isBasketBtn && (
            <TouchableWithoutFeedback onPress={() => handleInBasketAudio()}>
              <View
                style={{
                  position: 'absolute',
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: TRANSPARENT_DARK,
                  justifyContent: 'center',
                  alignItems: 'center',
                  right: 13,
                  top: 13,
                }}>
                <IoniconsIcons
                  name={data?.isLike ? 'bookmark' : 'bookmark-outline'}
                  size={20}
                  color={WHITE}
                />
              </View>
            </TouchableWithoutFeedback>
          )}

          {isGenderVoiceBtn && (
            <View style={{position: 'absolute', left: 13, top: 13}}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <TouchableWithoutFeedback onPress={() => setVoiceGender('여')}>
                  <View
                    style={[
                      mixins.shadow,
                      {
                        width: 40,
                        height: 25,
                        borderRadius: 5,
                        backgroundColor:
                          voiceGender === '여' ? PURPLE : TRANSPARENT_DARK,
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <Text
                      style={{color: 'white', fontWeight: '700', fontSize: 12}}>
                      여
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => setVoiceGender('남')}>
                  <View
                    style={[
                      mixins.shadow,
                      {
                        width: 40,
                        height: 25,
                        borderRadius: 5,
                        marginLeft: 5,
                        backgroundColor:
                          voiceGender === '남' ? PURPLE : TRANSPARENT_DARK,
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <Text
                      style={{color: 'white', fontWeight: '700', fontSize: 12}}>
                      남
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          )}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: appliedSize,
              paddingHorizontal: 10,
              paddingVertical: 15,
              position: 'absolute',
              bottom: 0,
              borderBottomLeftRadius: RODIUS,
              borderBottomRightRadius: RODIUS,
              backgroundColor: TRANSPARENT_DARK,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 17,
                color: 'white',
              }}>
              {data.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: BRIGHT_GRAY,
              }}>
              {transformTimes(data.time)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AudioCard;
