import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 :focus {
   outline: 0;
   box-shadow: 0 0 0 2px ${(props: any) => props.theme["green-300"]};
 }

 body {
    background: ${(props) => props.theme["grey-800"]};
    color: ${(props) => props.theme["grey-900"]};
    -webkit-font-smoothing: antialiased
 }

 body, input, textarea, button {
   font-family: 'Inter', sans-serif;
   font-weight: 400;
   font-size: 1rem;
 }
`;
