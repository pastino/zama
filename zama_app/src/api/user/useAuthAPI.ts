// apis
import useAPI from '../useAPI';
import {TermTypes} from '@/components/Auth/TermsAgree';

export default function useAuthAPI() {
  const {getHandler, postHandler, deleteHandler, putHandler} = useAPI();

  const getUserInfo = async () => {
    try {
      const res: any = await getHandler('/user');
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const loginByEmailAPI = async (email: string, password: string) => {
    try {
      const res: any = await postHandler('/auth/login/email', {
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

  const loginByKakaoAPI = async (kakaoId: number, terms?: boolean) => {
    try {
      const res: any = await postHandler('/auth/login/kakao', {
        kakaoId,
        terms,
      });
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const signUpByEmailAPI = async (
    name: string,
    email: string,
    password: string,
    term: TermTypes[],
  ) => {
    try {
      const res: any = await postHandler('/auth/signup/email', {
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

  const checkCertNumAPI = async (email: string, certNum: number) => {
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

  const createSignUpServeyAPI = async (
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

  const sendCertNumToFindPassword = async (email: string) => {
    try {
      const res: any = await postHandler('/find/password/certnum', {email});
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  const changePassword = async (email: string, password: string) => {
    try {
      const res: any = await postHandler('/password/change', {email, password});
      return res.data;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.errorMessage;
      console.log(errorMessage);
      throw error;
    }
  };

  return {
    getUserInfo,
    loginByEmailAPI,
    loginByKakaoAPI,
    signUpByEmailAPI,
    sendCertNumByEmailAPI,
    checkCertNumAPI,
    getSignUpServeyListAPI,
    createSignUpServeyAPI,
    sendCertNumToFindPassword,
    changePassword,
  };
}
