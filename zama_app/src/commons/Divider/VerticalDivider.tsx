import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
// styles
import colors from '@/styles/colors';

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
          borderTopColor: colors.DIVIDER_BORDER_COLOR,
          borderTopWidth: 0.5,
        },
        style,
      ]}
    />
  );
};

export default VerticalDivider;
