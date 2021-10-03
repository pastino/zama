import React from 'react';
import {View, Text} from 'react-native';
import * as colors from '../../styles/colors';
import {typography} from '../../styles/typography';

interface Props {
  error?: string;
  style?: {};
  textStyle?: {};
}

export default function Error({error, textStyle, style}: Props) {
  if (!error) return null;
  return (
    <View style={[{flexDirection: 'row'}, style]}>
      <Text
        style={[
          typography.f12,
          {
            marginTop: 5,
            color: colors.RED,
          },
          textStyle,
        ]}>
        {error}
      </Text>
    </View>
  );
}
