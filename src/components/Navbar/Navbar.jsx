import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (  
    <nav className={styles.container}>
      <NavLink to={'/'} className={styles.logo}>
        LT
      </NavLink>
      <ul>
        <li>
          <NavLink to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='projects'>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='resume'>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to='about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;