import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
// styles
import {DIVIDER_BORDER_COLOR, DIVIDER_COLOR} from '@/styles/colors';

interface Props {
  width: number;
  style?: {};
}

const VerticalDivider: FunctionComponent<Props> = ({width, style}) => {
  return (
    <View
      style={[
        {
          width,
          height: 1,
          borderTopColor: DIVIDER_BORDER_COLOR,
          borderTopWidth: 0.5,
        },
        style,
      ]}
    />
  );
};

export default VerticalDivider;
