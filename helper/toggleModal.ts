let isModalOpen = false;

export const toggleModal = () => {
  isModalOpen = !isModalOpen
    ? (document.body.classList += ' modal--open')
    : document.body.classList.remove('modal--open');
};
