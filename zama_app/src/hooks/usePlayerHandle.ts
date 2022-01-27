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
  setRepeatState,
} from '@/redux/player/playerReducer';
import {State} from '@/redux/rootReducer';

export default function usePlayerHandle() {
  const dispatch = useDispatch();

  const continuePlayRef = useRef<any>(null);
  const state = useSelector((state: State) => state.playerReducer);

  const {modalVisible, continuePlay, playList, playingNum, repeatState} = state;

  const handleClickContent = (playList: PlayList[]) => {
    dispatch(setPlayList({playList}));
    handleSetPlayingNum(0);
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
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (repeatState === 'oneRepeat') {
      if (Number(currentTrack) === 0) {
        setTimeout(async () => {
          await TrackPlayer.skip('0');
          handlePlay();
        }, 1000);
      } else {
        setTimeout(async () => {
          console.log('oneRepeat', 1);
          await TrackPlayer.skip(String(Number(currentTrack) - 1));
          handlePlay();
        }, 1000);
      }
    } else if (repeatState === 'totalRepeat') {
      if (Number(currentTrack) === playList.length - 1) {
        await TrackPlayer.skip(String(0));
        handlePlay();
      } else {
        await TrackPlayer.skip(String(Number(currentTrack) + 1));
        handlePlay();
      }
    } else {
      if (Number(currentTrack) === playList.length - 1) {
        null;
      } else {
        await TrackPlayer.skip(String(Number(currentTrack) + 1));
        handlePlay();
      }
    }
  };

  const handlePrevEvent = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (Number(currentTrack) === 0) {
      null;
    } else {
      await TrackPlayer.skip(String(Number(currentTrack) - 1));
      handlePlay();
    }
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

  const handleRepeatState = () => {
    dispatch(setRepeatState({}));
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
          // TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          // TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          // TrackPlayer.CAPABILITY_SEEK_TO,
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          // TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          // TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          // TrackPlayer.CAPABILITY_SEEK_TO,
        ],
        notificationCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          // TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          // TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          // TrackPlayer.CAPABILITY_SEEK_TO,
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
          // TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          // TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          // TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          // TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        ],
        notificationCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          // TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          // TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
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
    handleRepeatState,
  };
}
