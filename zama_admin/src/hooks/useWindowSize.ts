import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowWidth, setwindowWidth] = useState(
    document.documentElement.clientWidth
  );
  const [windowHeight, setWindowHeight] = useState(
    document.documentElement.clientHeight
  );

  const getSizeHandler = () => {
    setwindowWidth(document.documentElement.clientWidth);
    setWindowHeight(document.documentElement.clientHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", getSizeHandler);
    getSizeHandler();
    return () => window.removeEventListener("resize", getSizeHandler);
  }, []);
  return { width: windowWidth, height: windowHeight };
}

export default useWindowSize;
