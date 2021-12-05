import useAPI from '../useAPI';

export default function useNoticeAPI() {
  const {getHandler, postHandler, deleteHandler, putHandler} = useAPI();

  const getNotices = async () => {
    try {
      const res: any = await getHandler('/notice');
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  return {
    getNotices,
  };
}
