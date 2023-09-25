import { HomeSection, HomeContainer } from './styled';
import { CodeSvg } from '../../../public/static/images/global/codeSvg';

export const Home = () => {
  return (
    <HomeContainer className="grid-template">
      <HomeSection className="home-presentation">
        <span>Olá, eu sou o</span>
        <span>Victor!</span>
      </HomeSection>
      <HomeSection className="home-image">
        <CodeSvg />
      </HomeSection>
      <HomeSection className="home-description">
        <span className="emphasis">
          Um eterno estudante apaixonado por tecnologia!
        </span>
        <span className="description">
          Esse site tem por objetivo falar um pouquinho sobre mim e expor alguns
          projetos atualmente baseados em estudos. Serão projetos adicionados
          periodicamente. Este próprio site terá suas melhorias futuras, sendo
          refatorado com alguma frequência.
        </span>
      </HomeSection>
    </HomeContainer>
  );
};
