import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import AudioCardContainer from '@/commons/Cards/AudioCardContainer';
import ImageBasic from '@/commons/Images/ImageBasic';
// redux
import {State} from '@/redux/rootReducer';
import {useSelector} from 'react-redux';
// styles
import {SCREEN_WIDTH} from '@/styles/sizes';
import Icon from '../Icon';
import LikeBtn from '../button/LikeBtn';
import colors from '@/styles/colors';

const AudioCardMyLike = ({data, width = SCREEN_WIDTH * 0.32}) => {
  const {title, thumbnail, division, color, free} = data;
  const IMAGE_WIDTH = width;

  const {subscriptions}: any = useSelector(
    (state: State) => state.subscriptionReducer,
  );

  const Container = ({children}) => {
    return (
      <AudioCardContainer audio={data} isAvailable={true} division={'Story'}>
        <View style={{position: 'relative', width: IMAGE_WIDTH}}>
          {children}
          <View style={{position: 'absolute', right: 10, top: 10}}>
            <Icon iconName="play-btn" width={17} height={17} />
          </View>
          <View style={{position: 'absolute', right: 10, bottom: 10}}>
            <LikeBtn audio={data} />
          </View>
        </View>
      </AudioCardContainer>
    );
  };

  if (division === 'Story') {
    return (
      <Container>
        <ImageBasic
          path={thumbnail}
          width={IMAGE_WIDTH}
          height={IMAGE_WIDTH}
          borderRadius={20}
        />
      </Container>
    );
  }

  if (division === 'ASMR') {
    return (
      <Container>
        <View
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_WIDTH,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.RIGHT_PURPLE,
            borderRadius: 20,
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
      </Container>
    );
  }

  if (division === 'Song') {
    return (
      <Container>
        <View
          style={{
            backgroundColor: color,
            width: IMAGE_WIDTH,
            height: IMAGE_WIDTH,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text
            style={{fontSize: 17, color: 'white', fontWeight: '600'}}
            numberOfLines={2}
            ellipsizeMode={'tail'}>
            {title}
          </Text>
        </View>
      </Container>
    );
  }

  return (
    <AudioCardContainer audio={data} isAvailable={true} division={'Story'}>
      <View style={{}}>
        <View style={{position: 'relative'}}>
          <ImageBasic
            path={thumbnail}
            width={IMAGE_WIDTH}
            height={IMAGE_WIDTH}
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
                height: IMAGE_WIDTH,
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
      </View>
    </AudioCardContainer>
  );
};

export default AudioCardMyLike;
