import React, {FunctionComponent} from 'react';
import {Image, Text, View} from 'react-native';
// commons
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
import colors from '@/styles/colors';
import {SCREEN_WIDTH} from '@/styles/sizes';
import Icon from '@/styles/ui/Icon';
import {IoniconsIcons} from '@/commons/Icons/RnIcons';

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
  const {playing, repeatState} = useSelector(
    (state: State) => state.playerReducer,
  );
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
        flex: 1,
        width: '100%',
      }}>
      <View style={{width: '100%'}}>
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
          <Text style={{color: colors.WHITE}}>
            {timeData.positionString ?? '00:00'}
          </Text>
          <Text style={{color: colors.WHITE}}>
            {timeData.durationString ?? '00:00'}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        {repeatState === 'normal' ? (
          <TouchableOpacity onPress={handleRepeatState}>
            <Image
              source={require('@/assets/images/repeat-off.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        ) : repeatState === 'totalRepeat' ? (
          <TouchableOpacity onPress={handleRepeatState}>
            <Image
              source={require('@/assets/images/repeat-on.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        ) : repeatState === 'oneRepeat' ? (
          <TouchableOpacity onPress={handleRepeatState}>
            <Image
              source={require('@/assets/images/repeat-one.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View
        style={{
          width: SCREEN_WIDTH - 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flex: 0.8,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={handlePrevEvent}>
              <Icon iconName="prev-btn" width={70} height={70} />
            </TouchableOpacity>
            {playing ? (
              <TouchableOpacity onPress={handlePause}>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#695FA8',
                  }}>
                  <View>
                    <IoniconsIcons
                      name={'pause'}
                      color={colors.WHITE}
                      size={35}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handlePlay}>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#695FA8',
                  }}>
                  <View style={{marginLeft: 5}}>
                    <IoniconsIcons
                      name={'play'}
                      color={colors.WHITE}
                      size={35}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={handleNextEvent}>
              <Icon iconName="next-btn" width={70} height={70} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FullScreenController;
