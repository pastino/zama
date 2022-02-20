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
      maximumTrackTintColor={colors.RIGHT_PURPLE}
      minimumTrackTintColor={colors.PURPLE}
      thumbTintColor={colors.PURPLE}
    />
  );
};
export default ProgressBar;
