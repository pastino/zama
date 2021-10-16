import {Platform, ToastAndroid} from 'react-native';
import {useEffect, useRef} from 'react';
//libs
import TrackPlayer from 'react-native-track-player';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {
  PlayList,
  setContinuePlay,
  setModalVisible,
  setPause,
  setPlay,
  setPlayingNum,
  setPlayList,
} from '@/redux/player/playerReducer';
import {State} from '@/redux/rootReducer';

export default function usePlayerHandle() {
  const dispatch = useDispatch();

  const continuePlayRef = useRef<any>(null);

  const state = useSelector((state: State) => state.playerReducer);
  const {modalVisible, continuePlay, playList, playingNum} = state;

  const handleClickContent = (playList: PlayList[]) => {
    dispatch(setPlayList({playList}));
    handleModal();
  };

  const handleModal = () => {
    dispatch(setModalVisible({modalVisible: !modalVisible}));
  };

  const handlePlay = async () => {
    await TrackPlayer.play();
    dispatch(setPlay({}));
  };

  const handlePause = async () => {
    await TrackPlayer.pause();
    dispatch(setPause({}));
  };

  const lastTrackFlag = () => {
    if (playList.length === playingNum && !continuePlay) {
      return true;
    }
    return false;
  };

  const firstTrackFlag = () => {
    if (1 === playingNum && !continuePlay) {
      return true;
    }
    return false;
  };

  const handleNextEvent = async () => {
    if (playList.length === playingNum) {
      if (continuePlay) {
        handleSetPlayingNum(1);
        await TrackPlayer.skip(String(1));
      } else {
        ToastAndroid.showWithGravityAndOffset(
          '마지막 오디오입니다.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      }
    } else {
      handleSetPlayingNum(playingNum + 1);
      await TrackPlayer.skipToNext();
    }
    handlePlay();
  };

  const handlePrevEvent = async () => {
    if (1 === playingNum) {
      if (continuePlay) {
        handleSetPlayingNum(playList.length);
        await TrackPlayer.skip(String(playList.length));
      } else {
        ToastAndroid.showWithGravityAndOffset(
          '첫번째 오디오입니다.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      }
    } else {
      handleSetPlayingNum(playingNum - 1);
      await TrackPlayer.skipToPrevious();
    }
    handlePlay();
  };

  const handleRemoteNextEvent = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (playList.length === Number(currentTrack)) {
      if (continuePlayRef.current) {
        handleSetPlayingNum(1);
        await TrackPlayer.skip(String(1));
      }
    } else {
      handleSetPlayingNum(Number(currentTrack) + 1);
      await TrackPlayer.skip(String(Number(currentTrack) + 1));
    }
  };

  const handleRemotePreveEvent = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (Number(currentTrack) === 1) {
      if (continuePlayRef.current) {
        handleSetPlayingNum(playList.length);
        await TrackPlayer.skip(String(playList.length));
      }
    } else {
      handleSetPlayingNum(Number(currentTrack) - 1);
      await TrackPlayer.skip(String(Number(currentTrack) - 1));
    }
  };

  const handleContinuePlay = () => {
    dispatch(setContinuePlay({continuePlay: !continuePlay}));
  };

  const handleSetPlayingNum = playingNum => {
    dispatch(setPlayingNum({playingNum}));
  };

  useEffect(() => {
    continuePlayRef.current = continuePlay;
  }, [continuePlay]);

  const handleSetupPlayer = async () => {
    await TrackPlayer.setupPlayer({});
    if (Platform.OS === 'android') {
      await TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          TrackPlayer.CAPABILITY_SEEK_TO,
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SEEK_TO,
        ],
        notificationCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          TrackPlayer.CAPABILITY_SEEK_TO,
        ],
        // icon: require('@assets/images/logo_text.png'),
      });
      await TrackPlayer.addEventListener('remote-play', () => {
        handlePlay();
      });
      await TrackPlayer.addEventListener('remote-pause', () => {
        handlePause();
      });
      await TrackPlayer.addEventListener('remote-next', () => {
        handleRemoteNextEvent();
      });
      await TrackPlayer.addEventListener('remote-previous', () => {
        handleRemotePreveEvent();
      });
      // await TrackPlayer.addEventListener('remote-seek', (seek) => {
      //   onSeek(seek.position);
      // });
    } else {
      await TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        ],
        notificationCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        ],
        // icon: require('@assets/images/logo_text.png'),
      });
      await TrackPlayer.addEventListener('remote-play', () => {
        handlePlay();
      });
      await TrackPlayer.addEventListener('remote-pause', () => {
        handlePause();
      });
      await TrackPlayer.addEventListener('remote-next', () => {
        handleRemoteNextEvent();
      });
      await TrackPlayer.addEventListener('remote-previous', () => {
        handleRemotePreveEvent();
      });
    }
  };

  const handleInitSetAudio = async playList => {
    await TrackPlayer.reset();
    await TrackPlayer.add(playList);
    handlePlay();
  };

  return {
    handleSetupPlayer,
    handleInitSetAudio,
    handleClickContent,
    handleModal,
    handlePlay,
    handlePause,
    handleNextEvent,
    handlePrevEvent,
    handleContinuePlay,
    handleSetPlayingNum,
    lastTrackFlag,
    firstTrackFlag,
    handleRemoteNextEvent,
    handleRemotePreveEvent,
  };
}
