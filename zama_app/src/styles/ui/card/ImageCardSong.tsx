import React from 'react';
import {View, Text} from 'react-native';

const ImageCardSong = ({color, size, title}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 10,
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
        {title}
      </Text>
    </View>
  );
};

export default ImageCardSong;
