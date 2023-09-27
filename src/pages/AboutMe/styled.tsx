import styled from 'styled-components';

import { Container, Section } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const AboutMeContainer = styled(Container)`
  display: grid;

  &.grid-template {
    grid-template-areas:
      'AboutMeDescription'
      'AboutMeSocialLinks';
  }

  .about-me-description {
    grid-area: AboutMeDescription;
    display: flex;
    justify-content: space-evenly;
  }

  .about-me-social-links {
    grid-area: AboutMeSocialLinks;
  }
`;

export const AboutMeSection = styled(Section)`
  &.about-me-description {
    flex-direction: column;
    justify-self: center;
    width: 50vw;
    line-height: 1.5em;
  }

  h1 {
    font-size: 1em;
    font-style: italic;
    letter-spacing: 1px;
  }
`;

export const Button = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 210px;
  height: 65px;
  color: ${colors.WHITE_COLOR};
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background 0.075s ease-in,
    color 0.075s ease-in;

  &:hover {
    background: ${colors.WHITE_COLOR};
    color: ${colors.DARK_COLOR};
  }

  & span {
    display: flex;
    align-self: center;
  }
`;
