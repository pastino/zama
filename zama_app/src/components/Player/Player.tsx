import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
// components
import Controller from './components/Controller';
import BottomMiniPlayer from './BottomScreen/BottomMiniPlayer';
import {IoniconsIcons} from '@/commons/Icons/RnIcons';
import MultiItemBodyView from './MultiItemBodyView';
import OnlyOneItemBodyView from './OnlyOneItemBodyView';
// commons
import ModalContainer from '@/commons/Modals/Container/ModalContainer';
// hooks
import usePlayerHandle from '@/hooks/usePlayerHandle';
// libs
import TrackPlayer from 'react-native-track-player';
import {isIphoneX} from 'react-native-iphone-x-helper';
// tools
import {transformTimes} from '@/utils/tools';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// styles
import {FULL_SCREEN_HEIGHT, SCREEN_WIDTH, SIDE_PADDING} from '@/styles/sizes';
import colors from '@/styles/colors';

export interface TimeData {
  position: number;
  duration: number;
  positionString: string;
  durationString: string;
}

const Player = () => {
  const initData: TimeData = {
    position: 0,
    duration: 0,
    positionString: '00:00',
    durationString: '00:00',
  };
  const [data, setData] = useState<any>(initData);
  const [currentAudio, setCurrentAudio] = useState<any>({
    id: 0,
    title: '',
    duration: 0,
    artwork: '',
    url: '',
    color: '',
    artist: '',
    division: '',
  });

  const {modalVisible, playList, playing, repeatState} = useSelector(
    (state: State) => state.playerReducer,
  );

  const {
    handleModal,
    handlePlay,
    handlePause,
    handleSetupPlayer,
    handleNextEvent,
    handlePrevEvent,
  } = usePlayerHandle();

  const intervalRef = useRef<any>(null);

  const playStateRef = useRef<any>(repeatState);

  const handleOnValueChange = (position: number) => {
    const positionString = transformTimes(position);
    if (Number(position) <= data.duration) {
      setData({...data, position, positionString});
    }
  };

  const onSlidingStart = async (e: any) => {
    clearInterval(intervalRef.current);
  };

  const getInformations = async () => {
    const position = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    const currentTrack = await TrackPlayer.getCurrentTrack();

    setCurrentAudio(
      playList.filter(audio => audio.id === Number(currentTrack))?.[0],
    );
    const durationString = transformTimes(Math.round(duration));
    const currentPosition = Number(position);
    const currentPositionString = transformTimes(currentPosition);

    setData({
      position: currentPosition,
      duration,
      positionString: currentPositionString,
      durationString,
    });

    if (Platform.OS === 'android') {
      if (
        Number(duration) > 0 &&
        Math.ceil(Number(duration)) <= Math.ceil(position)
      ) {
        handleNextEvent();
      }
    }
  };

  const onSeek = async (seek: number) => {
    await TrackPlayer.seekTo(seek);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => getInformations(), 300);
  };

  useEffect(() => {
    handleSetupPlayer();
    intervalRef.current = setInterval(() => getInformations(), 300);
    return () => {
      clearInterval(intervalRef.current);
      setData({
        position: 0,
        duration: 0,
        positionString: '00:00',
        durationString: '00:00',
      });
    };
  }, [playList]);

  useEffect(() => {
    playStateRef.current = repeatState;
  }, [repeatState]);

  return (
    <>
      {!modalVisible ? (
        <BottomMiniPlayer
          handleModal={handleModal}
          handleNextEvent={handleNextEvent}
          handlePrevEvent={handlePrevEvent}
          currentAudio={currentAudio}
          playing={playing}
          handlePause={handlePause}
          handlePlay={handlePlay}
        />
      ) : null}
      <ModalContainer
        isVisible={modalVisible}
        close={handleModal}
        style={{flex: 1}}>
        <View
          style={{
            width: SCREEN_WIDTH,
            height: FULL_SCREEN_HEIGHT,
            backgroundColor: colors.DARK_PURPLE,
          }}>
          <View
            style={{
              height: isIphoneX() ? 90 : 50,
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity onPress={handleModal}>
              <View
                style={{
                  width: 40,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 10,
                  marginLeft: 10,
                }}>
                <IoniconsIcons
                  name={'chevron-down'}
                  size={30}
                  color={'white'}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <View style={{flex: 0.6}}>
              {playList?.length > 1 ? (
                <MultiItemBodyView currentAudio={currentAudio} />
              ) : (
                <OnlyOneItemBodyView />
              )}
            </View>
            <View
              style={{
                flex: 0.4,
                paddingHorizontal: SIDE_PADDING,
                marginTop: 20,
              }}>
              <Controller
                value={data.position}
                maximumValue={currentAudio?.duration}
                onValueChange={handleOnValueChange}
                onSlidingStart={onSlidingStart}
                onSlidingComplete={onSeek}
                timeData={data}
              />
            </View>
          </View>
        </View>
      </ModalContainer>
    </>
  );
};

export default Player;
