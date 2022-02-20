import React from 'react';
import {Text, View} from 'react-native';
import AudioCardContainer from '@/commons/Cards/AudioCardContainer';
import ImageBasic from '@/commons/Images/ImageBasic';
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

const StoryAudioCard = ({data, width = SCREEN_WIDTH * 0.32}) => {
  const {id, title, thumbnail, time, isLike, free} = data;
  const IMAGE_WIDTH = width;
  const IMAGE_HEIGHT = (IMAGE_WIDTH * 116) / 137;

  const {subscriptions}: any = useSelector(
    (state: State) => state.subscriptionReducer,
  );

  return !thumbnail ? (
    <View
      style={{
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT + 60,
        borderRadius: 20,
        backgroundColor: colors.RIGHT_PURPLE,
      }}
    />
  ) : (
    <AudioCardContainer audio={data} isAvailable={true} division={'Story'}>
      <View style={{}}>
        <View style={{position: 'relative'}}>
          <ImageBasic
            path={thumbnail}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            styles={{
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
          />
          {subscriptions.length === 0 && !free && (
            <View
              style={{
                position: 'absolute',
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                backgroundColor: 'rgba(0,0,0,0.2)',
              }}
            />
          )}
          <View style={{position: 'absolute', right: 7, bottom: 7, zIndex: 1}}>
            <LikeBtn audio={data} />
          </View>
          {subscriptions.length === 0 && !free ? (
            <View style={{position: 'absolute', top: 10, left: 10, zIndex: 1}}>
              <Icon iconName="lock" width={10} height={10} />
            </View>
          ) : null}
        </View>
        <View
          style={{
            width: IMAGE_WIDTH,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            backgroundColor: colors.RIGHT_PURPLE,
            paddingVertical: 10,
            paddingHorizontal: 12,
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

export default StoryAudioCard;
