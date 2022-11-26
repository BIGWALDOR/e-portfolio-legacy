import * as React from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { ScrollIcon } from './components/ScrollIcon';
import { MailIcon } from './components/MailIcon';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

import { moveBackground } from '../helper/moveBackground';

import semiCircle from './assets/semi circle.svg';
import circle from './assets/circle.svg';
import squiggly from './assets/squiggly.svg';
import triangle from './assets/triangle.svg';

export const App = () => {
  return (
    <>
      <section id="landing-page" onMouseMove={moveBackground}>
        <Navbar />
        <Header />
        <ScrollIcon />
        <MailIcon />
        <Modal />
        <img src={semiCircle} className="shape shape--zero" />
        <img src={circle} className="shape shape--one" />
        <img src={squiggly} className="shape shape--two" />
        <img src={circle} className="shape shape--three" />
        <img src={triangle} className="shape shape--four" />
        <img src={circle} className="shape shape--five" />
        <img src={squiggly} className="shape shape--six" />
        <img src={circle} className="shape shape--seven" />
        <img src={semiCircle} className="shape shape--eight" />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </>
  );
};
