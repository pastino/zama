import { useRef, useState } from "react";
import useWindowSize from "src/hooks/useWindowSize";
import { HEADER_HEIGHT } from "src/styles/sizes";
import styles from "src/styles/styles";

const Contents = () => {
  const { width, height } = useWindowSize();
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleImageSelect = () => {
    const element = document.getElementById("image");
    element?.click();
  };

  const handleAudioSelect = () => {
    const element = document.getElementById("audio");
    element?.click();
  };

  const handleChangeimage = (event) => {
    let reader = new FileReader();
    reader.onload = function (event: any) {
      setImage(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleChangeAudio = (event) => {
    let reader = new FileReader();
    reader.onload = function (event: any) {
      setAudio(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        height: height - HEADER_HEIGHT - 10,
        padding: 10,
      }}
    >
      <ul style={{ display: "flex", flexDirection: "row" }}>
        <li
          onClick={handleImageSelect}
          style={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            width: 100,
            height: 100,
            backgroundColor: styles.GRAY_COLOR,
            fontSize: 12,
            borderRadius: 5,
            color: styles.DARK_GRAY_COLOR,
            textAlign: "center",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              fontSize: 20,
              marginBottom: 5,
              color: styles.DARK_GRAY_COLOR,
            }}
          >
            +
          </div>
          <div>이미지 업로드</div>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleChangeimage}
            style={{
              width: 10,
              backgroundColor: "blue",
              position: "absolute",
              zIndex: -1,
              opacity: 0,
            }}
          />
          {image && (
            <div style={{ position: "absolute" }}>
              <img
                src={image}
                style={{ borderRadius: 5, width: 100, height: 100 }}
              />
            </div>
          )}
        </li>

        <li
          onClick={handleAudioSelect}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 100,
            height: 100,
            backgroundColor: styles.GRAY_COLOR,
            fontSize: 12,
            borderRadius: 5,
            color: styles.DARK_GRAY_COLOR,
            textAlign: "center",
            flexDirection: "column",
            marginLeft: 20,
            cursor: "pointer",
          }}
        >
          <div
            style={{
              fontSize: 20,
              marginBottom: 5,
              color: styles.DARK_GRAY_COLOR,
            }}
          >
            +
          </div>
          <div>오디오 업로드</div>
          <input
            type="file"
            id="audio"
            name="audio"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleChangeAudio}
            style={{
              width: 10,
              backgroundColor: "blue",
              position: "absolute",
              zIndex: -1,
              opacity: 0,
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Contents;
