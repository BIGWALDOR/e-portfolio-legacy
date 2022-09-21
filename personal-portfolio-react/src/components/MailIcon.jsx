import { FaEnvelope } from 'react-icons/fa'

import { toggleModal } from '../../toggleModal'

export const MailIcon = () => {
  return (
    <a href="#">
      <button class="mail__btn click" onclick={toggleModal}>
        <FaEnvelope />
      </button>
    </a>
  )
}
