function contact(event) {
  event.preventDefault()

  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')

  loading.classList += ' modal__overlay--visible'

  emailjs
    .sendForm(
      'service_mu3qwmi',
      'template_rb794vc',
      event.target,
      'K0T6cV4xLRt23lv2M'
    )
    .then(() => {
      loading.classList.remove('modal__overlay--visible')
      success.classList += ' modal__overlay--visible'
    })
    .catch(() => {
      loading.classList.remove('modal__overlay--visible')
      alert('Something went wrong. Please try again.')
    })
}

module.exports = contact
