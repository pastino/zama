import colors from '@/styles/colors';
import React from 'react';
import Slider from 'react-native-slider';

const ProgressBar = ({
  value,
  maximumValue,
  onValueChange,
  onSlidingStart,
  onSlidingComplete,
}) => {
  return (
    <Slider
      value={value}
      maximumValue={maximumValue}
      onValueChange={onValueChange}
      onSlidingStart={onSlidingStart}
      onSlidingComplete={onSlidingComplete}
      maximumTrackTintColor={colors.BRIGHT_GRAY}
      minimumTrackTintColor={colors.WHITE}
      thumbTintColor={'white'}
    />
  );
};
export default ProgressBar;
