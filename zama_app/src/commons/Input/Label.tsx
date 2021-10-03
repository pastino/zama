import React from 'react';
import {View, Text} from 'react-native';
import * as colors from '../../styles/colors';
import {typography} from '../../styles/typography';

interface Props {
  label?: string;
  required?: boolean;
  style?: {};
  textStyle?: {};
}

export default function Label({label, required, textStyle, style}: Props) {
  if (!label) return null;
  return (
    <View style={[{flexDirection: 'row'}, style]}>
      <Text
        style={[
          typography.f14,
          {
            marginBottom: 5,
            color: colors.DARK_GRAY,
          },
          textStyle,
        ]}>
        {label}
      </Text>
      {required ? (
        <Text style={[typography.f12, {color: colors.RED}]}> *</Text>
      ) : null}
    </View>
  );
}
