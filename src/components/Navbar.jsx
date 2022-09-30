import { VscColorMode } from 'react-icons/vsc'

import { toggleModal } from '../../helper/toggleModal'

import personalLogo from '../assets/WB_Logo-removebg.png'

export const Navbar = () => {
  let isDarkMode = false

  function toggleDarkMode() {
    e.preventDefault()
    isDarkMode = !isDarkMode
      ? (document.body.classList += ' dark-mode')
      : document.body.classList.remove('dark-mode')
  }

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
  )
}
