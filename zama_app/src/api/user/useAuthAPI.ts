import {Platform} from 'react-native';
import moment from 'moment';

// apis
import useAPI from '../useAPI';
import {TermTypes} from '@/components/Auth/TermsAgree';

export default function useAuthAPI() {
  const {getHandler, postHandler, deleteHandler, putHandler} = useAPI();

  const emailLoginAPI = async (email: string, password: string) => {
    try {
      const res: any = await postHandler('/auth/email/login', {
        email,
        password,
      });
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const postKakaoLoginAPI = async (kakaoId: number, terms?: boolean) => {
    try {
      const res: any = await postHandler('/auth/kakao/login', {
        kakaoId,
        terms,
      });
      console.log(res);
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const emailSignUpLoginAPI = async (
    name: string,
    email: string,
    password: string,
    term: TermTypes[],
  ) => {
    try {
      const res: any = await postHandler('/auth/email/signup', {
        name,
        email,
        password,
        term,
      });
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const sendCertNumByEmailAPI = async (email: string) => {
    try {
      const res: any = await postHandler('/auth/email/certnum', {email});
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const confirmCertNumAPI = async (email: string, certNum: number) => {
    try {
      const res: any = await getHandler('/auth/email/certnum', {
        email,
        certNum,
      });

      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const getSignUpServeyListAPI = async () => {
    try {
      const res: any = await getHandler('/auth/servey');
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const saveSignUpServeyAPI = async (
    userId: number,
    serveyResult: string[],
  ) => {
    try {
      const res: any = await postHandler('/auth/servey', {
        userId,
        serveyResult,
      });
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  return {
    emailLoginAPI,
    postKakaoLoginAPI,
    emailSignUpLoginAPI,
    sendCertNumByEmailAPI,
    confirmCertNumAPI,
    getSignUpServeyListAPI,
    saveSignUpServeyAPI,
  };
}
