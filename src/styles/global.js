import { createGlobalStyle } from "styled-components";
import fontpath from "../assets/fonts/thebrooklyn.woff";
import fontpathbold from "../assets/fonts/thebrooklynbold.woff";
import bgpath from "../assets/imgs/background2.png";

export const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: "thebrooklyn";
    src: url(${fontpath}) format("woff");

}

@font-face {
    font-family: "thebrooklynbold";
    src: url(${fontpathbold}) format("woff");

}

:root {
    background-image: url(${bgpath});
    background-repeat: repeat;
    background-position: center top;
    
}
`;

export default Global;
