import { createGlobalStyle } from "styled-components";
import HelveticaNeueWoff from './HelveticaNeue.woff';
import HelveticaNeueBoldWoff from './HelveticaNeueBold.woff';


export const StyledFonts = createGlobalStyle`
  @font-face {
        font-family: 'HelveticaNeueReg';
        src: local('HelveticaNeueReg'), local('HelveticaNeueReg'),
        url(${HelveticaNeueWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'HelveticaNeueBold';
        src: local('HelveticaNeueBold'), local('HelveticaNeueBold'),
        url(${HelveticaNeueBoldWoff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
`