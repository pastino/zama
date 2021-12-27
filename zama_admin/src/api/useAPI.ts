import axios from "axios";

export default function useAPI() {
  const API_URL = "http://localhost:5002";

  async function getHandler(
    url: string,
    params?: any,
    headers?: any,
    axiosParams?: any
  ) {
    try {
      const res = await axios({
        method: "get",
        url: `${API_URL}${url}`,
        params,
        headers: { "Content-Type": "application/json", ...headers },
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
        method: "delete",
        url: `${API_URL}${url}`,
        data: data ? data : {},
        headers: { "Content-Type": "application/json", ...headers },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async function postHandler(url: string, data: any, headers?: any) {
    try {
      const res = await axios({
        method: "post",
        url: `${API_URL}${url}`,
        data,
        headers: { "Content-Type": "application/json", ...headers },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async function putHandler(url: string, data: any, headers?: any) {
    try {
      const res = await axios({
        method: "put",
        url: `${API_URL}${url}`,
        data,
        headers: { "Content-Type": "application/json", ...headers },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async function patchHandler(url: string, data: any, headers?: any) {
    try {
      const res = await axios({
        method: "patch",
        url: `${API_URL}${url}`,
        data,
        headers: { "Content-Type": "application/json", ...headers },
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
