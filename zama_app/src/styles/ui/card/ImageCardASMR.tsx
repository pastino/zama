import colors from '@/styles/colors';
import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

const ImageCardASMR = ({uri, size}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 10,
        backgroundColor: colors.RIGHT_PURPLE,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FastImage
        source={{
          uri,
        }}
        style={{width: size * 0.57, height: size * 0.57}}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default ImageCardASMR;
