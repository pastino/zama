import { useDispatch, useSelector } from "react-redux";
import { State } from "src/redux";
import useAPI from "./useAPI";

export default function useAdministratorAPI() {
  const { getHandler, postHandler } = useAPI();
  const dispatch = useDispatch();
  const { storyList, songList, asmrList } = useSelector(
    (state: State) => state.contents
  );

  const postAdministratorLogin = async ({ id, password }) => {
    try {
      const result = await postHandler("/admin/login", { id, password });
      return result?.data;
    } catch (error) {
      throw error;
    }
  };

  type Division = "Story" | "Song" | "ASMR";

  const getContents = async ({
    division,
    page,
    size,
  }: {
    division: Division;
    page: number;
    size: number;
  }) => {
    try {
      const {
        data: { audios, totalCount },
      } = await getHandler("/admin/audios", {
        division,
        page,
        size,
      });

      const data = { audios, totalCount, page };

      switch (division) {
        case "Story":
          dispatch({
            type: "SET_STORY",
            payload: { storyList: data },
          });
          break;
        case "Song":
          dispatch({
            type: "SET_SONG",
            payload: { songList: data },
          });
          break;
        case "ASMR":
          dispatch({
            type: "SET_ASMR",
            payload: { asmrList: data },
          });
          break;
      }
      return {};
    } catch (error) {
      throw error;
    }
  };

  const createContent = async (formData, division) => {
    try {
      const result = await postHandler("/admin/content", formData, {
        "Content-Type": "multipart/form-data",
      });

      const page =
        division === "Story"
          ? storyList.page
          : division === "Song"
          ? songList.page
          : division === "Asmr"
          ? asmrList.page
          : 1;

      await getContents({ division, page, size: 12 });
      return result?.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    postAdministratorLogin,
    getContents,
    createContent,
  };
}
