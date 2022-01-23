import useAPI from "./useAPI";

export default function useAdministratorAPI() {
  const { postHandler } = useAPI();

  const postAdministratorLogin = async ({ id, password }) => {
    try {
      const result = await postHandler("/admin/login", { id, password });
      return result?.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    postAdministratorLogin,
  };
}
