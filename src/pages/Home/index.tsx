import { HomeSection, HomeContainer } from './styled';
import { CodeSvg } from '../../../public/static/images/global/codeSvg';

export const Home = () => {
  return (
    <HomeContainer className="grid-template">
      <HomeSection className="home-presentation">
        <h1>
          Olá, eu sou o<br /> <em>Victor</em>!
        </h1>
      </HomeSection>
      <HomeSection className="home-image">
        <CodeSvg />
      </HomeSection>
      <HomeSection className="home-description">
        <span className="emphasis">
          Um eterno estudante apaixonado por tecnologia!
        </span>
        <span className="description">
          Esse site tem por objetivo{' '}
          <em>
            falar um pouquinho sobre mim e expor alguns projetos atualmente
            baseados em estudos
          </em>
          . Serão projetos adicionados periodicamente. Este próprio site terá
          suas melhorias futuras, sendo refatorado com alguma frequência.
        </span>
      </HomeSection>
    </HomeContainer>
  );
};
