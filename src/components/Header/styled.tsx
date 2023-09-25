import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 80vw;
  margin: 0 auto;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 10vh;
    width: 50vw;
  }

  ul a {
    font-size: 0.9rem;
    color: rgba(239, 131, 84, 0.9);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: 0.2s ease-in-out;
    padding: 3vh 2vw;

    &:hover {
      filter: brightness(1.3);
    }
  }

  li .active {
    color: ${colors.WHITE_COLOR};
    font-weight: bold;
  }
`;

export const Logo = styled.span`
  cursor: pointer;
  padding: 15px;

  & img {
    width: 50px;
  }
`;
