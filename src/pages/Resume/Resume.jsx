import resume from '../../assets/branding/Luigi_Tejada_Resume.pdf'
import './Resume.module.css'

const Resume = () => {
  return ( 
    <>
      <h1>Resume</h1>
      <h2>If you'd like to learn more about my work or download my resume to review at your leisure, please feel free!</h2>
      <embed src={resume} width="98%" height="950" type="text/pdf" />
    </>
  );
}

export default Resume;