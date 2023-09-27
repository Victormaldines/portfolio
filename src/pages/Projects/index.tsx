import { ProjectsContainer, Project } from './styled';

export const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>Projetos</h1>
      <div className="projects">
        <Project>
          <a
            href="https://la-pizza-forget.vercel.app/"
            target="_blank"
            className="project-preview"
          >
            <h2 className="project-name emphasis">laPizza</h2>
            <img alt="preview" src="/static/images/projects/kekwspizza.jpg" />
          </a>
          <span className="project-description">
            <span className="description">
              Projeto de estudo para gerenciar uma pizzaria. Sistema é capaz de
              gerenciar usuários (clientes e administradores), pedidos e
              produtos em um sistema CRUD. O projeto hospedado precisou ter
              algumas tecnologias alteradas a fim de obter uma hospedagem com o
              menor custo possível, todas tecnologias originais estão
              disponíveis no repositório disponibilizado logo abaixo.
            </span>
            <span className="technologies">
              <span className="technology">React</span>
              <span className="technology">NodeJS</span>
              <span className="technology">Mariadb</span>
            </span>
            <span className="repository">
              <a
                href="https://github.com/Victormaldines/laPizza"
                target="_blank"
              >
                Ir para o repositório
              </a>
            </span>
          </span>
        </Project>
        <Project>
          <span className="project-preview">
            <h2 className="project-name emphasis">Em breve</h2>
            <img alt="preview" src="/static/images/projects/coming+soon.jpg" />
          </span>
          <span className="project-description description">...</span>
        </Project>
      </div>
    </ProjectsContainer>
  );
};
