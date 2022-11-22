import myPhoto from '../../assets/branding/me.jpg'
import styles from './About.module.css'
import { Link } from 'react-router-dom';

const About = () => {
  return ( 
    <>
      <h1>About</h1>
      <section className={styles.aboutMeSection}>
        <img className={styles.image} src={myPhoto} alt="Luigi" />
        <p className={styles.aboutMe}>
        Luigi Tejada is a Brooklyn native who loves to read, play video games and wrangle his toddler. To say he has a mean sneaker collection is lacking, he never leaves his home without a fresh pair of kicks. 
        <br/><br/>
        In his spare time he likes to read sci-fi books, bake desserts, and play the lastest game (have you checked out God of War Ragnarok?). Luigi loves to learn new languages (working on Japanese) and tackling a challenging puzzle.
        <br/><br/>
        Having a degree in Computer Information Systems from New York City College of Technology, he combined his love for learning new languages and puzzles, thus ultimately landing him in coding, a puzzle of languages. Luigi successfully completed a 12 week intensive boot camp with General assembly and learned CSS, HTML, Javascript, React, and Python. Check out his latest projects using those technologies <Link to='/projects'>here</Link>.
        <br/><br/>
        Luigi currently resides in the suburbs of Connecticut with his daughter, fiance, and dog.
        </p>
      </section>
    </>
  );
}

export default About;