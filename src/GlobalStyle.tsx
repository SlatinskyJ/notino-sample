import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: calc(100vh - 100px);
    background: ${props => props.theme.colors.main};

    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color: ${props => props.theme.colors.text}
  }
`;

export default GlobalStyle;