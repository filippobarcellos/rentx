import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 }

 button {
   cursor: pointer;
   outline: none;
   border: none;
 }

 html {
   font-size: 62.5%;
 }

 body {
   font-family: 'Inter', sans-serif;
   font-size: 16px;
   background: ${(props) => props.theme.colors.grey.primary};
 }

 h1, h2, h3, h4, h5, h6 {
   font-family: 'Archivo', sans-serif;
 }

 li {
   list-style: none;
 }

 a {
   text-decoration: none;
 }
`;
