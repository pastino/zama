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
    //totalAudios
    const copiedTotalData = totalAudios.slice();

    const typeIndex = copiedTotalData.findIndex(
      item => item.division === division,
    );
    console.log(copiedTotalData);
    const typeAudio = copiedTotalData[typeIndex].data;
    const totalIndex = typeAudio.findIndex(audio => audio.id === audioId);
    const totalAudio = typeAudio.slice();
    totalAudio[totalIndex] = {
      ...totalAudio[totalIndex],
      isLike: !totalAudio[totalIndex].isLike,
    };

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
