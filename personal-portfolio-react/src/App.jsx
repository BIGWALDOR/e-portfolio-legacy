import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { ScrollIcon } from './components/ScrollIcon'
import { MailIcon } from './components/MailIcon'

const App = () => {
  return (
    <section id="landing-page" onmousemove="moveBackground(event)">
      <Navbar />
      <Header />
      <ScrollIcon />
      <MailIcon />
    </section>
  )
}

export default App
