import ContentsTable from "src/commons/ContentsTable";

import useWindowSize from "src/hooks/useWindowSize";
import { HEADER_HEIGHT } from "src/styles/sizes";

const Contents = ({ division }) => {
  const { height } = useWindowSize();

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <ContentsTable division={division} />
    </div>
  );
};

export default Contents;
