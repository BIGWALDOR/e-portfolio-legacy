import { FaTimes, FaSpinner } from 'react-icons/fa'

import { toggleModal } from '../../../toggleModal'

import awsLogo from '../assets/aws.png'
import azureLogo from '../assets/azure.png'
import nodeJSLogo from '../assets/nodejs.png'

export const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__half modal__about">
        <h3 className="modal__title modal__title--about">
          Here's a bit about me.
        </h3>
        <h4 className="modal__sub-title modal__sub-title--about">
          Fullstack Engineer.
        </h4>
        <p className="modal__para">
          Previously hailing from the Hospitality industry, I took the plunge
          towards the end of 2021 and enrolled myself in a&nbsp;
          <span className="text--secondary">Web Development Bootcamp</span>{' '}
          at&nbsp;
          <a href="https://devacademy.co.nz/" className="text--secondary">
            Enspiral Dev Academy&nbsp;
          </a>
          and haven't looked back since. I'm currently honing my craft as
          a&nbsp;
          <span className="text--secondary">Fullstack Engineer</span> at&nbsp;
          <a href="https://www.ezyvet.com/" className="text--secondary">
            ezyVet
          </a>
          .
        </p>
        <div className="modal__languages">
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
              alt="HTML5 Logo"
            />
            <span className="language__name">HTML</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
              alt="CSS3 Logo"
            />
            <span className="language__name">CSS</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
              alt="JavaScript Logo"
            />
            <span className="language__name">JavaScript</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
              alt="React Logo"
            />
            <span className="language__name">React</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src={nodeJSLogo}
              alt="Node.js Logo"
            />
            <span className="language__name">Node.js</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src={awsLogo}
              alt="AWS Logo"
            />
            <span className="language__name">AWS</span>
          </figure>
          <figure className="modal__language">
            <img
              className="modal__language--img"
              src={azureLogo}
              alt="Azure Logo"
            />
            <span className="language__name">Azure</span>
          </figure>
        </div>
      </div>
      <div className="modal__half modal__contact">
        <FaTimes className="modal__exit click" onClick={toggleModal} />
        <h3 className="modal__title modal__title--contact">
          Let's have a chat!
        </h3>
        <h4 className="modal__sub-title modal__sub-title--contact">
          I'm currently open to new opportunities.
        </h4>
        <form id="contact__form" onsubmit="contact(event)">
          <div className="form__item">
            <label className="form__item--label">Name</label>
            <input type="text" className="input" name="user_name" />
          </div>
          <div className="form__item">
            <label className="form__item--label" f>
              Email
            </label>
            <input type="email" className="input" name="user_email" />
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
            <textarea className="input" name="user_message"></textarea>
          </div>
          <button id="contact_submit" className="form__submit">
            Send it my way
          </button>
        </form>
        <div className="modal__overlay modal__overlay--loading">
          <FaSpinner />
        </div>
        <div className="modal__overlay modal__overlay--success">
          Thanks for the message! Looking forward to speaking with you soon.
        </div>
      </div>
    </div>
  )
}
