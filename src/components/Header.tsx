import React, { ReactElement } from 'react';
import { FaLinkedinIn, FaGithub, FaRegFilePdf } from 'react-icons/fa';

import { toggleModal } from '../../helper/toggleModal';

export const Header = (): ReactElement => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="title">Kia Ora</h1>
        <h1 className="title--secondary">I'm Walid!</h1>
        <p className="header__para">
          I'm a
          <span className="text--secondary"> Fullstack Software Engineer </span>
          with a strong passion for building web applications with great user
          experiences.
          <br />
          Here's a bit a more&nbsp;
          <span className="text--secondary click" onClick={toggleModal}>
            about me
          </span>
          .
        </p>
      </div>
      <div className="social__list">
        <a
          href="https://www.linkedin.com/in/walid-bouladam-91ba38168/"
          className="social__link click"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/BIGWALDOR"
          className="social__link click"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="./assets/WB-Resume.pdf"
          className="social__link click"
          target="_blank"
        >
          <FaRegFilePdf />
        </a>
      </div>
    </header>
  );
};
