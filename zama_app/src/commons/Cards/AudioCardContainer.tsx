import usePlayerHandle from '@/hooks/usePlayerHandle';
import {setSubscriptionModal} from '@/redux/interation/interactionSlice';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

const AudioCardContainer = ({children, audio, isAvailable, division}) => {
  const {handleClickContent} = usePlayerHandle();
  const dispatch = useDispatch();

  const handleClickAudio = () => {
    if (isAvailable) {
      handleClickContent([
        {
          id: 0,
          title: audio.title,
          duration: audio.time,
          artwork: audio.thumbnail,
          url: audio.file,
          division,
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
