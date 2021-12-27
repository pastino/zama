import useAPI from "./useAPI";

export default function useAdministratorAPI() {
  const { getHandler, postHandler } = useAPI();

  const postAdministratorLogin = async ({ id, password }) => {
    try {
      const result = await postHandler("/admin/login", { id, password });
      return result?.data;
    } catch (error) {
      throw error;
    }
  };

  const createContent = async (formData) => {
    try {
      const result = await postHandler("/admin/content", formData, {
        "Content-Type": "multipart/form-data",
      });
      return result?.data;
    } catch (error) {
      throw error;
    }
  };

  const getStories = async (division: string) => {
    try {
      const result = await getHandler("/admin/audios", { division });
      return result?.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    postAdministratorLogin,
    getStories,
    createContent,
  };
}
