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
  background-color: rgba(0, 0, 0, 0.3);

  & span.project-preview,
  & a.project-preview {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  & span.project-name,
  & span.project-description {
    padding: 10px 30px;
  }

  & span.project-name {
    color: ${colors.WHITE_COLOR};
    background-color: rgba(30, 30, 30, 0.8);
    border-radius: 0 0 5px 5px;
    position: absolute;
    z-index: 1;
    transition: all 0.1s ease-in-out;
  }

  & span.project-preview:hover .project-name,
  & a.project-preview:hover .project-name {
    font-size: 1.3em;
    border-radius: 5px;
  }

  & img {
    border-radius: 10px 10px 0 0;
    width: 350px;
    height: 197px;
  }

  & span.project-preview:hover img,
  & a.project-preview:hover img {
    filter: blur(1.1px) saturate(50%);
  }
`;
