import {setVersion} from '@/redux/version/versionReducer';
import {useDispatch} from 'react-redux';
import useAPI from '../useAPI';

export default function useVersionAPI() {
  const {getHandler, postHandler, deleteHandler, putHandler} = useAPI();
  const dispatch = useDispatch();

  const getVersion = async () => {
    try {
      const {
        data: {success, data},
      }: any = await getHandler('/version');

      if (success) {
        dispatch(
          setVersion({
            appVersionAnd: data?.appVersionAnd,
            appVersionIOS: data?.appVersionIOS,
            isTest: data?.isTest,
          }),
        );
      }
      return data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  return {
    getVersion,
  };
}
