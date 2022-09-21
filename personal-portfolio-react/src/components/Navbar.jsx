import { VscColorMode } from 'react-icons/vsc'

import { toggleDarkMode } from '../../../toggleDarkMode'
import { toggleModal } from '../../../toggleModal'

import personalLogo from '../assets/WB_Logo-removebg.png'

export const Navbar = () => {
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
