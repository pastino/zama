import {SCREEN_WIDTH} from '@/styles/sizes';
import React from 'react';
import {Image, Text, View} from 'react-native';

const HomeHeader = () => {
  return (
    <View style={{position: 'relative'}}>
      <Image
        source={require('@/assets/images/main-banner.png')}
        style={{width: SCREEN_WIDTH, height: (SCREEN_WIDTH * 102) / 390}}
        resizeMode={'contain'}
      />
      <Text
        style={{
          position: 'absolute',
          zIndex: 1,
          color: 'white',
          left: 20,
          bottom: 20,
          fontSize: 16,
          fontWeight: '700',
        }}>
        꿈나라로 떠나볼까요? ☺️{' '}
      </Text>
    </View>
  );
};

export default HomeHeader;
