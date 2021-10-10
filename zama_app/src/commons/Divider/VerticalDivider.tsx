import React from 'react';
import {View} from 'react-native';
// styles
import {DIVIDER_BORDER_COLOR, DIVIDER_COLOR} from '@/styles/colors';

const VerticalDivider = ({width}) => {
  return (
    <View
      style={{
        width,
        height: 7,
        backgroundColor: DIVIDER_COLOR,
        borderTopColor: DIVIDER_BORDER_COLOR,
        borderTopWidth: 0.5,
      }}
    />
  );
};

export default VerticalDivider;
