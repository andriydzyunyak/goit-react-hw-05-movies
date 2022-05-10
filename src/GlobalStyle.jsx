import { css } from '@emotion/react';
import 'normalize.css';

export const GlobalStyle = css`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  input,
  textarea {
    outline: none;
  }

  a {
    color: #000000;
    text-decoration: none;
  }
`;
