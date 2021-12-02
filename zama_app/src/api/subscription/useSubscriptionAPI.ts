import {setSubscription} from '@/redux/subscription/subscriptionReducer';
import {useDispatch} from 'react-redux';
import useAPI from '../useAPI';

export default function useSubscriptionAPI() {
  const {getHandler, postHandler, deleteHandler, putHandler} = useAPI();

  const dispatch = useDispatch();

  const getSubscription = async () => {
    try {
      const res: any = await getHandler('/subscription');
      const {success, subscriptions} = res.data;
      if (success) {
        dispatch(setSubscription({subscriptions}));
      }
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const useVoucher = async code => {
    try {
      const res: any = await postHandler('/voucher/use', {code});
      getSubscription();
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  return {
    getSubscription,
    useVoucher,
  };
}
