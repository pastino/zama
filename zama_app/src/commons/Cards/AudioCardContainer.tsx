import usePlayerHandle from '@/hooks/usePlayerHandle';
import {setSubscriptionModal} from '@/redux/interation/interactionSlice';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

const AudioCardContainer = ({children, audio, isAvailable}) => {
  const {turnOnAudio} = usePlayerHandle();
  const dispatch = useDispatch();

  const handleClickAudio = () => {
    if (isAvailable) {
      turnOnAudio([
        {
          id: audio.id,
          title: audio.title,
          duration: audio.time,
          artwork: audio.thumbnail,
          url: audio.file,
          color: audio.color,
          division: audio.division,
          artist: 'zama',
        },
      ]);
    } else {
      dispatch(setSubscriptionModal({openSubscriptionModal: true}));
    }
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={handleClickAudio}>
      {children}
    </TouchableOpacity>
  );
};

export default AudioCardContainer;
