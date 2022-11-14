import resume from '../../assets/branding/Luigi_Tejada_Resume.pdf'
import './Resume.module.css'

const Resume = () => {
  return ( 
    <>
      <h1>Resume</h1>
      <h2>If you'd like to learn more about my work, please <a href={resume} download="Luigi_Tejada_Resume.pdf">download my resume</a>.</h2>
    </>
  );
}

export default Resume;