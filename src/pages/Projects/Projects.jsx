import Project from "../../components/Project/Project";
import { projects } from "../../assets/ProjectsJS/projects";
import styles from "./Projects.module.css"

const Projects = () => {
  return ( 
    <>
      <main className={styles.container}>
        {projects.map(project => (
          <Project key={project.title} project={project}/>
        ))}
      </main>
    </>
  );
}

export default Projects;