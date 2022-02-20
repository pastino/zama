import {
  setModalVisible,
  setPause,
  setPlay,
  setPlayList,
  setRepeatState,
} from '@/redux/player/playerReducer';
//libs
import TrackPlayer from 'react-native-track-player';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import {Platform} from 'react-native';

export default function usePlayerHandle() {
  const dispatch = useDispatch();

  const state = useSelector((state: State) => state.playerReducer);
  const {modalVisible, playList, repeatState} = state;

  const handlePlay = async () => {
    await TrackPlayer.play();
    dispatch(setPlay({}));
  };

  const handlePause = async () => {
    await TrackPlayer.pause();
    dispatch(setPause({}));
  };

  const handleInitSetAudio = async playList => {
    dispatch(setPlayList({playList}));
    await TrackPlayer.reset();
  };

  const turnOnAudio = async playList => {
    await handleInitSetAudio(playList);
    await TrackPlayer.add(playList?.slice(0, 1));

    handlePlay();
    handleModal();
  };

  const handleModal = () => {
    dispatch(setModalVisible({modalVisible: !modalVisible}));
  };

  const getCurrentIndex = async (): Promise<number> => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    return playList.findIndex(audio => audio.id === Number(currentTrack));
  };

  const setPlaying = async index => {
    if (playList[index]) {
      await TrackPlayer.reset();
      await TrackPlayer.add([playList[index] as any]);
      handlePlay();
    }
  };

  const setIndexOfNextEvent = index => {
    if (repeatState === 'normal') {
      return index + 1;
    }
    if (repeatState === 'oneRepeat') {
      console.log(repeatState, index);
      return index;
    }
    if (repeatState === 'totalRepeat') {
      if (playList?.length - 1 === index) {
        return 0;
      }
      return index + 1;
    }
  };

  const handleNextEvent = async () => {
    const index = await getCurrentIndex();
    const settedIndex = setIndexOfNextEvent(index);
    setPlaying(settedIndex);
  };

  const setIndexOfPrevEvent = index => {
    console.log(index, repeatState);
    if (repeatState === 'normal') {
      return index - 1;
    }
    if (repeatState === 'oneRepeat') {
      return index;
    }
    if (repeatState === 'totalRepeat') {
      if (index === 0) {
        return playList?.length - 1;
      }
      return index - 1;
    }
  };

  const handlePrevEvent = async () => {
    const index = await getCurrentIndex();
    const settedIndex = setIndexOfPrevEvent(index);
    setPlaying(settedIndex);
  };

  const handleRepeatState = () => {
    dispatch(setRepeatState({}));
  };

  const handleSetupPlayer = async () => {
    await TrackPlayer.setupPlayer({});

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
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
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
      handleNextEvent();
    });
    await TrackPlayer.addEventListener('remote-previous', () => {
      handlePrevEvent();
    });

    // if (Platform.OS === 'ios') {
    //   await TrackPlayer.addEventListener('playback-queue-ended', e => {
    //     console.log(1111);
    //     handleNextEvent();
    //     console.log(`TrackPlayerEvent = ${JSON.stringify(e)}}`);
    //   });
    // }
  };

  return {
    handleSetupPlayer,
    handlePlay,
    handlePause,
    handleModal,
    turnOnAudio,
    handleNextEvent,
    handlePrevEvent,
    handleRepeatState,
  };
}
