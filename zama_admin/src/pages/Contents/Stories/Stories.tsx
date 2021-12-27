import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import ContentsTable from "src/commons/ContentsTable";
import CreateContentModal from "src/commons/CreateContentModal";
import useWindowSize from "src/hooks/useWindowSize";
import { HEADER_HEIGHT } from "src/styles/sizes";

const Stories = () => {
  const { width, height } = useWindowSize();
  const [isVisible, setIsVisible] = useState(false);
  //"Song" | "Story" | "ASMR";

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
      <ContentsTable division={"Story"} />
      <CreateContentModal
        isVisible={isVisible}
        handleModal={() => setIsVisible(!isVisible)}
        division={"Story"}
      />
    </div>
  );
};

export default Stories;
