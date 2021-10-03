import React from 'react';
import {View} from 'react-native';
// styles
import {DIVIDER_COLOR} from '@/styles/colors';

const VerticalDivider = ({width}) => {
  return (
    <View>
      <View style={{width, height: 1.5, backgroundColor: DIVIDER_COLOR}} />
    </View>
  );
};

export default VerticalDivider;
