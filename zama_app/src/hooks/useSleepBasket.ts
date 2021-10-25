//redux
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import {setHomeContents} from '@/redux/audio/audioSlice';

function useSleepBasket() {
  const dispatch = useDispatch();
  const {recoAudios, totalAudios} = useSelector(
    (state: State) => state.audioReducer,
  );

  function sleepBasketClick(audioId, division) {
    //recoAudios
    const copiedRecoAudios = recoAudios.slice();

    const recoIndex = copiedRecoAudios.findIndex(audio => audio.id === audioId);
    copiedRecoAudios[recoIndex] = {
      ...copiedRecoAudios[recoIndex],
      isLike: !copiedRecoAudios[recoIndex].isLike,
    };

    //totalAudios
    const copiedTotalData = totalAudios.slice();
    const typeIndex = copiedTotalData.findIndex(
      item => item.division === division,
    );
    const typeAudio = copiedTotalData[typeIndex].data;
    const totalIndex = typeAudio.findIndex(audio => audio.id === audioId);

    const totalAudio = typeAudio.slice();
    totalAudio.splice(totalIndex, 1, {
      ...totalAudio[totalIndex],
      isLike: !totalAudio[totalIndex].isLike,
    });

    copiedTotalData[typeIndex] = {division, data: totalAudio};

    dispatch(
      setHomeContents({
        recoAudios: copiedRecoAudios,
        totalAudios: copiedTotalData,
      }),
    );
  }

  return {
    sleepBasketClick,
  };
}

export default useSleepBasket;
