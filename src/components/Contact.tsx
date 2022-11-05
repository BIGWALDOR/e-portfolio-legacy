import React, { FormEvent, ReactElement, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaSpinner } from 'react-icons/fa';

export const Contact = (): ReactElement => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    const loading: any = document.querySelector('.modal__overlay--loading');
    const success: any = document.querySelector('.modal__overlay--success');

    loading.classList += ' modal__overlay--visible';

    emailjs
      .sendForm(
        'service_mu3qwmi',
        'template_rb794vc',
        e.target as HTMLFormElement,
        'K0T6cV4xLRt23lv2M'
      )
      .then(() => {
        loading.classList.remove('modal__overlay--visible');
        success.classList += ' modal__overlay--visible';
      })
      .catch(() => {
        loading.classList.remove('modal__overlay--visible');
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <>
      <form id="contact__form" onSubmit={sendEmail} ref={form}>
        <div className="form__item">
          <label className="form__item--label">Name</label>
          <input type="text" className="input" name="user_name" />
        </div>
        <div className="form__item">
          <label className="form__item--label">Email</label>
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
        <FaSpinner className="fa-spinner" />
      </div>
    </>
  );
};
