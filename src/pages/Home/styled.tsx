import { styled } from 'styled-components';
import { Container, Section } from '../../styles/GlobalStyles';
import * as colors from '../../config/colors';

export const HomeContainer = styled(Container)`
  display: grid;

  &.grid-template {
    grid-template:
      'homePresentation homeImage' 1fr
      'homeDescription homeDescription' 1fr
      / 1fr 1fr;
  }

  .home-presentation {
    grid-area: homePresentation;
  }

  .home-image {
    grid-area: homeImage;
  }

  .home-description {
    grid-area: homeDescription;
  }
`;

export const HomeSection = styled(Section)`
  &.home-presentation,
  &.home-description {
    line-height: 1.5em;
  }

  &.home-presentation {
    flex-direction: column;
    font-size: 2.5vw;
    font-weight: bold;
    font-style: italic;

    h1 {
      text-align: center;
      font-size: 1em;
    }
  }

  &.home-image svg {
    position: relative;
    left: 3.5vw;
    fill: ${colors.WHITE_COLOR};
    width: 10vw;
  }

  &.home-description {
    flex-direction: column;
    width: 50vw;
    min-width: 300px;
    justify-self: center;
  }
`;
