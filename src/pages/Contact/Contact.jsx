import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from './Contact.module.css'

const Contact = () => {
  return (  
    <>
      <h1>If you'd like to reach me</h1>
      <p className={styles.paragraph}>
        <a className={styles.icon} href="https://www.linkedin.com/in/luigi-tejada/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size='9x' /> </a>
        
        <a className={styles.icon} href="https://github.com/KnucklesLT" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='9x'/> </a> 
        <a className={styles.icon} href="mailto: luigitejada@yahoo.com"><FontAwesomeIcon icon={faEnvelope} size='9x'/> </a> 
      </p>
    </>
  );
}

export default Contact;