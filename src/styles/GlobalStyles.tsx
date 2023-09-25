import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: sans-serif;
    color: ${colors.WHITE_COLOR};
    background-image: url('/static/images/global/gargantua-blackhole.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: color-burn;
    background-color: rgba(0, 0, 0, .9);
  }

  a {
    text-decoration: none;
    color: ${colors.SECONDARY_COLOR};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.main`
  max-width: 80vw;
  height: 80vh;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.07);

  .emphasis {
    font-weight: bold;
    font-style: italic;
    line-height: 2em;
  }

  .description {
    text-align: justify;
    letter-spacing: 0.08em;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
