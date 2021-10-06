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

  return {
    getHomeContentsAPI,
  };
}
