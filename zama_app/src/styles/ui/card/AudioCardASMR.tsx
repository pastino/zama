import React from 'react';
import {Text, View} from 'react-native';
import AudioCardContainer from '@/commons/Cards/AudioCardContainer';
// tools
import {transformStringTimes} from '@/utils/tools';
import FastImage from 'react-native-fast-image';
// redux
import {State} from '@/redux/rootReducer';
import {useSelector} from 'react-redux';
// styles
import colors from '@/styles/colors';
import {SCREEN_WIDTH} from '@/styles/sizes';
import Icon from '../Icon';
import LikeBtn from '../button/LikeBtn';

const AudioCardASMR = ({data, width = SCREEN_WIDTH * 0.3}) => {
  const {title, time, free, thumbnail} = data;

  const {subscriptions}: any = useSelector(
    (state: State) => state.subscriptionReducer,
  );

  return !thumbnail ? (
    <View
      style={{
        width: width,
        height: width + 40,
        borderRadius: 20,
        backgroundColor: colors.RIGHT_PURPLE,
      }}
    />
  ) : (
    <AudioCardContainer audio={data} isAvailable={true} division={'Story'}>
      <View style={{marginRight: 20}}>
        <View style={{position: 'relative'}}>
          <View
            style={{
              width: width,
              height: width,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              backgroundColor: colors.RIGHT_PURPLE,
            }}>
            <FastImage
              source={{
                uri: 'https://zama-assets.s3.ap-northeast-2.amazonaws.com/images/1643687952587_bird.png',
              }}
              resizeMode={'contain'}
              style={{
                width: width / 2.3,
                height: width / 2.3,
              }}
            />
          </View>
          {subscriptions.length === 0 && !free ? (
            <View style={{position: 'absolute', top: 10, left: 10, zIndex: 1}}>
              <Icon iconName="lock" width={10} height={10} />
            </View>
          ) : null}
          <View style={{position: 'absolute', right: 7, bottom: 7, zIndex: 1}}>
            <LikeBtn audio={data} />
          </View>
        </View>
        <View
          style={{
            width: width,
            paddingVertical: 10,
            paddingHorizontal: 4,
          }}>
          <Text
            style={{fontWeight: '700', fontSize: 14, color: 'white'}}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {title}
          </Text>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 11,
              color: colors.PURPLE,
              marginTop: 4,
            }}>
            {transformStringTimes(time)}
          </Text>
        </View>
      </View>
    </AudioCardContainer>
  );
};

export default AudioCardASMR;
