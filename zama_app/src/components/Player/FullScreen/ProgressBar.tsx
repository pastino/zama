import {BRIGHT_GRAY, RIGTH_GRAY, WHITE} from '@/styles/colors';
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
      maximumTrackTintColor={BRIGHT_GRAY}
      minimumTrackTintColor={WHITE}
      thumbTintColor={'white'}
    />
  );
};
export default ProgressBar;
