import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { ScrollIcon } from './components/ScrollIcon'
import { MailIcon } from './components/MailIcon'
import { Projects } from './components/Projects'

const App = () => {
  return (
    <>
      <section id="landing-page" onmousemove="moveBackground(event)">
        <Navbar />
        <Header />
        <ScrollIcon />
        <MailIcon />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  )
}

export default App
