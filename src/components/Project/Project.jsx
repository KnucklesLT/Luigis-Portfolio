import { Link } from "react-router-dom";
import styles from "./Project.module.css"

const Project = ({project}) => {
  return (
    <Link to={`/projects/${project.title}`}>
      <section className={styles.title}>
        <img src={project.image} alt={project.name} />
        <h1>{project.title}</h1>
      </section>
    </Link>
  );
}

export default Project;