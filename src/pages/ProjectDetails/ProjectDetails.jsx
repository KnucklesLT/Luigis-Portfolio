import { useParams } from "react-router-dom"
import { projects } from "../../assets/ProjectsJS/projects"
import './ProjectDetails.module.css'

const ProjectDetails = () => {
  const { title } = useParams()
  const project = projects.find((el) => el.title === title)
  return (
    <main>
      <h1><a href={project.deploymentLink}>{project.title}</a></h1>
      <iframe src={project.deploymentLink} title={project.title} type="text/html" width="99%" height="1000"/>
      <p>{project.description}</p><br />
      <p>Vist my Github for <a href={project.repositoryLink}>{project.title}</a></p>
    </main>
  );
}

export default ProjectDetails;