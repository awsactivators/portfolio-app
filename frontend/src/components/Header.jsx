import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/Kvieve-2-2.png';
import menuIcon from '../assets/images/menu.png';
import { useState } from 'react';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Kvieve logo" /></Link>
          <img
            src={menuIcon}
            alt="menu icon"
            className="menu-toggle menu-icon"
            id="menu-icon"
            onClick={toggleMenu}
          />
        </div>
        <nav id="main-navigation">
        <ul className={`menu ${showMenu ? 'show-small' : ''}`} id="main-menu">
          <li><NavLink to="/#about-me">About Me</NavLink></li>
          <li><NavLink to="/#skill">Skills</NavLink></li>
          <li><NavLink to="/#project">Projects</NavLink></li>
          <li><NavLink to="/#blog">Blog</NavLink></li>
          <li><NavLink to="/#contact">Contact</NavLink></li>
        </ul>

        </nav>
      </div>
    </header>
  );
}

export default Header;
