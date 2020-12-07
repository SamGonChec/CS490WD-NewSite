import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function NavBar() {

  const [navBackground, setNavBackground] = useState('navbar')
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavBackground('navbar-scrolled')
      } else {
        setNavBackground('navbar')
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={navBackground}>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo transparent-header' onClick={closeMobileMenu}>
              <img src='img/RFCLogo.png' alt="Richmond Family Clinic" height='82' id="logo"></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;