import { ProjectsContainer, Project } from './styled';

export const Projects = () => {
  return (
    <ProjectsContainer>
      <Project>
        <a
          href="https://la-pizza-forget.vercel.app/"
          target="_blank"
          className="project-preview"
        >
          <span className="project-name emphasis">Kekw's Pizza</span>
          <img alt="preview" src="src/utils/images/projects/kekwspizza.jpg" />
        </a>
        <span className="project-description description">
          Projeto de estudo para gerenciar uma pizzaria. Sistema é capaz de
          gerenciar usuários (clientes e administradores), pedidos e produtos em
          um sistema CRUD. API baseada em <em>NodeJS</em> utilizando o{' '}
          <em>Sequelize</em> para consumir um banco de dados Postgres. Front-end
          feito em <em>React</em> e back-end em <em>NodeJS</em>.
        </span>
      </Project>
      <Project>
        <span className="project-preview">
          <span className="project-name emphasis">Em breve</span>
          <img alt="preview" src="src/utils/images/projects/coming+soon.jpg" />
        </span>
        <span className="project-description description">...</span>
      </Project>
    </ProjectsContainer>
  );
};
