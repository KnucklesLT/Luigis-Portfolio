import Project from "../../components/Project/Project";
import { projects } from "../../assets/ProjectsJS/projects";
const Projects = () => {
  
  return ( 
    <>
      <h1>Projects</h1>
      <Project projects={projects}/>
    </>
  );
}

export default Projects;