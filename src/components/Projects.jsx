import { FaGithub, FaLink } from 'react-icons/fa'

import projectImgOne from '../assets/real-estate-webapp.png'
import projectImgTwo from '../assets/project-management-webapp.png'

export const Projects = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="section__title">
          Here are some of my <span className="text--secondary">projects</span>
        </h1>
        <ul className="project__list">
          <li className="project">
            <div className="project__wrapper">
              <img className="project__img" src={projectImgOne} alt="" />
              <div className="project__wrapper--bg"></div>
              <div className="project__description">
                <h3 className="project__description--title">Cloud9 Realtor</h3>
                <h4 className="project__description--sub-title">
                  React, NextJS, Chakra UI
                </h4>
                <p className="project__description--para">
                  A real estate web application built with React, NextJS and
                  Chakra UI. I built this project as an exercise to improve my
                  React skills and to learn how to use the NextJS framework, as
                  well as learning how to leverage a modular component library,
                  in Chakra UI.
                </p>
                <div className="project__description--links">
                  <a
                    href="https://github.com/BIGWALDOR/real-estate-webapp"
                    className="project__description--link"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://real-estate-webapp-three.vercel.app/"
                    className="project__description--link"
                    target="_blank"
                  >
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="project">
            <div className="project__wrapper">
              <img className="project__img" src={projectImgTwo} alt="" />
              <div className="project__wrapper--bg"></div>
              <div className="project__description">
                <h3 className="project__description--title">
                  Project Management
                </h3>
                <h4 className="project__description--sub-title">
                  React, ApolloClient, GraphQL, Express and MongoDB
                </h4>
                <p className="project__description--para">
                  A simple project management, fullstack web application built
                  with React, ApolloClient, GraphQL, Express and MongoDB. I
                  built this project as an exercise to learn how to use the
                  ApolloClient framework, the GraphQL language and using a NoSQL
                  database in MongoDB through the use of an ORM in Mongoose.
                </p>
                <div className="project__description--links">
                  <a
                    href="https://github.com/BIGWALDOR/project-management-webapp"
                    className="project__description--link"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://project-management-fullstack.herokuapp.com/"
                    className="project__description--link"
                    target="_blank"
                  >
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
