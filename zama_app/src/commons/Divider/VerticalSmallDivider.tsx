import React from 'react';
import {View} from 'react-native';
// styles
import colors from '@/styles/colors';

const VerticalSmallDivider = ({width}) => {
  return (
    <View>
      <View
        style={{width, height: 1.5, backgroundColor: colors.DIVIDER_COLOR}}
      />
    </View>
  );
};

export default VerticalSmallDivider;
