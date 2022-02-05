import React from 'react';
import {TouchableOpacity} from 'react-native';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// apis
import useContentAPI from '@/api/content/useContentAPI';
// styles
import Icon from '../Icon';

const LikeBtn = ({audio}) => {
  const {basketAudios} = useSelector((state: State) => state.audioReducer);
  const {inBasketAudio} = useContentAPI();

  const isLike = basketAudios.map(audio => audio.id).includes(audio?.id);

  const addAudioInBasket = async () => {
    try {
      await inBasketAudio(audio, isLike);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={addAudioInBasket}>
      <Icon
        iconName={isLike ? 'heart-on' : 'heart-off'}
        width={18}
        height={15.6}
      />
    </TouchableOpacity>
  );
};

export default LikeBtn;
