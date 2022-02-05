import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import useContentAPI from "src/api/useContentAPI";
import styles from "src/styles/styles";
import getBlobDuration from "get-blob-duration";

const ModifyContent = ({ content, handleModal, division }) => {
  const [image, setImage] = useState(null);
  const [initImage, setInitImage] = useState(content?.thumbnail);
  const [imageFile, setImageFile] = useState("");
  const defaultAudioName = "기존 Audio File.*";
  const [audioFile, setaudioFile] = useState({ name: defaultAudioName });
  const [free, setFree] = useState(content?.free ? "Yes" : "No");
  const [voice, setVoice] = useState(content?.voiceGender);
  const [title, setTitle] = useState(content?.title);
  const [time, setTime] = useState<number>(content?.time);

  const { modifyContent, uploadFile } = useContentAPI();

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
    setImageFile(event.target.files[0]);
    setInitImage(null);
  };

  const handleChangeAudio = async (event) => {
    let reader = new FileReader();
    reader.onload = function (event: any) {};
    reader.readAsDataURL(event.target.files[0]);
    setaudioFile(event.target.files[0]);

    try {
      const duration = await getBlobDuration(event.target.files[0]);
      setTime(Math.round(Number(duration)));
    } catch (e) {
      console.log(e);
    }
  };

  const contentValidator = () => {
    if (division === "Stroy") {
      if (!division || !free || !voice || !title || !time) {
        alert("모든 항목을 채워주세요.");
        return false;
      }
    } else {
      if (!division || !free || !title || !time) {
        alert("모든 항목을 채워주세요.");
        return false;
      }
    }

    return true;
  };

  const fileUpload = async () => {
    const image = !imageFile ? null : imageFile;
    const audio = audioFile?.name === defaultAudioName ? null : audioFile;

    let imageLocation = "";
    let audioLocation = "";

    if (image) {
      const formData: any = new FormData();
      formData.append("thumbnail", imageFile);
      const { location } = await uploadFile(formData);
      imageLocation = location;
    }

    if (audio) {
      const formData: any = new FormData();
      formData.append("file", audioFile);
      const { location } = await uploadFile(formData);
      audioLocation = location;
    }
    return { imageLocation, audioLocation };
  };

  const handleCreateContent = async () => {
    const success = contentValidator();
    if (!success) return;
    const { imageLocation, audioLocation } = await fileUpload();
    console.log(imageLocation, audioLocation);
    try {
      const params = {
        id: content?.id,
        imageLocation: imageLocation[0] || content?.thumbnail,
        audioLocation: audioLocation[0] || content?.file,
        free,
        voice,
        title,
        time,
      };
      await modifyContent({ params, division });
      handleModal();
    } catch (e) {
      console.log(e);
      alert("컨텐츠 생성에 실패하였습니다.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        height: 500,
        padding: 10,
      }}
    >
      <ul style={{ display: "flex", marginTop: 20, flexDirection: "column" }}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormControl fullWidth style={{ marginTop: 20 }}>
          <InputLabel id="demo-simple-select-label">Free</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={free}
            label="Free"
            onChange={(e) => setFree(e.target.value)}
          >
            <MenuItem value={"Yes"}>Yes</MenuItem>
            <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginTop: 20 }}>
          <InputLabel id="demo-simple-select-label">Voice</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={voice}
            label="Voice"
            onChange={(e) => setVoice(e.target.value)}
          >
            <MenuItem value={"남"}>남</MenuItem>
            <MenuItem value={"여"}>여</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Time"
          id="outlined-start-adornment"
          disabled={true}
          style={{ marginTop: 20 }}
          value={time}
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">초</InputAdornment>
            ),
          }}
        />
        <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
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
            {image ? (
              <div style={{ position: "absolute" }}>
                <img
                  src={image}
                  style={{ borderRadius: 5, width: 100, height: 100 }}
                />
              </div>
            ) : initImage ? (
              <div style={{ position: "absolute" }}>
                <img
                  src={initImage}
                  style={{ borderRadius: 5, width: 100, height: 100 }}
                />
              </div>
            ) : null}
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
            {audioFile?.name ? (
              <div style={{ width: 100 }}>{audioFile?.name}</div>
            ) : (
              <>
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
              </>
            )}

            <input
              type="file"
              id="audio"
              name="audio"
              accept="*/mp3, */mp4"
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
        </div>
      </ul>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <Button
          onClick={handleModal}
          style={{ width: 100 }}
          variant="contained"
        >
          취소
        </Button>
        <Button
          onClick={handleCreateContent}
          style={{ width: 100, marginLeft: 20 }}
          variant="contained"
        >
          생성
        </Button>
      </div>
    </div>
  );
};

export default ModifyContent;
