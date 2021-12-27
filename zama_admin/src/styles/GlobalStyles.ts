import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styles from "./styles";

const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration:none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: ${styles.BaseFont};
        font-size: 23px;
        color:black;
        background-color: #FEFEFE;
    }
`;

export default globalStyles;
