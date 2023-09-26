import { styled } from 'styled-components';

import { Container } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const ProjectsContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const Project = styled.section`
  border-radius: 10px;
  display: flex;
  width: 350px;
  min-height: 350px;
  flex-direction: column;
  border: 1px solid black;
  background-color: rgba(10, 10, 10, 0.3);
  backdrop-filter: blur(5px);

  span.project-preview,
  a.project-preview {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  span.project-name {
    padding: 5px 30px;
  }

  span.project-description {
    padding: 15px 25px;
  }

  span.project-name {
    color: ${colors.WHITE_COLOR};
    background-color: rgba(30, 30, 30, 0.8);
    border-radius: 0 0 5px 5px;
    position: absolute;
    z-index: 1;
    transition: all 0.1s ease-in-out;
  }

  span.project-preview:hover .project-name,
  a.project-preview:hover .project-name {
    font-size: 1.3em;
    border-radius: 5px;
  }

  img {
    border-radius: 10px 10px 0 0;
    width: 350px;
    height: 197px;
  }

  span.project-preview:hover img,
  a.project-preview:hover img {
    filter: blur(1.1px) saturate(50%);
  }

  .project-description {
    .technologies {
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0;
      padding: 10px 5px;
      border-top: 1px solid rgba(255, 255, 255, 0.4);
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      font-size: 0.8em;
      font-style: italic;
      color: black;

      .technology {
        padding: 5px 10px;
        margin: 2px 5px 2px 0;
        border: 1px solid ${colors.WHITE_COLOR};
        border-radius: 30px;
        background-color: ${colors.WHITE_COLOR};
        cursor: default;
        transition:
          color 0.075s ease-in,
          background-color 0.075s ease-in,
          border 0.075s ease-in,
          padding 0.075s ease-in;
      }

      .technology:hover {
        font-weight: bold;
        padding: 5px 15px;
        color: ${colors.WHITE_COLOR};
        background-color: black;
        border: 1px solid ${colors.WHITE_COLOR};
      }
    }

    .repository {
      display: block;
      text-align: center;
    }

    .repository a {
      padding: 5px 20px;
      transition: color 0.075s ease-in;
    }

    .repository a:hover {
      color: ${colors.WHITE_COLOR};
    }
  }
`;
