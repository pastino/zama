import { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
//libs
import { useCookies } from "react-cookie";
//styles
import styled from "styled-components";
import styles from "../styles/styles";
import { IoCalendarOutline } from "react-icons/io5";
import { MENU_WIDTH } from "../styles/sizes";

interface Props {
  currentPage: string;
  windowHeight: number;
  handleChangePage: (page: string) => void;
}

const Menu: FunctionComponent<Props> = ({
  currentPage,
  windowHeight,
  handleChangePage,
}) => {
  let history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(["token", "super"]);

  const RIGHT_GRAY_COLOR = "#cbcbc3";
  let initMenu = [
    {
      title: "콘텐츠",
      route: "/contents",
      open: false,
      pages: [
        {
          title: "스토리",
          route: "/stories",
          open: false,
          icon: () => (
            <IoCalendarOutline
              size={14}
              color={currentPage === "contents" ? "white" : RIGHT_GRAY_COLOR}
            />
          ),
        },
        {
          title: "음악",
          route: "/songs",
          open: false,
          icon: () => (
            <IoCalendarOutline
              size={14}
              color={currentPage === "contents" ? "white" : RIGHT_GRAY_COLOR}
            />
          ),
        },
        {
          title: "ASMR",
          route: "/asmr",
          open: false,
          icon: () => (
            <IoCalendarOutline
              size={14}
              color={currentPage === "contents" ? "white" : RIGHT_GRAY_COLOR}
            />
          ),
        },
      ],
      icon: () => (
        <IoCalendarOutline
          size={17}
          color={currentPage === "contents" ? "white" : RIGHT_GRAY_COLOR}
        />
      ),
    },
  ];

  if (cookies?.super === "false") {
    initMenu = initMenu.splice(0, 1);
  }

  const handleClickMenu = (path, title) => {
    console.log(1, path, title);
    history.push({
      pathname: path,
    });
    handleChangePage(title);
  };

  return (
    <Container windowHeight={windowHeight}>
      <Logo>ZAMA ADMIN</Logo>
      <MenuContainer>
        {initMenu.map((item, index) => (
          <div key={index}>
            <MenuItemWrapper>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon>{item.icon()}</Icon>
                  <Title current={currentPage === item.title}>
                    {item.title}
                  </Title>
                </div>
                <div style={{ marginLeft: 20, marginTop: 3 }}>
                  {item?.pages.map((page) => (
                    <div
                      key={page.route}
                      onClick={() =>
                        handleClickMenu(item.route + page.route, page.title)
                      }
                      style={{ marginTop: 7 }}
                    >
                      <Icon>{page.icon()}</Icon>
                      <PageTitle current={currentPage === page.title}>
                        {page.title}
                      </PageTitle>
                    </div>
                  ))}
                </div>
              </div>
            </MenuItemWrapper>
          </div>
        ))}
      </MenuContainer>
    </Container>
  );
};

interface StylesProps {
  windowHeight?: number;
  current?: boolean;
}

const Container = styled.div<StylesProps>`
  display: "flex";
  flex-direction: "column";
  align-items: center;
  justify-content: center;
  background-color: ${styles.MENU_BACK_COLOR};
  width: ${MENU_WIDTH}px;
  min-width: ${MENU_WIDTH}px;
  min-height: ${(props) => props.windowHeight}px;
  height: auto;
  color: white;
  padding-top: 50px;
`;

const Logo = styled.div`
  display: "flex";
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: white;
`;

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 50px 0 0 40px;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 40px;
  cursor: pointer;
`;

const MenuDetailItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  padding-left: 30px;
`;

const Icon = styled.span``;

const Title = styled.span<StylesProps>`
  margin-left: 15px;
  font-size: 20px;
  color: ${(props) => (props.current ? "white" : "#cbcbc3")};
  &:hover {
    color: white;
  }
`;

const PageTitle = styled(Title)`
  font-size: 15px;
`;

export default Menu;
