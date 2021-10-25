import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
// commons
import {IoniconsIcons} from '@/commons/Icons/RnIcons';
import TouchableOpacity from '@/commons/TouchableOpacity';
// components
import ProgressBar from './ProgressBar';
// hooks
import usePlayerHandle from '@/hooks/usePlayerHandle';
// redux
import {State} from '@/redux/rootReducer';
import {useSelector} from 'react-redux';
// type
import {TimeData} from '../Player';
// styles
import {WHITE} from '@/styles/colors';
import {SCREEN_WIDTH} from '@/styles/sizes';

interface Props {
  value: number;
  maximumValue: number;
  timeData: TimeData;
  onValueChange: (position: number) => void;
  onSlidingStart: (e: any) => void;
  onSlidingComplete: (seek: number) => void;
}

const FullScreenController: FunctionComponent<Props> = ({
  value,
  timeData,
  maximumValue,
  onValueChange,
  onSlidingStart,
  onSlidingComplete,
}) => {
  const {modalVisible, playList, continuePlay, playing, playingNum} =
    useSelector((state: State) => state.playerReducer);
  const {handlePlay, handlePause} = usePlayerHandle();

  return (
    <View
      style={{
        width: SCREEN_WIDTH,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{width: SCREEN_WIDTH * 0.9}}>
        <ProgressBar
          value={value}
          maximumValue={maximumValue}
          onValueChange={onValueChange}
          onSlidingStart={onSlidingStart}
          onSlidingComplete={onSlidingComplete}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: WHITE}}>{timeData.positionString}</Text>
          <Text style={{color: WHITE}}>{timeData.durationString}</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: SCREEN_WIDTH * 0.6,
          }}>
          <IoniconsIcons name={'play-back'} color={WHITE} size={40} />
          {playing ? (
            <TouchableOpacity onPress={handlePause}>
              <IoniconsIcons name={'pause'} color={WHITE} size={40} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handlePlay}>
              <IoniconsIcons name={'play'} color={WHITE} size={40} />
            </TouchableOpacity>
          )}
          <IoniconsIcons name={'play-forward'} color={WHITE} size={40} />
        </View>
      </View>
    </View>
  );
};

export default FullScreenController;
