// apis
import useAPI from '../useAPI';

export default function useContentAPI() {
  const {getHandler, postHandler, deleteHandler, putHandler} = useAPI();

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
    inBasketAudio,
  };
}
