import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';

import { AboutMeContainer, AboutMeSection, Button } from './styled';

export const AboutMe = () => {
  return (
    <AboutMeContainer className="grid-template">
      <AboutMeSection className="about-me-description">
        <h1>Sobre mim</h1>
        <span className="description">
          Meu nome é <strong>Victor</strong>, tenho 21 anos, adoro broa de
          erva-doce e sou formado em{' '}
          <em>Análise e Desenvolvimento de Sistemas</em>. Desde novo sempre fui
          apaixonado por tecnologia, sempre quis fazer algo da vida que fosse
          relacionado a área de T.I.. Comecei realmente a aprofundar meus
          conhecimentos na <em>área de programação</em> após o término do ensino
          médio, com o começo da graduação devido a uma bolsa integral obtida
          através do Enem. Hoje estou focando nas tecnologias aplicadas ao{' '}
          <strong>
            desenvolvimento <em>web</em>
          </strong>
          , estudei desde conceitos de <strong>front-end</strong> como{' '}
          <em>HTML</em>, <em>CSS</em>, <em>Javascript</em> e <em>React</em>{' '}
          quanto conceitos <strong>back-end</strong> como{' '}
          <em>lógica de programação</em>, <em>estrutura de dados</em>,{' '}
          <em>modelagem de dados</em>, <em>POO</em>, <em>Php</em>,{' '}
          <em>NodeJS</em> e outros. Criei esse site com objetivo principal de
          começar a criar projetos pessoais e expô-los na aba projetos. Fique à
          vontade :)
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
