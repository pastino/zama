import { FunctionComponent } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
//components
import Menu from "./Menu";
import Contents from "../pages/Contents";
import Stories from "src/pages/Contents/Stories";
import Songs from "src/pages/Contents/Songs";
import Asmr from "src/pages/Contents/Asmr";
//libs
import { useCookies } from "react-cookie";
//stlyes
import styles from "../styles/styles";
import styled from "styled-components";
import Voucher from "src/pages/Voucher";

interface Props {
  currentPage: string;
  windowWidth: number;
  windowHeight: number;
  handleChangePage: (page: string) => void;
}

const Router: FunctionComponent<Props> = ({
  currentPage,
  windowWidth,
  windowHeight,
  handleChangePage,
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token", "super"]);

  return (
    <BrowserRouter>
      <Menu
        currentPage={currentPage}
        windowHeight={windowHeight}
        handleChangePage={handleChangePage}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          backgroundColor: "#F9F9F9",
        }}
      >
        <HeaderContainer windowWidth={windowWidth}>
          <div>{currentPage}</div>
          <div
            onClick={() => {
              removeCookie("token");
              removeCookie("super");
              setCookie("token", "", {
                path: "/",
              });
              setCookie("super", "", { path: "/" });
            }}
            style={{ fontSize: 12, marginRight: 30, cursor: "pointer" }}
          >
            Logout
          </div>
        </HeaderContainer>

        <Switch>
          <Route
            exact
            path={"/"}
            render={() => {
              return <Redirect to={"/contents"} />;
            }}
          />

          <Route path="/contents" exact component={Contents} />
          <Route path="/contents/stories" exact component={Stories} />
          <Route path="/contents/songs" exact component={Songs} />
          <Route path="/contents/asmr" exact component={Asmr} />

          <Route path="/voucher/list" exact component={Voucher} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

interface StylesProps {
  windowWidth: number;
}

const HeaderContainer = styled.div<StylesProps>`
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  color: ${styles.MIDDLE_GRAY_COLOR};
  border-bottom: solid 2px ${styles.GRAY_COLOR};
  background-color: white;
`;

export default Router;
