import React from 'react';
// redux
import {State} from '@/redux/rootReducer';
import {useSelector} from 'react-redux';

const Player = () => {
  const {modalVisible, playList, continuePlay, playing, playingNum} =
    useSelector((state: State) => state.playerReducer);

  return <></>;
};

export default Player;
