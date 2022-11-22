import myPhoto from '../../assets/branding/me.jpg'
import styles from './About.module.css'

const About = () => {
  return ( 
    <>
      <h1>About</h1>
      <img className={styles.image} src={myPhoto} alt="Luigi" />
    </>
  );
}

export default About;