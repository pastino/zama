import { useState } from "react";
import ContentsTable from "src/commons/ContentsTable";
import CreateContentModal from "src/commons/CreateContentModal";
import useWindowSize from "src/hooks/useWindowSize";
import { HEADER_HEIGHT } from "src/styles/sizes";
import { Button } from "@mui/material";

const Contents = ({ division }) => {
  const { height } = useWindowSize();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: height - HEADER_HEIGHT - 10,
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginRight: 30,
        }}
      >
        <Button
          onClick={() => setIsVisible(!isVisible)}
          style={{ width: 100 }}
          variant="contained"
        >
          생성
        </Button>
      </div>
      <ContentsTable division={division} />
      <CreateContentModal
        isVisible={isVisible}
        handleModal={() => setIsVisible(!isVisible)}
        division={division}
      />
    </div>
  );
};

export default Contents;
