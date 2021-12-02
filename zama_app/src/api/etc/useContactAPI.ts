import useAPI from '../useAPI';

export default function useContactAPI() {
  const {getHandler, postHandler, deleteHandler, putHandler} = useAPI();

  const postContact = async (email: string, content: string) => {
    try {
      const res: any = await postHandler('/contact', {email, content});
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  return {
    postContact,
  };
}
