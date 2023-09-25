import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';

import { AboutMeContainer, AboutMeSection, Button } from './styled';

export const AboutMe = () => {
  return (
    <AboutMeContainer className="grid-template">
      <AboutMeSection className="about-me-description">
        <span className="emphasis">Sobre mim</span>
        <span className="description">
          Id esse qui ipsum est aute elit dolore culpa sit deserunt qui.
          Cupidatat laborum sunt ea proident dolore eu excepteur aliquip cillum
          dolore aliquip aliqua. Laboris labore cillum mollit consectetur elit
          mollit deserunt amet anim aute. Consequat consequat aute dolor est
          cillum ipsum enim velit consectetur incididunt voluptate laborum ut.
          Laboris irure ullamco et exercitation cupidatat consequat esse. Sit
          proident eiusmod adipisicing id deserunt.Qui exercitation excepteur
          cupidatat culpa. Incididunt amet eu nulla ipsum et laborum ipsum ex id
          pariatur irure quis et. Adipisicing cupidatat consectetur tempor
          fugiat proident nisi nostrud occaecat.
        </span>
      </AboutMeSection>
      <AboutMeSection className="about-me-social-links">
        <Link to="https://www.linkedin.com/in/victormaldines">
          <Button>
            <span>
              <FaLinkedinIn size={24} />
            </span>
            <span className="text">Mais sobre mim</span>
          </Button>
        </Link>
      </AboutMeSection>
    </AboutMeContainer>
  );
};
