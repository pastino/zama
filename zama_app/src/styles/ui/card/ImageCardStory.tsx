import React from 'react';
import FastImage from 'react-native-fast-image';
import colors from '@/styles/colors';

const ImageCardStory = ({uri, size}) => {
  return (
    <FastImage
      source={{uri}}
      style={{
        width: size,
        height: size,
        borderRadius: 10,
        backgroundColor: colors.RIGHT_PURPLE,
      }}
      resizeMode={'cover'}
    />
  );
};

export default ImageCardStory;
