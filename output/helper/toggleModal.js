"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleModal = void 0;
let isModalOpen = false;
const toggleModal = () => {
    isModalOpen = !isModalOpen
        ? (document.body.classList += ' modal--open')
        : document.body.classList.remove('modal--open');
};
exports.toggleModal = toggleModal;
