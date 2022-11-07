import {Link} from 'react-router-dom'
const Navbar = () => {
  return (  
    <nav>
      <Link to='/'>
        Luigi Tejada
      </Link>
      <ul>
        <li>
          <Link to='contact'>
            Contact
          </Link>
        </li>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='projects'>
            Projects
          </Link>
        </li>
        <li>
          <Link to='resume'>
            Resume
          </Link>
        </li>
        <li>
          <Link to='about'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;