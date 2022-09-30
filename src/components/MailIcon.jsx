import { FaEnvelope } from 'react-icons/fa'

import { toggleModal } from '../../helper/toggleModal'

export const MailIcon = () => {
  return (
    <a href="#">
      <button className="mail__btn click" onClick={toggleModal}>
        <FaEnvelope />
      </button>
    </a>
  )
}
