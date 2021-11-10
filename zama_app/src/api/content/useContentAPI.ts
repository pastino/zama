// apis
import {setHomeContents, setBasketAudios} from '@/redux/audio/audioSlice';
import {useDispatch} from 'react-redux';
import useAPI from '../useAPI';

export default function useContentAPI() {
  const {getHandler, postHandler, deleteHandler, putHandler} = useAPI();
  const dispatch = useDispatch();
  const getHomeContentsAPI = async () => {
    try {
      const res: any = await getHandler('/home/contents');
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const getHomeContentsSubCateAPI = async () => {
    try {
      const res: any = await getHandler('/home/contents/v2');
      const {success, recoAudios, totalAudios} = res.data;
      if (success) {
        dispatch(
          setHomeContents({
            recoAudios,
            totalAudios,
          }),
        );
      }
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const getSleepBasketAudio = async () => {
    try {
      const res: any = await getHandler('/sleep/basket');
      const {success, audios} = res.data;
      if (success) {
        dispatch(
          setBasketAudios({
            basketAudios: audios,
          }),
        );
      }
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const inBasketAudio = async (audioId: number) => {
    try {
      const res: any = await postHandler('/sleep/basket', {audioId});
      getSleepBasketAudio();
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  return {
    getHomeContentsAPI,
    getHomeContentsSubCateAPI,
    getSleepBasketAudio,
    inBasketAudio,
  };
}
