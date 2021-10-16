import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, TouchableWithoutFeedback, View, Text} from 'react-native';
// components
import BottomProgressBar from './BottomProgressBar';
// commons
import ModalContainer from '@/commons/Modals/Container/ModalContainer';
import PreviousWhiteBtn from '@assets/svg/previous_white_btn.svg';
import Tag from '@/commons/Tag';
// hooks
import usePlayerHandle from '@/hooks/usePlayerHandle';
// libs
import FastImage from 'react-native-fast-image';
import TrackPlayer from 'react-native-track-player';
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
import {WHITE} from '@/styles/colors';

const Player = () => {
  const initData = {
    position: 0,
    duration: 0,
    positionString: '00:00',
    durationString: '00:00',
  };
  const [data, setData] = useState(initData);

  const {modalVisible, playList, continuePlay, playing, playingNum} =
    useSelector((state: State) => state.playerReducer);

  const {handleModal, handleSetupPlayer, handleInitSetAudio} =
    usePlayerHandle();

  const {id, title, duration, artwork, url, artist, division} =
    playList[playingNum];

  const intervalRef = useRef<any>(null);

  const getInformations = async () => {
    const position = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    const positionString = transformTimes(position);
    const durationString = transformTimes(duration);
    setData({position, duration, positionString, durationString});
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
    intervalRef.current = setInterval(() => getInformations(), 500);
  }, []);

  return (
    <>
      {/* {!modalVisible ? (
    <AudioPlayerInactive
      handleModal={handleModal}
      title={title}
      thumbnail={thumbnail}
      playing={playing}
      startHandle={handlePlay}
      pauseHandle={handlePause}
    />
  ) : null} */}
      <ModalContainer isVisible={modalVisible} close={handleModal}>
        <Container
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
          <SafeAreaView style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                marginTop: 20,
                paddingHorizontal: 20,
                paddingBottom: 70,
              }}>
              <TouchableWithoutFeedback onPress={handleModal}>
                <View
                  style={{
                    width: 40,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <PreviousWhiteBtn />
                </View>
              </TouchableWithoutFeedback>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  flexDirection: 'column',
                }}>
                <View style={{alignItems: 'center', flexDirection: 'column'}}>
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
                <View style={{marginTop: 30}}>
                  <BottomProgressBar
                    value={data.position}
                    maximumValue={duration}
                    onValueChange={handleOnValueChange}
                    onSlidingStart={onSlidingStart}
                    onSlidingComplete={onSeek}
                  />
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Container>
      </ModalContainer>
    </>
  );
};

const Container = styled.View`
  width: ${SCREEN_WIDTH}px;
  height: ${FULL_SCREEN_HEIGHT}px;
  background-color: ${WHITE};
`;

export default Player;
