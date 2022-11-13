import { useParams } from "react-router-dom"
import { projects } from "../../assets/ProjectsJS/projects"
import './ProjectDetails.module.css'

const ProjectDetails = () => {
  const { title } = useParams()
  const project = projects.find((el) => el.title === title)
  console.log(project)
  return (
    <main>
      <h1>{project.title}</h1>
      <embed src={project.deploymentLink} type="text/html" width="99%" height="1000"/>
      <p>{project.description}</p>
    </main>
  );
}

export default ProjectDetails;