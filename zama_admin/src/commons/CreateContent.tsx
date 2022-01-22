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
import useAdministratorAPI from "src/api/useAdministratorAPI";
import styles from "src/styles/styles";
import getBlobDuration from "get-blob-duration";

const CreateContent = ({ handleModal, division }) => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState("");

  const [audioFile, setaudioFile] = useState({ name: "" });
  const [free, setFree] = useState("No");
  const [voice, setVoice] = useState("남");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState<number>(0);

  const { createContent } = useAdministratorAPI();

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
    if (
      !imageFile ||
      !audioFile ||
      !division ||
      !free ||
      !voice ||
      !title ||
      !time
    ) {
      alert("모든 항목을 채워주세요.");
      return false;
    }
    return true;
  };

  const appendFormData = () => {
    const formData: any = new FormData();
    formData.append("thumbnail", imageFile);
    formData.append("file", audioFile);
    formData.append("division", division);
    formData.append("free", free === "Yes" ? true : false);
    formData.append("voice", voice);
    formData.append("title", title);
    formData.append("time", time);
    return formData;
  };

  const handleCreateContent = async () => {
    const success = contentValidator();
    if (!success) return;

    try {
      const formData: any = appendFormData();
      await createContent(formData, division);

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
        <TextField label="Title" onChange={(e) => setTitle(e.target.value)} />
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

export default CreateContent;
