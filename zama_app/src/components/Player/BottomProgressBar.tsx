import {WHITE} from '@/styles/colors';
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
      step={1}
      value={value}
      maximumValue={maximumValue}
      onValueChange={onValueChange}
      onSlidingStart={onSlidingStart}
      onSlidingComplete={onSlidingComplete}
      maximumTrackTintColor={'gray'}
      minimumTrackTintColor={WHITE}
      thumbTintColor={WHITE}
      style={{height: 5}}
      thumbTouchSize={{width: 20, height: 20}}
      thumbStyle={{
        width: 15,
        height: 15,
      }}
    />
  );
};
export default ProgressBar;
