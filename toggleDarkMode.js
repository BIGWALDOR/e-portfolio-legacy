let isDarkMode = false

function toggleDarkMode() {
  event.preventDefault()
  isDarkMode = !isDarkMode
    ? (document.body.classList += ' dark-mode')
    : document.body.classList.remove('dark-mode')
}
