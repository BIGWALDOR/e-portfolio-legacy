import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { ScrollIcon } from './components/ScrollIcon'
import { MailIcon } from './components/MailIcon'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { Modal } from './components/Modal'

const App = () => {
  return (
    <>
      <section id="landing-page" onMouseMove="moveBackground(event)">
        <Navbar />
        <Header />
        <ScrollIcon />
        <MailIcon />
        <Modal />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </>
  )
}

export default App
