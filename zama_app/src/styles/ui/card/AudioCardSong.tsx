import React from 'react';
import {Text, View} from 'react-native';
import AudioCardContainer from '@/commons/Cards/AudioCardContainer';
// tools
import {transformStringTimes} from '@/utils/tools';
// redux
import {State} from '@/redux/rootReducer';
import {useSelector} from 'react-redux';
// styles
import colors from '@/styles/colors';
import {SCREEN_WIDTH} from '@/styles/sizes';
import Icon from '../Icon';
import LikeBtn from '../button/LikeBtn';

const AudioCardSong = ({data, width = SCREEN_WIDTH * 0.6}) => {
  const {title, time, free, color} = data;

  const BUTTON_SIZE = 52;

  const {subscriptions}: any = useSelector(
    (state: State) => state.subscriptionReducer,
  );

  return (
    <AudioCardContainer audio={data} isAvailable={true} division={'Story'}>
      <View
        style={{
          position: 'relative',

          backgroundColor: colors.RIGHT_PURPLE,
          width,
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {subscriptions.length === 0 && !free ? (
          <View style={{position: 'absolute', top: 10, left: 10, zIndex: 1}}>
            <Icon iconName="lock" width={10} height={10} />
          </View>
        ) : null}
        <View
          style={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            borderRadius: BUTTON_SIZE / 2,
            backgroundColor: color,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon iconName="play-btn" style={{marginLeft: 3}} />
        </View>
        <View style={{marginLeft: 10, width: width * 0.6}}>
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
        <View style={{position: 'absolute', right: 10, bottom: 10, zIndex: 1}}>
          <LikeBtn audio={data} />
        </View>
      </View>
    </AudioCardContainer>
  );
};

export default AudioCardSong;
