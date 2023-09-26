import { useState, useEffect } from 'react';
import { Nav, Logo } from './styled';
import { Link, Path, useLocation } from 'react-router-dom';

export const Header = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const location = useLocation();

  useEffect(() => {
    let currentRoute = getRootRouteName(location);
    currentRoute = currentRoute || 'home';
    setCurrentPage(currentRoute);
  }, [location]);

  function getRootRouteName(location: Path): string {
    const routeStart = location.pathname.indexOf('/') + 1;
    const routeEnd = location.pathname.length;
    return location.pathname.slice(routeStart, routeEnd);
  }

  return (
    <Nav>
      <Link to="/home">
        <Logo>
          <img src="/static/images/global/logox-white.svg" alt="Logo" />
        </Logo>
      </Link>
      <ul>
        <li>
          <Link
            to="/home"
            className={currentPage === 'home' ? 'active' : ''}
            id="home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about-me"
            className={currentPage === 'about-me' ? 'active' : ''}
          >
            Sobre mim
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={currentPage === 'projects' ? 'active' : ''}
          >
            Projetos
          </Link>
        </li>
      </ul>
    </Nav>
  );
};
