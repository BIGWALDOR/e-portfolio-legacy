import React, { ReactElement } from 'react';
import { useState, useEffect } from 'react';

import { VscColorMode } from 'react-icons/vsc';

import { toggleModal } from '../../helper/toggleModal';

import personalLogo from '../assets/WB_Logo-removebg.png';

export const Navbar = (): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode: boolean | string | null =
      localStorage.getItem('isDarkMode');
    if (isDarkMode === 'true') {
      document.body.classList.add('dark-mode');
      setIsDarkMode(true);
    }

    if (isDarkMode === 'false') {
      document.body.classList.remove('dark-mode');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem(
      'isDarkMode',
      Boolean.prototype.toString.call(!isDarkMode)
    );
  };

  return (
    <nav>
      <figure>
        <a href="#">
          <img id="personal-logo" src={personalLogo} />
        </a>
      </figure>
      <ul className="nav__link--list">
        <li className="nav__link">
          <a
            href="#"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
            onClick={toggleModal}
          >
            About
          </a>
        </li>
        <li className="nav__link">
          <a
            href="#projects"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            Projects
          </a>
        </li>
        <li className="nav__link" onClick={toggleModal}>
          <a
            href=""
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            Contact
          </a>
        </li>
        <li className="nav__link click" onClick={toggleDarkMode}>
          <a
            href=""
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            <VscColorMode />
          </a>
        </li>
      </ul>
    </nav>
  );
};
