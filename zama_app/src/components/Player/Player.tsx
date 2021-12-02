import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
// components
import Controller from './FullScreen/Controller';
import BottomMiniPlayer from './BottomScreen/BottomMiniPlayer';
// commons
import ModalContainer from '@/commons/Modals/Container/ModalContainer';
import PreviousWhiteBtn from '@assets/svg/previous_white_btn.svg';
import Tag from '@/commons/Tag';
import TouchableOpacity from '@/commons/TouchableOpacity';
// hooks
import usePlayerHandle from '@/hooks/usePlayerHandle';
// libs
import FastImage from 'react-native-fast-image';
import TrackPlayer from 'react-native-track-player';
import {isIphoneX} from 'react-native-iphone-x-helper';
// tools
import {transformTimes} from '@/utils/tools';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// styles
import styled from 'styled-components/native';
import {
  FULL_SCREEN_HEIGHT,
  HEADER_HEIGHT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@/styles/sizes';
import {TRANSPARENT_DARK, WHITE} from '@/styles/colors';

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
  const [data, setData] = useState(initData);

  const {modalVisible, playList, continuePlay, playing, playingNum} =
    useSelector((state: State) => state.playerReducer);

  const {
    handleModal,
    handleSetupPlayer,
    handlePlay,
    handlePause,
    handleInitSetAudio,
    handleSetPlayingNum,
  } = usePlayerHandle();

  const {id, title, duration, artwork, url, artist, division} =
    playList[playingNum];

  const intervalRef = useRef<any>(null);
  const playingNumRef = useRef(0);

  const getInformations = async () => {
    const position = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    const currentTrack = await TrackPlayer.getCurrentTrack();

    const durationString = transformTimes(Math.round(duration));
    const currentPosition = Number(position);

    const currentPositionString = transformTimes(currentPosition);
    setData({
      position: currentPosition,
      duration,
      positionString: currentPositionString,
      durationString,
    });

    if (
      currentTrack &&
      Number(currentTrack) > 0 &&
      Number(currentTrack) !== playingNumRef.current
    ) {
      handleSetPlayingNum(Number(currentTrack));
    }

    // if (
    //   Number(duration) > 0 &&
    //   Math.round(Number(duration)) === Math.round(position)
    // ) {
    //   handlePause();
    //   setData({
    //     position: currentPosition + 1,
    //     duration,
    //     positionString: transformTimes(currentPosition + 1),
    //     durationString,
    //   });
    // }
  };

  const handleOnValueChange = (position: number) => {
    const positionString = transformTimes(position);
    if (Number(position) <= data.duration) {
      setData({...data, position, positionString});
    }
  };

  const onSeek = async (seek: number) => {
    await TrackPlayer.seekTo(seek);
    intervalRef.current = setInterval(() => getInformations(), 500);
  };

  const onSlidingStart = async (e: any) => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    handleSetupPlayer();
    handleInitSetAudio(playList);
    intervalRef.current = setInterval(() => getInformations(), 1000);
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

  return (
    <>
      {!modalVisible ? (
        <BottomMiniPlayer
          handleModal={handleModal}
          title={title}
          thumbnail={artwork}
          playing={playing}
          artist={artist}
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
          }}>
          <FastImage
            source={{uri: artwork}}
            style={{
              position: 'absolute',
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT + HEADER_HEIGHT,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: TRANSPARENT_DARK,
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
                  <PreviousWhiteBtn />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <View
                style={{
                  flex: 0.45,
                  justifyContent: 'center',
                  flexDirection: 'column',

                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}>
                  <Tag title={division} />
                  <Text
                    style={{
                      fontWeight: '700',
                      fontSize: 17,
                      color: 'white',
                      marginTop: 10,
                    }}>
                    {title}
                  </Text>
                  <Text style={{fontSize: 13, color: 'white', marginTop: 10}}>
                    by {artist}
                  </Text>
                </View>
                <Controller
                  value={data.position}
                  maximumValue={duration}
                  onValueChange={handleOnValueChange}
                  onSlidingStart={onSlidingStart}
                  onSlidingComplete={onSeek}
                  timeData={data}
                />
              </View>
            </View>
          </View>
        </View>
      </ModalContainer>
    </>
  );
};

export default Player;
