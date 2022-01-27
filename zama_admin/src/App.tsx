import { useState } from "react";
import Router from "./router/Router";
//libs
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
import { Button, FormGroup, TextField } from "@mui/material";
//redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux";
//apis
import useAdministratorAPI from "./api/useAdministratorAPI";
//hooks
import useWindowSize from "./hooks/useWindowSize";
//styles
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import styles from "./styles/styles";

export const store = createStore(rootReducer);

const App = () => {
  const [currentPage, setCurrentPage] = useState("콘텐츠");

  const { width, height } = useWindowSize();

  const [cookies, setCookie, removeCookie] = useCookies(["token", "super"]);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loginFail, setLoginFail] = useState<boolean | null>(null);

  const { postAdministratorLogin } = useAdministratorAPI();

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const onChangeId = (text) => {
    const textValue = text.target.value;
    setId(textValue);
  };

  const onChangePassword = (text) => {
    const textValue = text.target.value;
    setPassword(textValue);
  };

  const handleLogin = async () => {
    try {
      const result = await postAdministratorLogin({ id, password });

      if (result?.success) {
        setCookie("token", result.token, {
          path: "/",
        });
        setCookie("super", result?.administrator?.super, { path: "/" });
      } else {
        setLoginFail(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(cookies?.token);
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
      {cookies?.token ? (
        <Router
          currentPage={currentPage}
          windowWidth={width}
          windowHeight={height}
          handleChangePage={handleChangePage}
        />
      ) : (
        <div
          style={{
            width: width,
            height: height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoginContainer style={{ backgroundColor: "white" }}>
            <FormGroup style={{ width: 300 }}>
              <TextField
                value={id}
                placeholder="id"
                onChange={onChangeId}
                id="outlined-required"
                label="아이디"
                defaultValue="Hello World"
              />
            </FormGroup>

            <FormGroup style={{ width: 300, marginTop: 20 }}>
              <TextField
                value={password}
                onChange={onChangePassword}
                id="outlined-password-input"
                placeholder="password"
                label="패스워드"
                type="password"
                autoComplete="current-password"
              />
            </FormGroup>
            {loginFail && (
              <div
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  color: styles.MIDDLE_GRAY_COLOR,
                }}
              >
                로그인 정보가 일치하지 않습니다.
              </div>
            )}

            <div style={{ marginTop: 45 }} />
            <Button
              onClick={handleLogin}
              style={{ width: 140 }}
              variant="contained"
            >
              로그인
            </Button>
          </LoginContainer>
        </div>
      )}
      <ToastContainer style={{ fontSize: 15 }} />
      <GlobalStyles />
    </div>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 350px;
  box-shadow: 0 5px 10px 0 rgba(67, 67, 67, 0.16);
  background-color: ${styles.GRAY_COLOR};
  border-radius: 20px;
`;

export default App;
