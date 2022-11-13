import { Link } from "react-router-dom";

const Project = ({project}) => {
  return (
    <Link to={`/projects/${project.title}`}>
      <section>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.name} />
      </section>
    </Link>
  );
}

export default Project;