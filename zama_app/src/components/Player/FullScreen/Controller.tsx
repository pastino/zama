import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
// commons
import {IoniconsIcons, MaterialIcons} from '@/commons/Icons/RnIcons';

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
import {RIGTH_GRAY, WHITE} from '@/styles/colors';
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
  const {
    modalVisible,
    playList,
    continuePlay,
    playing,
    playingNum,
    repeatState,
  } = useSelector((state: State) => state.playerReducer);
  const {
    handlePlay,
    handlePause,
    handleNextEvent,
    handlePrevEvent,
    handleRepeatState,
  } = usePlayerHandle();

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
      <View
        style={{
          width: SCREEN_WIDTH,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
          }}>
          {repeatState === 'normal' ? (
            <TouchableOpacity onPress={handleRepeatState}>
              <MaterialIcons name={'repeat'} color={RIGTH_GRAY} size={30} />
            </TouchableOpacity>
          ) : repeatState === 'totalRepeat' ? (
            <TouchableOpacity onPress={handleRepeatState}>
              <MaterialIcons name={'repeat'} color={WHITE} size={30} />
            </TouchableOpacity>
          ) : repeatState === 'oneRepeat' ? (
            <TouchableOpacity onPress={handleRepeatState}>
              <MaterialIcons name={'repeat-one'} color={WHITE} size={30} />
            </TouchableOpacity>
          ) : null}
        </View>
        <View
          style={{
            flex: 0.6,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={handlePrevEvent}>
            <IoniconsIcons name={'play-back'} color={WHITE} size={40} />
          </TouchableOpacity>
          {playing ? (
            <TouchableOpacity onPress={handlePause}>
              <IoniconsIcons name={'pause'} color={WHITE} size={40} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handlePlay}>
              <IoniconsIcons name={'play'} color={WHITE} size={40} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={handleNextEvent}>
            <IoniconsIcons name={'play-forward'} color={WHITE} size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FullScreenController;
