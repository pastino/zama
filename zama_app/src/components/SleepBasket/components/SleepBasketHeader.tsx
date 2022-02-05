import React from 'react';
import {Image, Text, View} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {SCREEN_WIDTH} from '@/styles/sizes';
import Icon from '@/styles/ui/Icon';

const SleepBasketHeader = () => {
  return (
    <View style={{position: 'relative'}}>
      <Image
        source={require('@/assets/images/like-header.png')}
        style={{width: SCREEN_WIDTH, height: isIphoneX() ? 200 : 170}}
      />
      <View
        style={{
          width: SCREEN_WIDTH,
          flexDirection: 'row',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'space-between',
          bottom: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 26,
            fontWeight: '700',
            paddingLeft: 20,
          }}>
          내가 좋아하는 음악
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            borderRadius: 20,
            paddingVertical: 10,
            marginRight: 20,
            backgroundColor: 'rgba(2,9,90,0.4)',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              marginRight: 10,
              fontSize: 16,
            }}>
            전체 재생
          </Text>
          <Icon iconName="play-btn" width={15} height={15} />
        </View>
      </View>
    </View>
  );
};

export default SleepBasketHeader;
