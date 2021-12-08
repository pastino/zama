import axios from 'axios';
// redux
import {State} from '@/redux/rootReducer';
import {useSelector} from 'react-redux';

export const appVersion = '0.0.1';

export default function useAPI() {
  const API_URL =
    'http://zama-env.eba-uyjjpisc.ap-northeast-2.elasticbeanstalk.com/';

  const {token} = useSelector((state: State) => state.usersReducer);

  async function getHandler(
    url: string,
    params?: any,
    headers?: any,
    axiosParams?: any,
  ) {
    try {
      const res = await axios({
        method: 'get',
        url: `${API_URL}${url}`,
        params,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          ...headers,
        },
        ...axiosParams,
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async function deleteHandler(url: string, data?: any, headers?: any) {
    try {
      const res = await axios({
        method: 'delete',
        url: `${API_URL}${url}`,
        data: data ? data : {},
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          ...headers,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async function postHandler(url: string, data: any, headers?: any) {
    try {
      const res = await axios({
        method: 'post',
        url: `${API_URL}${url}`,
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          ...headers,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async function putHandler(url: string, data: any, headers?: any) {
    try {
      const res = await axios({
        method: 'put',
        url: `${API_URL}${url}`,
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          ...headers,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async function patchHandler(url: string, data: any, headers?: any) {
    try {
      const res = await axios({
        method: 'patch',
        url: `${API_URL}${url}`,
        data,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          ...headers,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  return {
    getHandler,
    deleteHandler,
    postHandler,
    putHandler,
    patchHandler,
  };
}
