let isModalOpen = false

function toggleModal() {
  isModalOpen = !isModalOpen
    ? (document.body.classList += ' modal--open')
    : document.body.classList.remove('modal--open')
}

module.exports = toggleModal
