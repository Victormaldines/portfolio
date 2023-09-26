import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';

import { AboutMeContainer, AboutMeSection, Button } from './styled';

export const AboutMe = () => {
  return (
    <AboutMeContainer className="grid-template">
      <AboutMeSection className="about-me-description">
        <span className="emphasis">Sobre mim</span>
        <span className="description">
          Meu nome é Victor, tenho 21 anos, adoro broa de erva-doce e sou
          formado em Análise e Desenvolvimento de Sistemas. Desde novo sempre
          fui apaixonado por tecnologia, sempre quis fazer algo da vida que
          fosse relacionado a área de T.I.. Comecei realmente a aprofundar meus
          conhecimentos na área de programação após o término do ensino médio,
          com o começo da graduação devido a uma bolsa integral obtida através
          do Enem. Hoje estou focando nas tecnologias aplicadas ao
          desenvolvimento web, estudei desde conceitos de front-end com HTML,
          CSS, Javascript e React quanto conceitos back-end como lógica de
          programação, estrutura de dados, modelagem de dados, POO, Php, NodeJS
          e outros. Criei esse site com objetivo principal de começar a criar
          projetos pessoais e expô-los na aba projetos. Fique à vontade :)
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
